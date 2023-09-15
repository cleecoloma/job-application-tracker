import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import { withAuth0 } from '@auth0/auth0-react';

class Contact extends React.Component {
  render() {
    const { isAuthenticated } = this.props.auth0;
    return (
      isAuthenticated && (
        <Container className="d-flex justify-content-center align-items-center flex-wrap">
          <Card style={{ width: '18rem', margin: '2rem 2rem' }}>
            <Card.Img
              variant="top"
              src="https://avatars.githubusercontent.com/u/104961833?v=4"
            />
            <Card.Body>
              <Card.Title>Chester Lee Coloma</Card.Title>
              <Card.Text>
                <ul>
                  <li>Software Developer && Mechanical Engineer</li>
                  <li>
                    Previous experience - planned and executed maintenance
                    repairs of US Navy nuclear submarines
                  </li>
                  <li>
                    Passion for front-end web development with a focus on
                    responsive design and user interface (UI) development
                  </li>
                </ul>
              </Card.Text>
              <div className="d-flex justify-content-between">
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
