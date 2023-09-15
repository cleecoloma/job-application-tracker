import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import { withAuth0 } from '@auth0/auth0-react';
import '../styles/Contact.css';

class Contact extends React.Component {
  render() {
    const { isAuthenticated } = this.props.auth0;
    return (
      isAuthenticated && (
        <Container className="centered-container">
          <h2>Contact The Developer</h2>
          <Card id="contact-card">
            <Card.Img
              variant="top"
              src="https://avatars.githubusercontent.com/u/104961833?v=4"
            />
            <Card.Body>
              <Card.Title id='contact-card-title'>Chester Lee Coloma</Card.Title>
              <br />
              <Card.Text>• Software Developer && Mechanical Engineer</Card.Text>
              <br />
              <Card.Text>
                • Previous experience - planned and executed maintenance repairs
                of US Navy nuclear submarines
              </Card.Text>
              <br />
              <Card.Text>
                • Passion for front-end web development with a focus on responsive
                design and user interface (UI) development
              </Card.Text>
              <br />
              <div
                id="contact-buttons"
              >
                <Button variant="dark" className="github-button">
                  <a
                    href="https://github.com/cleecoloma"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github"></i> GitHub
                  </a>
                </Button>
                <Button variant="light" className="linkedin-button">
                  <a
                    href="https://www.linkedin.com/in/chesterleecoloma/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-linkedin"></i> LinkedIn
                  </a>
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Container>
      )
    );
  }
}

export default withAuth0(Contact);
