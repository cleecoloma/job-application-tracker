import React from 'react';
import JobCard from './JobCard';

class Listings extends React.Component {
  constructor() {
    super();
  }

  render() {
    const listingsStyle = {
      position: 'fixed',
      top: '10rem',
      left: '50%', // To horizontally center the search bar
      transform: 'translateX(-50%)', // To center it horizontally
    };
    return (
      <>
        <div style={listingsStyle}>
          <JobCard />
        </div>
      </>
    );
  }
}

export default Listings;
