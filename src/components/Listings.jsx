import React from 'react';
import JobColumn from './JobColumn';
import '../styles/Listings.css';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import AddJobModal from './AddJobModal';
import EditJobModal from './EditJobModal';
import FullModal from './FullModal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const SERVER_URL = import.meta.env.VITE_SERVER_URL;
const DEMO_TOKEN = import.meta.env.VITE_DEMO_TOKEN;

class Listings extends React.Component {
  constructor() {
    super();
    this.state = {
      user: null,
      initialJobs: [],
      token: null,
      modalPreview: false,
      fullModalPreview: false,
      showSpecificJob: null,
      editSpecificJob: null,
      editModalPreview: false,
      backgroundColor: {
        interested: 'lightgray',
        applied: 'lightseagreen',
        interview: 'lightsalmon',
        rejected: 'lightpink',
      },
      showSelect: window.innerWidth <= 1000,
      inputType: 'option1',
    };
  }

  handleWindowSizeChange = () => {
    this.setState({
      showSelect: window.innerWidth <= 1000,
    });
  };

  handleInputChange = (event) => {
    this.setState({
      inputType: event.target.value,
    });
  };

  sendRequest = (method, token, id, data, queryParams) => {
    const baseURL = SERVER_URL;
    let url = id ? `/jobs/${id}` : '/jobs';
    if (queryParams) {
      url += '?' + new URLSearchParams(queryParams).toString();
    }

    const config = {
      method,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      baseURL,
      url,
      data: data ? data : null,
    };
    return axios(config);
  };

