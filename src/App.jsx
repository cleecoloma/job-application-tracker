import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import React from 'react';
import AddJobModal from './components/AddJobModal';
import Search from './components/Search';
import Listings from './components/Listings';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      token: null,
      modalPreview: false,
      jobs: [],
      // job: {
      //   company: null,
      //   location: null,
      //   title: null,
      //   postingLink: null,
      //   appliedStatus: false,
      //   appliedDate: null,
      //   notes: null,
      // },
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
  handlePostJobs = async (job) => {
    const jobObject = { newJob: job }
    const response = this.sendRequest('POST', this.state.token, null, jobObject);
    this.setState({
      jobs: [...this.state.jobs, response.data]
    });
  }

  render() {
    return (
      <>
        <Header toggleModal={this.toggleModal} />
        <Search />
        <Listings />
        <AddJobModal
          modalPreview={this.state.modalPreview}
          toggleModal={this.toggleModal}
        />
      </>
    );
  }
}

export default App;
