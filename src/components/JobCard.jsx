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
        <Card className="card">
          <Card.Body className="card-container">
            {/* <Card.Img
              className="card-img"
              src="https://placehold.co/10x10"
            /> */}
            <div className="card-text">
              <div className="card-title">
                <Card.Text className="text">
                  <strong>{this.props.jobs.company}</strong>
                </Card.Text>
                <Card.Text className="text">
                  {this.props.jobs.location}
                </Card.Text>
              </div>
              <hr />
              <Card.Text className="text">{this.props.jobs.title}</Card.Text>
            </div>
            <Button
              className="card-button"
              variant="primary"
              onClick={() => this.props.toggleFullModal(this.props.jobs)}
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
