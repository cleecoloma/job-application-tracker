import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink } from 'react-router-dom';
import '../styles/Header.css';
import Logout from '../auth/Logout';
import { withAuth0 } from '@auth0/auth0-react';
import { PersonCircle } from 'react-bootstrap-icons';
import Button from 'react-bootstrap/Button';

class Header extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { isAuthenticated } = this.props.auth0;
    return (
      <Navbar
        id='header-navbar'
        fixed='top'
        expand='lg'
        className='justify-content-between'
      >
        <Container fluid>
          <Navbar.Brand as={Link} to='/' id='brand-name'>
            <img
              id='brand-logo'
              src='../images/job-application-logo.png'
              alt='logo'
            />
            Job Application Tracker
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav
              className='me-auto my-2 my-lg-0'
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link as={Link} to='/'>
                Home
              </Nav.Link>{' '}
              {this.props.isDemoAccount || isAuthenticated ? (
                <Nav.Link as={Link} to='/my-jobs'>
                  My Jobs
                </Nav.Link>
              ) : null}
            </Nav>
            {this.props.isDemoAccount && (
              <NavDropdown
                title={<PersonCircle size={30} />}
                id='basic-nav-dropdown'
                className='custom-dropdown'
                align='end'
              >
                <NavDropdown.Item
                  as={Link}
                  to='/DemoAccount'
                  className='nav-link custom-nav-link'
                >
                  Profile
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to='/Contact'
                  className='nav-link custom-nav-link'
                >
                  Contact
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  as={Link}
                  to='/'
                  className='nav-link custom-nav-link'
                >
                  <div id='logout-button'>
                    <Button
                      variant='danger'
                      onClick={() => this.props.handleDemoLogout()}
                    >
                      Logout
                    </Button>
                  </div>
                </NavDropdown.Item>
              </NavDropdown>
            )}
            {isAuthenticated && (
              <NavDropdown
                title={<PersonCircle size={30} />}
                id='basic-nav-dropdown'
                className='custom-dropdown'
                align='end'
              >
                <NavDropdown.Item
                  as={Link}
                  to='/Profile'
                  className='nav-link custom-nav-link'
                >
                  Profile
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to='/Contact'
                  className='nav-link custom-nav-link'
                >
                  Contact
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  as={Link}
                  to='/'
                  className='nav-link custom-nav-link'
                >
                  <div id='logout-button'>
                    <Logout />
                  </div>
                </NavDropdown.Item>
              </NavDropdown>
            )}
            {!isAuthenticated && !this.props.isDemoAccount ? (
              <>
                <Button
                  id='demo-button'
                  variant='primary'
                  onClick={() => this.props.toggleLoginModal()}
                >
                  Login
                </Button>
              </>
            ) : null}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default withAuth0(Header);
