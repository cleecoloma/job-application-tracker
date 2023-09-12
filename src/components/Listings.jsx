import React from 'react';
import JobCard from './JobCard';
import '../styles/Listings.css';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import AddJobModal from './AddJobModal';

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

class Listings extends React.Component {
  constructor() {
    super();
    this.state = {
      jobs: [],
      token: null,
      modalPreview: false,
    };
  }

  sendRequest = async (method, token, id, data) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method,
      baseUrl: SERVER_URL,
      url: id ? `/jobs/${id}` : '/jobs',
      data: data ? data : null,
    };
    return await axios(config);
  };

  async componentDidMount() {
    const response = await this.props.auth0.getIdTokenClaims();
    const token = response.__raw;
    // console.log(token);
    this.setState({ token }, () => {
      this.handleGetJobs();
    });
  }

  // READ
  handleGetJobs = async () => {
    const response = this.sendRequest('GET', this.state.token);
    this.setState({
      jobs: response.data,
    });
  };

  // CREATE
  handleCreateJobs = async (job) => {
    const jobObject = job;
    const response = this.sendRequest(
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
    const response = this.sendRequest('PUT', this.state.token, id, updatedJob);
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
    const response = this.sendRequest('DELETE', this.state.token, id);
    const updatedJobs = this.props.jobs.filter((job) => {
      recipe._id !== id;
    });
    this.setState({
      jobs: updatedJobs,
    });
    this.handleGetJobs();
  };

  toggleModal = () => {
    this.setState({ modalPreview: !this.state.modalPreview });
  };

  render() {
    console.log(this.state.jobs);
    return (
      <div className="listings">
        <Button
          className="button"
          variant="primary"
          onClick={() => this.toggleModal()}
        >
          + Add Job
        </Button>
        <AddJobModal
          modalPreview={this.state.modalPreview}
          toggleModal={this.toggleModal}
          handleCreateJobs={this.handleCreateJobs}
        />
        <div>
          {this.state.jobs.length > 0
            ? this.state.jobs.map((job, idx) => (
                <JobCard key={idx} jobs={this.state.jobs} />
              ))
            : null}
        </div>
      </div>
    );
  }
}

const AuthListings = withAuth0(Listings);

export default AuthListings;
