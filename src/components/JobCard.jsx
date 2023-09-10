import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../styles/JobCard.css';

class JobCard extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <Card className='card' style={{ width: '25rem' }}>
          <Card.Body>
            <Card.Img
              // variant="top"
              className="card-img"
              src="https://placehold.co/10x10"
            />
            <div className="card-text">
              <div className='card-title'>
                <Card.Text>Google</Card.Text>
                <Card.Text>Seattle, WA</Card.Text>
              </div>
              <hr />
              <Card.Text>Software Engineer</Card.Text>
              <Card.Text>Applied on MM/DD/YYYY</Card.Text>
              <Card.Text>Notes</Card.Text>
            </div>
              <Button className='card-button' variant="primary">Posting Link</Button>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default JobCard;
