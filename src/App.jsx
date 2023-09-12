import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import React from 'react';
import AddJobModal from './components/AddJobModal';
import Search from './components/Search';
import Listings from './components/Listings';
import { withAuth0 } from '@auth0/auth0-react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      token: null,
      modalPreview: false,
      newJob: null,
      jobs: [],
    };
  }

  toggleModal = () => {
    this.setState({ modalPreview: !this.state.modalPreview });
  };

  // handleNewJob = (job) => {
  //   this.setState
  // }

  render() {
    return (
      <>
        <Header toggleModal={this.toggleModal} />
        <Search />
        <Listings
          jobs={this.state.jobs}
          modalPreview={this.state.modalPreview}
          toggleModal={this.toggleModal}
        />
        <AddJobModal handleNewJob={this.handleNewJob} />
      </>
    );
  }
}

export default withAuth0(App);
