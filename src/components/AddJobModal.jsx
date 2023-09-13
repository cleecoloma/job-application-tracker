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

  handleSubmit = (e) => {
    e.preventDefault();
    let { company, location, title, link, status, notes } = e.target;
    if (company && location && title) {
      this.props.handleCreateJobs({
        company: company.value,
        location: location.value,
        title: title.value,
        link: link.value ? link.value : "",
        status: status.value,
        notes: notes.value ? notes.value : "",
      });
      this.props.toggleAddModal();
    }
  };

  render() {
    return (
      <>
        <Modal
          show={this.props.modalPreview}
          onHide={this.props.toggleAddModal}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>Add New Job</Modal.Title>
          </Modal.Header>

          <Form className="m-3" onSubmit={this.handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Company</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Company Name"
                name="company"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Location"
                name="location"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Title"
                name="title"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Posting Link</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Posting Link"
                name="link"
              />
            </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Label>Status</Form.Label>
                <Form.Select 
                defaultValue={"Interested"}
                name="status"
                >
                  <option>Interested</option>
                  <option>Applied</option>
                  <option>Interview</option>
                  <option>Rejected</option>
                </Form.Select>
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Notes</Form.Label>
              <Form.Control as="textarea" rows={3} name="notes" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal>
      </>
    );
  }
}

export default AddJobModal;
