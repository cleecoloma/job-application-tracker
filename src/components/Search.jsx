import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../styles/Search.css';

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      searchTerm: '',
    };
  }

  handleChange = (e) => {
    const newSearch = e.target.value;
    this.setState({ searchTerm: newSearch }, () => {
      this.props.filterData(this.state.searchTerm);
      console.log(this.state.searchTerm);
    });
  };

  render() {
    const searchStyle = {
      position: 'fixed',
      top: '5rem',
      left: '50%',
      transform: 'translateX(-50%)',
    };
    return (
      <>
        <div style={searchStyle}>
          <Form className="d-flex mx-auto">
            <Form.Control
              type="search"
              placeholder="Search for company, title, or location"
              className="search"
              aria-label="Search"
              value={this.state.searchValue}
              onChange={this.handleChange}
            />
          </Form>
        </div>
      </>
    );
  }
}

export default Search;
