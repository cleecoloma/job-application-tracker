import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { ZoomIn, Link } from 'react-bootstrap-icons';
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
            <div className="buttons">
              <Button
                className="card-button"
                variant="light"
                onClick={() => this.props.toggleFullModal(this.props.jobs)}
              >
                <a
                  href={this.props.jobs.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ZoomIn size={30} />
                </a>
              </Button>
              <Button className="card-button" variant="light">
                <a
                  href={this.props.jobs.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Link size={30} />
                </a>
              </Button>
            </div>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default JobCard;
