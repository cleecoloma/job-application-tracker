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
          {(this.props.jobs.length > 0) ? this.props.jobs.map(<JobCard jobs={this.props.jobs} />) : null}
        </div>
      </>
    );
  }
}

export default Listings;
