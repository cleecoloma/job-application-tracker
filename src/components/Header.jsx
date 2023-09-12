import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/Header.css';
import AuthButtons from '../../auth/AuthButton';

class Header extends React.Component {
  constructor() {
    super();
  }

  render() {
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
              <div className="d-flex">
                <Nav.Link id="profile-button" to="/Profile">
                  Profile
                </Nav.Link>
                <Nav.Link id="contact-button" to="/Contact">
                  Contact
                </Nav.Link>
                <AuthButtons />
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default Header;
