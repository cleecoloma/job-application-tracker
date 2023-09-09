import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/Header.css';

class Header extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <Navbar fixed="top" expand="lg" className="bg-body-tertiary px-5">
          <Container fluid>
            <Navbar.Brand href="#">Job Application Tracker</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
              </Nav>
              <div className="d-flex">
                <Button
                  className="button"
                  variant="primary"
                  onClick={() => this.props.toggleModal()}
                >
                  + Add Job
                </Button>
                <Nav.Link
                  id="profile-button"
                  href="#action1"
                >
                  Profile
                </Nav.Link>
                <Nav.Link
                  id="profile-button"
                  href="#action2"
                >
                  Contact
                </Nav.Link>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default Header;
