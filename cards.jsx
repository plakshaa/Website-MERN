import img1 from './images/Backtracking.png';
// Card component definition
const Card = ({ image, projects, duration, difficulty }) => {
    return (
        <div className='card'>
            <img src={image} className="cardimg" alt="Course" />
            <p>Number of Problems: <span><b>{projects}</b></span></p>
            <p>Duration: <span><b>{duration} Minutes</b></span></p>
            <p>Difficulty Level: <span><b>{difficulty}</b></span></p>
            <a href="link-here" className="button-link">
            <button className='start-test'>Start Test</button>
            </a>
        </div>
    );
};

// PropTypes for validation
// Card.propTypes = {
    // image: PropTypes.string.isRequired,
    // projects: PropTypes.number.isRequired,
    // duration: PropTypes.number.isRequired,
    // difficulty: PropTypes.string.isRequired,
// };

// Cards component definition
const Cards = () => {
    const datastore = [
        { image: img1, projects: 12, duration: 120, difficulty: "Easy" },
        { image: img1, projects: 12, duration: 120, difficulty: "Easy" },
        { image: img1, projects: 12, duration: 120, difficulty: "Easy" },
        { image: img1, projects: 12, duration: 120, difficulty: "Easy" },
        { image: img1, projects: 12, duration: 120, difficulty: "Easy" },
        { image: img1, projects: 12, duration: 120, difficulty: "Easy" },
        { image: img1, projects: 12, duration: 120, difficulty: "Easy" },
        { image: img1, projects: 12, duration: 120, difficulty: "Easy" }
    ];

    return (
        <>
            <h1 className='heading-main'>Topic Based Assessments</h1>
            <div className='cards-container'>
                {datastore.map((data, index) => (
                    <Card
                        key={index}
                        {...data}



                    />
                ))}
            </div>
        </>
    );
};

export default Cards