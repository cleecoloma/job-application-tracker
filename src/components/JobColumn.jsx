import React from 'react';
import JobCard from './JobCard';
import Col from 'react-bootstrap/Col';

function JobColumn({
  jobs,
  status,
  toggleFullModal,
  fullModalPreview,
  backgroundColor,
}) {
  return (
    <Col>
      <div className="listings">
        <hr className="listing-hr" />
        {jobs.length > 0
          ? jobs
              .filter((job) => job.status === status)
              .map((job, idx) => (
                <JobCard
                  key={idx}
                  jobs={job}
                  toggleFullModal={toggleFullModal}
                  fullModalPreview={fullModalPreview}
                  backgroundColor={backgroundColor}
                />
              ))
          : null}
      </div>
    </Col>
  );
}

export default JobColumn;
