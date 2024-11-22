import React from 'react';
import { mock } from './data';

// LOOPING
const MockAssessments = () => {
    return (
        <main>
            <br/><br/><br/>
            <h1 className='head'>Mock Assessments</h1><br/>
            <div className="mock-assessments-container">
                {mock.map((assessment, index) => (
                    <div key={index} className="mock-assessment-item">
                        <div className="mock-assessment-details">
                            <img className={assessment.logoClass} src={assessment.logo} alt={assessment.heading} />
                            <h2 className="mock-assessment-heading"><b>{assessment.heading}</b></h2>
                        </div>
                        <div className="mock-assessment-details mock-section">
                            <p className="mock-assessment-problems">Number of Problems: <b>{assessment.prob}</b></p>
                            <p className="mock-assessment-duration">Duration: <b>{assessment.duration}</b></p>
                            <p className="mock-assessment-level">Level: <b>{assessment.level}</b></p>
                        </div>
                        <div className="mock-assessment-details " >
                            <br/>
                            <a href={assessment.link} className='mock-assessment-button'>Start Test
                            </a>
                            {/* <button className="mock-assessment-button"></button> */}
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
};

export default MockAssessments;