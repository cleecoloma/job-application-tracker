import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../styles/LoginModal.css';

class LoginModal extends React.Component {
  render() {
    return (
      <>
        <Modal
          show={this.props.loginModalPreview}
          onHide={this.props.toggleLoginModal}
          size="sm"
          // aria-labelledby="contained-modal-title-vcenter"
          // centered
        >
          <Modal.Header closeButton>
            <Modal.Title>Select a login method</Modal.Title>
          </Modal.Header>
          {/* <div className="centered-container">
            <Card id="login-card" style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title id="login-title">Select a login method</Card.Title> */}
          <div className="login-card">
            <div className="login-div">
              <Button
                className="login-button"
                variant="success"
                // onClick={() => this.props.handleDemoLogout()}
              >
                Demo
              </Button>
            </div>
            <div className="login-div">
              <Button
                className="login-button"
                variant="primary"
                // onClick={() => this.props.handleDemoLogout()}
              >
                Email (Auth0)
              </Button>
            </div>
          </div>
          {/* </Card.Body>
            </Card>
          </div> */}
        </Modal>
      </>
    );
  }
}

export default LoginModal;
