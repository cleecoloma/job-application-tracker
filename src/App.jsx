import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import React from 'react';
import AddJobModal from './components/AddJobModal';
import Search from './components/Search';
import Listings from './components/Listings';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      token: null,
      modalPreview: false,
      jobs: [],
    };
  }

  sendRequest = async (method, token, id, data) => {
    config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method,
      baseUrl: SERVER_URL,
      url: id ? `/jobs/${id}`: '/jobs',
      data: data ? data : null,
    };
    return await axios(config);
  }

  async componentDidMount() {
    const response = await this.props.auth0.getIdTokenClaims();
    const token = response.__raw;
    // this.toggleLoading();
    this.setState({ token }, () => {
      this.getJobs();
      // this.toggleLoading();
    });
  }

  toggleModal = () => {
    this.setState({ modalPreview: !this.state.modalPreview });
  };

  // READ
  handleGetJobs = async () => {
    const response = this.sendRequest('GET', this.state.token);
    this.setState({
      jobs: response.data
    })
  };

  // CREATE
  handleCreateJobs = async (job) => {
    const jobObject = { newJob: job }
    const response = this.sendRequest('POST', this.state.token, null, jobObject);
    this.setState({
      jobs: [...this.state.jobs, response.data]
    });
  }

  // UPDATE
  handleUpdateJobs = async (id, updatedJob) => {
    const response = this.sendRequest('PUT', this.state.token, id, updatedJob);
    const updatedJobs = this.state.jobs.map((job) => {
      if (job.id === id) {
        return response.data;
      }
      return job;
    })
    this.setState({
      jobs: updatedJobs,
    });
    this.handleGetJobs();
  }

  // DELETE
  handleDeleteJobs = async (id) => {
    const response = this.sendRequest('DELETE', this.state.token, id);
    const updatedJobs = this.state.jobs.filter((job) => {
      recipe._id !== id
    });
    this.setState({
      jobs: updatedJobs,
    });
    this.handleGetJobs();
  }

  render() {
    return (
      <>
        <Header toggleModal={this.toggleModal} />
        <Search />
        <Listings jobs={this.state.jobs} />
        <AddJobModal
          modalPreview={this.state.modalPreview}
          toggleModal={this.toggleModal}
          handleCreateJobs={this.handleCreateJobs}
        />
      </>
    );
  }
}

export default withAuth0(App);
