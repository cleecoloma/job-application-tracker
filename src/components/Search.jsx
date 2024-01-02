import React from 'react';
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

  handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    const searchStyle = {
      position: 'absolute',
      top: '5rem',
      left: '50%',
      transform: 'translateX(-50%)',
    };

    return (
      <div style={searchStyle}>
        <Form className='d-flex mx-auto' onSubmit={this.handleSubmit}>
          <Form.Control
            type='search'
            placeholder='Search by company, title, or location.'
            className='search'
            aria-label='Search'
            value={this.state.searchTerm}
            onChange={this.handleChange}
          />
        </Form>
      </div>
    );
  }
}

export default Search;
