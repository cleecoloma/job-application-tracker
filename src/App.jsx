import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import React from 'react';
import Hero from './components/Hero';
import Search from './components/Search';
import Listings from './components/Listings';
import Profile from './components/Profile';
import DemoAccount from './components/DemoAccount';
import Contact from './components/Contact';
import { withAuth0 } from '@auth0/auth0-react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginModal from './components/LoginModal';
import './styles/App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: null,
      jobs: [],
      filteredJobs: null,
      searchTerm: '',
      loginModalPreview: false,
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
  };

  handleJobs = (input) => {
    this.setState({
      jobs: input,
    });
  };

  toggleLoginModal = () => {
    this.setState({
      loginModalPreview: !this.state.loginModalPreview,
    });
  };

  handleDemoAccount = () => {
    this.setState({
      isDemoAccount: !this.state.isDemoAccount,
      user: this.state.demoUser,
    });
  };

  handleDemoLogout = () => {
    this.setState({
      isDemoAccount: !this.state.isDemoAccount,
      user: '',
    });
  };

  render() {
    const { isAuthenticated } = this.props.auth0;
    return (
      <>
        <Router>
          <Header
            user={this.state.user}
            isDemoAccount={this.state.isDemoAccount}
            handleDemoAccount={this.handleDemoAccount}
            handleDemoLogout={this.handleDemoLogout}
            toggleLoginModal={this.toggleLoginModal}
          />
          <LoginModal
            handleDemoAccount={this.handleDemoAccount}
            loginModalPreview={this.state.loginModalPreview}
            toggleLoginModal={this.toggleLoginModal}
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
                        demoUser={this.state.demoUser}
                        isDemoAccount={this.state.isDemoAccount}
                      />
                    ) : (
                      <Listings
                        handleProfilePage={this.handleProfilePage}
                        jobs={this.state.jobs}
                        handleJobs={this.handleJobs}
                        demoUser={this.state.demoUser}
                        isDemoAccount={this.state.isDemoAccount}
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
                    <Hero />
                  )
                }
              ></Route>
            )}
            <Route exact path="/Profile" element={<Profile />}></Route>
            <Route
              exact
              path="/DemoAccount"
              element={<DemoAccount user={this.state.user} />}
            ></Route>
            <Route exact path="/Contact" element={<Contact />}></Route>
          </Routes>
        </Router>
      </>
    );
  }
}

export default withAuth0(App);
