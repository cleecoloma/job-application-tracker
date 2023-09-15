import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import React from 'react';
import Search from './components/Search';
import Listings from './components/Listings';
import Profile from './components/Profile';
import { withAuth0 } from '@auth0/auth0-react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: null,
      jobs: [],
      filteredJobs: null,
      searchTerm: '',
    };
  }

  handleProfilePage = (person) => {
    this.setState({
      user: person,
    });
  };

  filterData = (searchTerm) => {
    const filteredJobs = this.state.jobs.filter((job) => {
      const searchableValues = Object.values(job).join(' ').toLowerCase();
      return searchableValues.includes(searchTerm.toLowerCase());
    });
    this.setState({
      filteredJobs,
      searchTerm,
    });
    console.log('filteredJobs', this.state.filteredJobs);
    console.log('jobs', this.state.jobs);
  };

  handleJobs = (input) => {
    this.setState({
      jobs: input,
    });
  };

  render() {
    const { isAuthenticated } = this.props.auth0;
    return (
      <>
        <Router>
          <Header />
          {isAuthenticated ? <Search filterData={this.filterData} /> : null}
          <Routes>
            <Route
              exact
              path="/"
              element={
                isAuthenticated ? (
                  this.state.filteredJobs ? (
                    <Listings
                      handleProfilePage={this.handleProfilePage}
                      jobs={this.state.filteredJobs}
                      handleJobs={this.handleJobs}
                    />
                  ) : (
                    <Listings
                      handleProfilePage={this.handleProfilePage}
                      jobs={this.state.jobs}
                      handleJobs={this.handleJobs}
                    />
                  )
                ) : (
                  <h2 style={{ display: 'flex', justifyContent: 'center' }}>
                    Please log in to view job listings!
                  </h2>
                )
              }
            ></Route>
            <Route
              exact
              path="/Profile"
              element={<Profile />
              }
            ></Route>
          </Routes>
        </Router>
      </>
    );
  }
}

export default withAuth0(App);
