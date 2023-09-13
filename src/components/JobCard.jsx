import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import '../styles/JobCard.css';

class JobCard extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <Card className="card" style={{ width: '20rem' }}>
          <Card.Body>
            <Card.Img
              // variant="top"
              className="card-img"
              src="https://placehold.co/10x10"
            />
            <div className="card-text">
              <div className="card-title">
                <Card.Text>
                  <strong>{this.props.jobs.company}</strong>
                </Card.Text>
                <Card.Text>{this.props.jobs.location}</Card.Text>
              </div>
              <hr />
              <Card.Text>{this.props.jobs.title}</Card.Text>
              <Card.Text>Added on MM/DD/YYYY</Card.Text>
              {/* <Accordion className="accordion">
                <Accordion.Item className="accordion" eventKey="1">
                  <Accordion.Header>Notes</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion> */}
            </div>
            <Button 
              className="card-button" 
              variant="primary"
              onClick={() => this.props.toggleFullModal()}
            >
              See More!
            </Button>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default JobCard;
