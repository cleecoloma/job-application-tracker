import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
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

            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Label>Applied?</Form.Label>
                <Form.Select>
                  <option>No</option>
                  <option>Yes</option>
                </Form.Select>
              </Form.Group>
              <Form.Group as={Col} controlId="datePicker">
                <Form.Label>If applied, when?</Form.Label>
                <Form.Control type="text" placeholder="MM/DD/YYYY" />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Notes</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>

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
