import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';

class Search extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <Navbar expand="lg" className="bg-body-tertiary mt-5" fixed="top">
          <Container fluid>
            <Form className="d-flex justify-content-center mx-auto">
              <Form.Control
                type="search"
                style={{ width:"20rem"}}
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default Search;
