import React from 'react';
import JobCard from './JobCard';

class Listings extends React.Component {
  constructor() {
    super();
  }

  render() {
    const listingStyle = {
      position: 'fixed',
      top: '9rem',
      left: '50%', // To horizontally center the search bar
      transform: 'translateX(-50%)', // To center it horizontally
    };
    return (
      <>
        <div style={listingStyle}>
          <JobCard />
          <JobCard />
        </div>
      </>
    );
  }
}

export default Listings;
