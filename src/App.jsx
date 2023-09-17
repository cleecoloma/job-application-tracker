import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import React from 'react';
import Search from './components/Search';
import Listings from './components/Listings';
import Profile from './components/Profile';
import DemoAccount from './components/DemoAccount';
import Contact from './components/Contact';
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
      isUserAccount: false,
      isDemoAccount: false,
      demoUser: {
        picture: 'https://place-hold.it/400x400&text=DEMO&bold&fontsize=20',
        nickname: 'Demo User',
        email: 'demo_user@email.com',
      },
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

  handleDemoAccount = () => {
    this.setState({
      isDemoAccount: !this.state.isDemoAccount,
      user: this.state.demoUser
    }, () => {console.log(this.state.user)})
  }

  render() {
    const { isAuthenticated } = this.props.auth0;
    return (
      <>
        <Router>
          <Header
            user={this.state.user}
            isDemoAccount={this.state.isDemoAccount}
            handleDemoAccount={this.handleDemoAccount}
          />
          <Routes>
            {this.state.isDemoAccount ? (
              <Route
                exact
                path="/"
                element={
                  <>
                    <Search filterData={this.filterData} />
                    {this.state.filteredJobs ? (
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
                    )}
                  </>
                }
              ></Route>
            ) : (
              <Route
                exact
                path="/"
                element={
                  isAuthenticated ? (
                    <>
                      <Search filterData={this.filterData} />
                      {this.state.filteredJobs ? (
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
                      )}
                    </>
                  ) : (
                    <h2
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginTop: '10rem',
                        flexWrap: 'wrap',
                        padding: '0 2rem,',
                        textAlign: 'center',
                      }}
                    >
                      Please log in to view job listings!
                    </h2>
                  )
                }
              ></Route>
            )}
            <Route exact path="/Profile" element={<Profile />}></Route>
            <Route exact path="/DemoAccount" element={<DemoAccount user={this.state.user} />}></Route>
            <Route exact path="/Contact" element={<Contact />}></Route>
          </Routes>
        </Router>
      </>
    );
  }
}

export default withAuth0(App);
