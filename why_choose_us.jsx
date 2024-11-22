import { whyChooseUsData } from "./data";
// COMPONENT
const WhyChooseUs = () => {
    return (
        <main className='why-choose-us-main-content'>
            <h1 className="why-choose-us-centered-heading">Why Choose Us?</h1>
            <div className="why-choose-us-flex-container">
                {whyChooseUsData.map((item, index) => (
                    <div key={index} className="why-choose-us-card">
                        <img
                            src={item.image}
                            className={item.imageClass}
                            alt={item.title}
                        />
                        <h2 className="why-choose-us-card-title">{item.title}</h2>
                        <p className='why-choose-us-card-description'>{item.description}</p>
                    </div>
                ))}
            </div>
        </main>
    );
};

export default WhyChooseUs