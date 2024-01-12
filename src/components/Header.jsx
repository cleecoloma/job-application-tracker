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
        expand='xl'
        className='bg-body-tertiary header'
      >
        <Container fluid>
          <Navbar.Brand as={Link} href='/' id='brand-name'>
            <img
              id='brand-logo'
              src='../images/job-application-logo.png'
              alt='logo'
            />
            Job Application Tracker
          </Navbar.Brand>
          <Nav
            className='me-auto my-2 my-lg-0'
            style={{ maxHeight: '100px' }}
            navbarScroll
            variant='underline'
          >
            <Nav.Link as={NavLink} to='/'>
              Home
            </Nav.Link>{' '}
            {this.props.isDemoAccount || isAuthenticated ? (
              <Nav.Link as={NavLink} to='/my-jobs'>
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
              <NavDropdown.Item className='header-button'>
                <Link className='nav-link custom-nav-link' to='/DemoAccount'>
                  Profile
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item className='header-button'>
                <Link className='nav-link custom-nav-link' to='/Contact'>
                  Contact
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <Link className='nav-link custom-nav-link' to='/'>
                <div id='logout-button'>
                  <Button
                    variant='danger'
                    onClick={() => this.props.handleDemoLogout()}
                  >
                    Logout
                  </Button>
                </div>
              </Link>
            </NavDropdown>
          )}
          {isAuthenticated && (
            <NavDropdown
              title={<PersonCircle size={30} />}
              id='basic-nav-dropdown'
              className='custom-dropdown'
              align='end'
            >
              <NavDropdown.Item className='header-button'>
                <Link className='nav-link custom-nav-link' to='/Profile'>
                  Profile
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item className='header-button'>
                <Link className='nav-link custom-nav-link' to='/Contact'>
                  Contact
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <Link className='nav-link custom-nav-link' to='/'>
                <div id='logout-button'>
                  <Logout />
                </div>
              </Link>
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
        </Container>
      </Navbar>
    );
  }
}

export default withAuth0(Header);
