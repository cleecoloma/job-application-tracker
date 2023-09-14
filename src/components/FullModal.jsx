import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import '../styles/FullModal.css';

class FullModal extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        {this.props.jobs ? (
          <Modal
            show={this.props.fullModalPreview}
            onHide={this.props.toggleFullModal}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                {this.props.jobs.title}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>{this.props.jobs.company}</h4>
              <p>{this.props.jobs.location}</p>
            </Modal.Body>
            <Modal.Footer className="footer">
              <p>{this.props.jobs.status}</p>
              <div>
                <Button
                  className="button"
                  variant="primary"
                  type="submit"
                  onClick={() => this.props.toggleEditModal(this.props.jobs)}
                >
                  Edit
                </Button>
                <Button
                  className="button"
                  variant="danger"
                  type="submit"
                  onClick={() =>
                    this.props.handleDeleteJobs(this.props.jobs._id)
                  }
                >
                  Delete
                </Button>
                <Button
                  variant="secondary"
                  className="button"
                  onClick={this.props.toggleFullModal}
                >
                  Close
                </Button>
              </div>
            </Modal.Footer>
          </Modal>
        ) : null}
      </>
    );
  }
}

export default FullModal;
