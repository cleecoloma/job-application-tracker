import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

class EditJobModal extends React.Component {
  constructor() {
    super();
    this.state = {
      company: '',
      location: '',
      title: '',
      link: '',
      status: 'Interested',
      notes: '',
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.jobs && prevProps.jobs !== this.props.jobs) {
      const { company, location, title, link, status, notes } = this.props.jobs;
      this.setState({ company, location, title, link, status, notes });
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { company, location, title, link, status, notes } = this.state;
    this.props.handleUpdateJobs(this.props.jobs._id, {
      company,
      location,
      title,
      link,
      status,
      notes,
    });
    this.props.toggleEditModal();
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
                  value={this.state.company}
                  onChange={this.handleChange}
                  name="company"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Location</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.location}
                  onChange={this.handleChange}
                  name="location"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.title}
                  onChange={this.handleChange}
                  name="title"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Posting Link</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.link}
                  onChange={this.handleChange}
                  name="link"
                />
              </Form.Group>

              <Row className="mb-3">
                <Form.Group as={Col}>
                  <Form.Label>Status</Form.Label>
                  <Form.Select
                    value={this.state.status}
                    onChange={this.handleChange}
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
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={this.state.notes}
                  onChange={this.handleChange}
                  name="notes"
                />
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
