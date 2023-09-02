import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

class AddJobModal extends React.Component {
  constructor() {
    super();
  }
  
  render() {
    return (
      <>
        <Modal
          show={this.props.modalPreview}
          onHide={this.props.toggleModal}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>Add New Job</Modal.Title>
          </Modal.Header>

          <Form className="m-3">
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Company</Form.Label>
              <Form.Control type="text" placeholder="Enter Company Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Location</Form.Label>
              <Form.Control type="text" placeholder="Enter Location" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" placeholder="Enter Title" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Posting Link</Form.Label>
              <Form.Control type="text" placeholder="Enter Posting Link" />
            </Form.Group>
            {/* 
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group> */}

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          {/* <Modal.Footer>
            <Button onClick={() => this.props.toggleModal()}>Close</Button>
          </Modal.Footer> */}
        </Modal>
      </>
    );
  }
}

export default AddJobModal;
