import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { ThreeDots, Link } from 'react-bootstrap-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/JobCard.css';

class JobCard extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { backgroundColor } = this.props;
    return (
      <>
        <Card className="card" style={{ backgroundColor }}>
          <Card.Body className="card-container">
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
            <div className="card-text-bottom">
              <Card.Text style={{ color: 'darkslategrey ' }} className='added-text'>
                  Added on:
                  <br />
                  {this.props.jobs.addedDate}
              </Card.Text>
              <div className="buttons">
                <Button
                  className="card-button"
                  variant="link"
                  href={this.props.jobs.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Link size={22} />
                </Button>
                <Button
                  className="card-button"
                  variant="link"
                  onClick={() => this.props.toggleFullModal(this.props.jobs)}
                >
                  <ThreeDots size={22} />
                </Button>
              </div>
            </div>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default JobCard;
