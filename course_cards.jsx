import React from 'react';
import { CourseCardDetails } from './data';

// CourseCards Component
const CourseCards = () => {
    return (
        <div className='Course_Cards_Container'>
            <h1 className="courses-heading">Explore Other Courses</h1>
            <div className="courses-grid">
                {CourseCardDetails.map(course => (
                    <div key={course.id} className="course-item">
                        <div className="course-image-wrapper">
                            <img src={course.image} alt={course.alt} className="course-image" />
                            <div className="course-text-overlay">
                                <p className="course-description">{course.description}</p>
                                <br />
                                <div className='know-btn-div'>
                                    <a href={course.link} className="course-know-more btn btn-container">
                                        Know More
                                    </a>
                                </div>
                                <br />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CourseCards;