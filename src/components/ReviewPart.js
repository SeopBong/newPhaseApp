import React from 'react';
import '../components/ReviewPart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';

const ReviewPart = (props) => {
    
    return (
        <div className='review-container'>
            <FontAwesomeIcon icon={faCommentDots} size={"x4"} />
            </div>
        
    );
};
export default ReviewPart;