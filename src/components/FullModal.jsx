import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-bootstrap-icons';
import Form from 'react-bootstrap/Form';
import '../styles/FullModal.css';

class FullModal extends React.Component {
  constructor() {
    super();
    this.state = {
      notes: '',
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.jobs && prevProps.jobs !== this.props.jobs) {
      const { company, location, title, addedDate, link, status, notes } =
        this.props.jobs;
      this.setState({
        company,
        location,
        title,
        addedDate,
        link,
        status,
        notes,
        isSaved: false,
      });
    }
  }

  handleNotes = () => {
    this.setState({
      isSaved: !this.state.isSaved,
    });
    setTimeout(() => {
      this.setState({
        isSaved: !this.state.isSaved,
      });
    }, 1000);
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { company, location, title, addedDate, link, status, notes } =
      this.state;
    this.props.handleUpdateJobs(this.props.jobs._id, {
      company,
      location,
      title,
      addedDate,
      link,
      status,
      notes,
    });
    this.handleNotes();
  };

  // handleBackgroundColor = () => {
  //   return this.props.backgroundColor[this.state.status]
  // }

  render() {
    return (
      <>
        {this.props.jobs ? (
          <Modal
            show={this.props.fullModalPreview}
            onHide={this.props.toggleFullModal}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                {this.props.jobs.title}
                <p style={{ fontSize: '60%', marginBottom: '0' }}>
                  Added on {this.props.jobs.addedDate}
                </p>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="full-modal-body">
                <div>
                  <h4>{this.props.jobs.company}</h4>
                  <p>{this.props.jobs.location}</p>
                </div>
                <div>
                  <Button
                    className="card-button"
                    variant="link"
                    href={this.props.jobs.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Link size={30} />
                  </Button>
                </div>
              </div>
            </Modal.Body>
            <Modal.Body>
              <Form onSubmit={this.handleSubmit}>
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
                <div className="notes-submit">
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                  <div
                    className={`notes-saved ${
                      this.state.isSaved ? 'notes-saved-visible' : ''
                    } `}
                  >
                    Changes saved!
                  </div>
                </div>
              </Form>
            </Modal.Body>
            <Modal.Footer className="footer">
              <p
                style={{
                  backgroundColor: this.props.jobs
                    ? this.props.backgroundColor[
                        this.props.jobs.status.toLowerCase()
                      ]
                    : '',
                }}
              >
                {this.props.jobs.status}
              </p>

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
