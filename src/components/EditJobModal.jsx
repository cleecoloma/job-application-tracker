import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

class EditJobModal extends React.Component {
  constructor() {
    super();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let { company, location, title } = e.target;
    if (company && location && title) {
      this.props.handleUpdateJobs(this.props.jobs._id, {
        company: company.value,
        location: location.value,
        title: title.value,
      });
      this.props.toggleEditModal();
    }
  };

  render() {
    return (
      <>
        {this.props.jobs ? (
          <Modal
            show={this.props.editModalPreview}
            onHide={this.props.toggleEditModal}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title>Edit Job</Modal.Title>
            </Modal.Header>

            <Form className="m-3" onSubmit={this.handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Company</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={this.props.jobs.company}
                  name="company"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Location</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={this.props.jobs.location}
                  name="location"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={this.props.jobs.title}
                  name="title"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Posting Link</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Posting Link"
                  name="postingLink"
                />
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
          </Modal>
        ) : null}
      </>
    );
  }
}

export default EditJobModal;
