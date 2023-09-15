import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import React from 'react';
import Search from './components/Search';
import Listings from './components/Listings';
import { withAuth0 } from '@auth0/auth0-react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      jobs: [],
      filteredJobs: [],
    };
  }

  filterData = (searchTerm) => {
    const filteredJobs = this.state.jobs.filter((job) => {
      const searchableValues = Object.values(job).join(' ').toLowerCase();
      return searchableValues.includes(searchTerm.toLowerCase());
    });
    this.setState({
      filteredJobs,
    });
  };

  render() {
    const { isAuthenticated } = this.props.auth0;
    return (
      <>
        <Router>
          <Header />
          <Search filterData={this.filterData} />
          <Routes>
            <Route
              exact
              path="/"
              element={
                isAuthenticated ? (
                  <Listings
                    filteredJobs={this.state.filteredJobs}
                  />
                ) : (
                  <h2 style={{ display: 'flex', justifyContent: 'center' }}>
                    Please log in to view job listings!
                  </h2>
                )
              }
            ></Route>
            {/* <Route
            exact path='/'
            >
            </Route> */}
          </Routes>
        </Router>
      </>
    );
  }
}

export default withAuth0(App);
