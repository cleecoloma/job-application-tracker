import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import React from 'react';
import Search from './components/Search';
import Listings from './components/Listings';
import { withAuth0 } from '@auth0/auth0-react';

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <Header />
        <Search />
        <Listings
          toggleModal={this.toggleModal}
          toggleJobs={this.toggleJobs}
        />
      </>
    );
  }
}

export default withAuth0(App);
