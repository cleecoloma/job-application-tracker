import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../styles/LoginModal.css';
import Login from '../../auth/Login';
import { withAuth0 } from '@auth0/auth0-react';

class LoginModal extends React.Component {
  render() {
    return (
      <>
        <Modal
          show={this.props.loginModalPreview}
          onHide={this.props.toggleLoginModal}
          size="sm"
        >
          <Modal.Header closeButton>
            <Modal.Title>Select a login method</Modal.Title>
          </Modal.Header>
          <div className="login-card">
            <div className="login-div">
              <Button
                className="login-button"
                variant="success"
                onClick={() => {
                  this.props.handleDemoAccount();
                  this.props.toggleLoginModal();
                }}
              >
                Demo
              </Button>
            </div>
            <hr />
            {/* <div className="login-div"> */}
            <Login className="login-button" />
            <p>using Auth0</p>
            {/* <Button
                className="login-button"
                variant="primary"
                onClick={() => this.props.handleDemoLogout()}
              >
                Email (Auth0)
              </Button> */}
            {/* </div> */}
          </div>
        </Modal>
      </>
    );
  }
}

export default withAuth0(LoginModal);
