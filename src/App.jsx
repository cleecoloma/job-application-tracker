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
  }

  render() {
    const { isAuthenticated } = this.props.auth0;
    return (
      <>
        <Router>
          <Header />
          <Routes>
            <Route
              exact
              path="/"
              element={
                isAuthenticated ? (
                  <Listings
                    toggleModal={this.toggleModal}
                    toggleJobs={this.toggleJobs}
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
          <Search />
        </Router>
      </>
    );
  }
}

export default withAuth0(App);
