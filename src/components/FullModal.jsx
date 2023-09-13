import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

class FullModal extends React.Component {
  constructor() {
    super();
  }

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   let { company, location, title } = e.target;
  //   if (company && location && title) {
  //     this.props.handleCreateJobs({
  //       company: company.value,
  //       location: location.value,
  //       title: title.value,
  //     });
  //     this.props.toggleModal();
  //   }
  // };

  render() {
    return (
      <>
        <Modal
          show={this.props.fullModalPreview}
          onHide={this.props.toggleFullModal}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              {/* {this.props.jobs.title} */}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* <h4>{this.props.jobs.company}</h4>
            <p>{this.props.jobs.location}</p> */}
            {/* <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
              ac consectetur ac, vestibulum at eros.
            </p> */}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" type="submit">
              Edit
            </Button>
            <Button variant="danger" type="submit">
              Delete
            </Button>
            <Button onClick={this.props.toggleFullModal}>Close</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default FullModal;
