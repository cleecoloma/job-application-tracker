import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import NavItem from 'react-bootstrap/NavItem';
// import NavLink from 'react-bootstrap/NavLink';
import '../styles/Header.css';
import Login from '../../auth/Login';
import Logout from '../../auth/Logout';
import { withAuth0 } from '@auth0/auth0-react';
import { Button } from 'react-bootstrap';
import { PersonCircle } from 'react-bootstrap-icons';

class Header extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { isAuthenticated } = this.props.auth0;
    return (
      <>
        <Navbar fixed="top" expand="lg" className="bg-body-tertiary px-5">
          <Container fluid>
            <Navbar.Brand href="#" id="brand-name">
              Job Application Tracker
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              ></Nav>
              {
                isAuthenticated ? <NavDropdown
                title={<PersonCircle size={30} />}
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item id="profile-button" href="/Profile">
                  Profile
                </NavDropdown.Item>
                <NavDropdown.Item id="contact-button" href="/Contact">
                  Contact
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/">
                  <Logout />
                </NavDropdown.Item>
              </NavDropdown> :
              <Login />
              }
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default withAuth0(Header);
