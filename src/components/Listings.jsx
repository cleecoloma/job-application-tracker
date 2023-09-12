import React from 'react';
import JobCard from './JobCard';
import '../styles/Listings.css';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

class Listings extends React.Component {
  constructor() {
    super();
    this.state = {
      token: null,
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
    console.log(token);
    this.setState({ token }, () => {
      this.handleGetJobs();
    });
  }

  // READ
  handleGetJobs = async () => {
    const response = this.sendRequest('GET', this.state.token);
    const updatedJobs = (await response).data;
    this.props.toggleJobs(updatedJobs);
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
    this.props.toggleJobs([...this.props.jobs, response.data]);
  };

  // UPDATE
  handleUpdateJobs = async (id, updatedJob) => {
    const response = this.sendRequest('PUT', this.state.token, id, updatedJob);
    const updatedJobs = this.props.jobs.map((job) => {
      if (job.id === id) {
        return response.data;
      }
      return job;
    });
    this.props.toggleJobs(updatedJobs);
    this.handleGetJobs();
  };

  // DELETE
  handleDeleteJobs = async (id) => {
    const response = this.sendRequest('DELETE', this.state.token, id);
    const updatedJobs = this.props.jobs.filter((job) => {
      recipe._id !== id;
    });
    this.props.toggleJobs(updatedJobs);
    this.handleGetJobs();
  };

  render() {
    return (
      <>
        <Button
          className="button"
          variant="primary"
          onClick={() => this.props.toggleModal()}
        >
          + Add Job
        </Button>
        <div className="listings">
          {this.props.jobs.length > 0
            ? this.props.jobs.map(<JobCard key={id} jobs={this.props.jobs} />)
            : null}
        </div>
      </>
    );
  }
}

const AuthListings = withAuth0(Listings);

export default AuthListings;
