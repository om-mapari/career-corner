import React from 'react';
import PropTypes from 'prop-types';

const CourseCard = ({ courseName, courseDetails, courseFees, imageUrl, isImageOnLeft }) => {
  const imageAlignment = isImageOnLeft ? "row-reverse" : "row";

  return (
    <div className="card mb-3 border-0">
      <div className={`row no-gutters flex-md-${imageAlignment} align-items-center`}>
        <div className="col-md-6">
          <img src={imageUrl} className="card-img shadow" alt={courseName} />
        </div>
        <div className="col-md-6">
          <div className="card-body">
            <h5 className="card-title">{courseName}</h5>
            <p className="card-text">{courseDetails}</p>
            <p className="card-text"><strong>Fees:</strong> ${courseFees}</p>
            <a style={{ fontWeight: 'bold', background: '#E67C1E' }} href="/" className="btn btn-primary">Register Now</a>
          </div>
        </div>
      </div>
    </div>
  );
};

CourseCard.propTypes = {
  courseName: PropTypes.string.isRequired,
  courseDetails: PropTypes.string.isRequired,
  courseFees: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
  isImageOnLeft: PropTypes.bool.isRequired
};

export default CourseCard;
