import React from 'react';
import JobCard from './JobCard';
import '../styles/Listings.css'

class Listings extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <div className="listings">
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
        </div>
      </>
    );
  }
}

export default Listings;
