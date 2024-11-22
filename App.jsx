import React from "react";
import ReactDOM from "react-dom/client";
import Cards from './cards';
import CourseCards from "./course_cards";
import MainComponent from "./homepage";
import MockAssessments from "./mock_assessments";
import "./styles.css";
import WhyChooseUs from './why_choose_us';
console.log("hey");
const App = () => {
    return (
    <>
        {/* <NavBar/> */}
        <MainComponent/>
        <WhyChooseUs/>
        <Cards/>
        <MockAssessments />
        <CourseCards />
    </>
    );
};

export default App;