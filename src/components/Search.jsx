import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../styles/Search.css';

class Search extends React.Component {
  constructor() {
    super();
  }

  render() {
     const searchStyle = {
       position: 'fixed',
       top: '5rem',
       left: '50%', // To horizontally center the search bar
       transform: 'translateX(-50%)', // To center it horizontally
     };
    return (
      <>
        <div style={searchStyle}>
          <Form className="d-flex mx-auto">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 search"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </div>
      </>
    );
  }
}

export default Search;
