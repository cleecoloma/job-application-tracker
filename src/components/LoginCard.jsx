import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../styles/LoginCard.css';

class LoginCard extends React.Component {
  render() {
    return (
      <div className="centered-container">
        <Card id="login-card" style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title id="login-title">Select a login method</Card.Title>
            <div className="login-button">
              <Button
                variant="success"
                // onClick={() => this.props.handleDemoLogout()}
              >
                Demo
              </Button>
            </div>
            <div className="login-button">
              <Button
                variant="primary"
                // onClick={() => this.props.handleDemoLogout()}
              >
                Login
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default LoginCard;
