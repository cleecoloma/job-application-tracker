import React from 'react';
import JobCard from './JobCard';
import '../styles/Listings.css';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import AddJobModal from './AddJobModal';
import EditJobModal from './EditJobModal';
import FullModal from './FullModal';

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

class Listings extends React.Component {
  constructor() {
    super();
    this.state = {
      jobs: [],
      token: null,
      modalPreview: false,
      fullModalPreview: false,
      showSpecificJob: null,
      editSpecificJob: null,
      editModalPreview: false,
    };
  }

  sendRequest = (method, token, id, data) => {
    const config = {
      method,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      baseURL: SERVER_URL,
      url: id ? `/jobs/${id}` : '/jobs',
      data: data ? data : null,
    };
    return axios(config);
  };

  async componentDidMount() {
    const response = await this.props.auth0.getIdTokenClaims();
    const token = response.__raw;
    this.setState({ token }, () => {
      this.handleGetJobs();
    });
  }

  // READ
  handleGetJobs = async () => {
    // console.log('Sending get request')
    const response = await this.sendRequest('GET', this.state.token);
    this.setState({
      jobs: response.data,
    });
    // console.log('Got get request back')
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
    this.setState({
      jobs: [...this.state.jobs, response.data],
    });
    console.log(jobObject);
  };

  // UPDATE
  handleUpdateJobs = async (id, updatedJob) => {
    const response = await this.sendRequest(
      'PUT',
      this.state.token,
      id,
      updatedJob
    );
    const updatedJobs = this.state.jobs.map((job) => {
      if (job.id === id) {
        return response.data;
      }
      return job;
    });
    this.setState({
      jobs: updatedJobs,
    });
    this.handleGetJobs();
  };

  // DELETE
  handleDeleteJobs = async (id) => {
    const response = await this.sendRequest('DELETE', this.state.token, id);
    const updatedJobs = this.state.jobs.filter((job) => {
      job.id !== id;
    });
    this.setState({
      jobs: updatedJobs,
    });
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
    }, () => this.toggleFullModal());
  };

  render() {
    // console.log(this.state.token);
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
        />
        <EditJobModal
          editModalPreview={this.state.editModalPreview}
          toggleEditModal={this.toggleEditModal}
          jobs={this.state.editSpecificJob}
        />
        <FullModal
          toggleFullModal={this.toggleFullModal}
          fullModalPreview={this.state.fullModalPreview}
          jobs={this.state.showSpecificJob}
          toggleEditModal={this.toggleEditModal}
        />
        <div className="listings">
          {this.state.jobs.length > 0
            ? this.state.jobs.map((job, idx) => (
                <JobCard
                  key={idx}
                  jobs={job}
                  toggleFullModal={this.toggleFullModal}
                  fullModalPreview={this.state.fullModalPreview}
                  toggleEdit={this.toggleEdit}
                  toggleDelete={this.toggleDelete}
                />
              ))
            : null}
        </div>
      </>
    );
  }
}

const AuthListings = withAuth0(Listings);

export default AuthListings;