  async componentDidMount() {
    if (this.props.isDemoAccount) {
      const token = DEMO_TOKEN;
      const user = this.props.demoUser;
      this.setState(
        {
          token,
          user,
        },
        () => {
          this.handleGetJobs(user.email);
        }
      );
    } else {
      const response = await this.props.auth0.getIdTokenClaims();
      const token = response.__raw;
      this.setState({ token, user: response.email }, () => {
        this.handleGetJobs(response.email);
        this.props.handleProfilePage(response);
        console.log(this.props.auth0.user);
      });
    }
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  // READ
  handleGetJobs = async (email) => {
    const queryParams = { user: email };
    const response = await this.sendRequest(
      'GET',
      this.state.token,
      null,
      null,
      queryParams
    );
    this.props.handleJobs(response.data);
  };

  // CREATE
  handleCreateJobs = async (job) => {
    const jobObject = job;
    const response = await this.sendRequest(
      'POST',
      this.state.token,
      null,
      jobObject
    );
    this.props.handleJobs([...this.props.jobs, response.data]);
  };

  // UPDATE
  handleUpdateJobs = async (id, updatedJob, email) => {
    const response = await this.sendRequest(
      'PUT',
      this.state.token,
      id,
      updatedJob
    );
    const updatedJobs = this.props.jobs.map((job) => {
      if (job.id === id) {
        return response.data;
      }
      return job;
    });
    this.props.handleJobs(updatedJobs);
    this.handleGetJobs(email);
  };

  // DELETE
  handleDeleteJobs = async (id) => {
    const response = await this.sendRequest('DELETE', this.state.token, id);
    const updatedJobs = this.props.jobs.filter((job) => {
      job._id !== id;
    });
    this.setState({
      fullModalPreview: !this.state.fullModalPreview,
    });
    this.props.handleJobs(updatedJobs);
    this.handleGetJobs();
  };

  toggleAddModal = () => {
    this.setState({ modalPreview: !this.state.modalPreview });
  };

  toggleFullModal = (job) => {
    this.setState({
      fullModalPreview: !this.state.fullModalPreview,
      showSpecificJob: job,
    });
  };

  toggleEditModal = (job) => {
    this.setState({
      editModalPreview: !this.state.editModalPreview,
      editSpecificJob: job,
    });
  };

  render() {
    return (
      <>
        <Button
          className="addButton"
          variant="success"
          onClick={() => this.toggleAddModal()}
        >
          + Add Job
        </Button>
        <AddJobModal
          modalPreview={this.state.modalPreview}
          toggleAddModal={this.toggleAddModal}
          handleCreateJobs={this.handleCreateJobs}
          user={this.state.user}
        />
        <EditJobModal
          editModalPreview={this.state.editModalPreview}
          toggleEditModal={this.toggleEditModal}
          jobs={this.state.editSpecificJob}
          handleUpdateJobs={this.handleUpdateJobs}
          toggleFullModal={this.toggleFullModal}
        />
        <FullModal
          toggleFullModal={this.toggleFullModal}
          fullModalPreview={this.state.fullModalPreview}
          jobs={this.state.showSpecificJob}
          toggleEditModal={this.toggleEditModal}
          handleDeleteJobs={this.handleDeleteJobs}
          handleUpdateJobs={this.handleUpdateJobs}
          backgroundColor={this.state.backgroundColor}
        />
        <Container className="listings-container">
          {this.state.showSelect ? (
            <div>
              <select
                className="listings-selector btn btn-outline-light"
                value={this.state.inputType}
                onChange={this.handleInputChange}
              >
                <option value="option1">Interested</option>
                <option value="option2">Applied</option>
                <option value="option3">Interview</option>
                <option value="option4">Rejected</option>
              </select>
              {this.state.inputType === 'option1' ? (
                <JobColumn
                  jobs={this.props.jobs}
                  status="Interested"
                  toggleFullModal={this.toggleFullModal}
                  fullModalPreview={this.state.fullModalPreview}
                  backgroundColor={this.state.backgroundColor.interested}
                />
              ) : this.state.inputType === 'option2' ? (
                <JobColumn
                  jobs={this.props.jobs}
                  status="Applied"
                  toggleFullModal={this.toggleFullModal}
                  fullModalPreview={this.state.fullModalPreview}
                  backgroundColor={this.state.backgroundColor.applied}
                />
              ) : this.state.inputType === 'option3' ? (
                <JobColumn
                  jobs={this.props.jobs}
                  status="Interview"
                  toggleFullModal={this.toggleFullModal}
                  fullModalPreview={this.state.fullModalPreview}
                  backgroundColor={this.state.backgroundColor.interview}
                />
              ) : (
                <JobColumn
                  jobs={this.props.jobs}
                  status="Rejected"
                  toggleFullModal={this.toggleFullModal}
                  fullModalPreview={this.state.fullModalPreview}
                  backgroundColor={this.state.backgroundColor.rejected}
                />
              )}
            </div>
          ) : (
            <div>
              <Row>
                <Col className="listings-header">Interested</Col>
                <Col className="listings-header">Applied</Col>
                <Col className="listings-header">Interview</Col>
                <Col className="listings-header">Rejected</Col>
              </Row>
              <Row>
                <JobColumn
                  jobs={this.props.jobs}
                  status="Interested"
                  toggleFullModal={this.toggleFullModal}
                  fullModalPreview={this.state.fullModalPreview}
                  backgroundColor={this.state.backgroundColor.interested}
                />
                <JobColumn
                  jobs={this.props.jobs}
                  status="Applied"
                  toggleFullModal={this.toggleFullModal}
                  fullModalPreview={this.state.fullModalPreview}
                  backgroundColor={this.state.backgroundColor.applied}
                />
                <JobColumn
                  jobs={this.props.jobs}
                  status="Interview"
                  toggleFullModal={this.toggleFullModal}
                  fullModalPreview={this.state.fullModalPreview}
                  backgroundColor={this.state.backgroundColor.interview}
                />
                <JobColumn
                  jobs={this.props.jobs}
                  status="Rejected"
                  toggleFullModal={this.toggleFullModal}
                  fullModalPreview={this.state.fullModalPreview}
                  backgroundColor={this.state.backgroundColor.rejected}
                />
              </Row>
            </div>
          )}
        </Container>
      </>
    );
  }
}

const AuthListings = withAuth0(Listings);

export default AuthListings;
