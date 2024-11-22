
import highQualityContent from './images/highQualityContent.png';
import interviewReady from './images/interview.png';
import realWorldExperience from './images/realWorldExperience.png';

import amazon from './images/amazon.jpg';
import flipkart from './images/flipkart.jpg';
import google from './images/google.jpg';

import img1 from './images/Banner.jpg';
import img5 from './images/Frame 20933 (1).jpg';
import img6 from './images/Frame 20933 (2).jpg';
import img4 from './images/Frame 20933.jpg';
import img3 from './images/img3.jpg';
import img2 from './images/low_level_design.jpg';

// DATA
const whyChooseUsData = [
    {
        image: interviewReady,
        imageClass: 'interview-ready-image',
        title: "Get Interview Ready",
        description: "Sharpen your coding skills & conquer interview nerves. Practice real questions, get expert feedback, land your dream job."
    },
    {
        image: highQualityContent,
        imageClass: 'high-quality-content-image',
        title: "Access High Quality Content for Free",
        description: "Empower Your Learning Journey. Dive Deep into Free High-Quality Content."
    },
    {
        image: realWorldExperience,
        imageClass: 'real-world-experience-image',
        title: "Practice with Real-World Experience",
        description: "Level Up Your Skills. Tackle Real-World Challenges & Gain Practical Experience."
    }
];

// DATA
const mock = [
    {
        logo: flipkart,
        logoClass: 'flipkart-logo',  
        heading: "Intern Mock Assessment",
        prob: 12,
        duration: "120 Minutes",
        level: "Easy",
        link: '/link1'
    },
    {
        logo: amazon,
        logoClass: 'amazon-logo',
        heading: "SDE | Mock Assessment",
        prob: 12,
        duration: "120 Minutes",
        level: "Medium",
        link: '/link2'
    },
    {
        logo: google,
        logoClass: 'google-logo',
        heading: "L4 Mock Assessment",
        prob: 12,
        duration: "120 Minutes",
        level: "Hard",
        link: '/link3'
    },
    {
        logo: google,
        logoClass: 'google-logo',
        heading: "L4 Mock Assessment",
        prob: 12,
        duration: "120 Minutes",
        level: "All",
        link: '/link4'
    },
    {
        logo: flipkart,
        logoClass: 'flipkart-logo',  
        heading: "Intern Mock Assessment",
        prob: 12,
        duration: "120 Minutes",
        level: "Easy",
        link: '/link5'
    },
    {
        logo: amazon,
        logoClass: 'amazon-logo',
        heading: "SDE | Mock Assessment",
        prob: 12,
        duration: "120 Minutes",
        level: "Medium",
        link: '/link6'
    },
    {
        logo: google,
        logoClass: 'google-logo',
        heading: "L4 Mock Assessment",
        prob: 12,
        duration: "120 Minutes",
        level: "Hard",
        link: '/link7'
    },
    {
        logo: google,
        logoClass: 'google-logo',
        heading: "L4 Mock Assessment",
        prob: 12,
        duration: "120 Minutes",
        level: "All",
        link: '/link8'
    },
    {
        logo: flipkart,
        logoClass: 'flipkart-logo',  
        heading: "Intern Mock Assessment",
        prob: 12,
        duration: "120 Minutes",
        level: "Easy",
        link: '/link9'
    },
    {
        logo: amazon,
        logoClass: 'amazon-logo',
        heading: "SDE | Mock Assessment",
        prob: 12,
        duration: "120 Minutes",
        level: "Medium",
        link: '/link10'
    },
    {
        logo: google,
        logoClass: 'google-logo',
        heading: "L4 Mock Assessment",
        prob: 12,
        duration: "120 Minutes",
        level: "Hard",
        link: '/link11'
    },
    {
        logo: google,
        logoClass: 'google-logo',
        heading: "L4 Mock Assessment",
        prob: 12,
        duration: "120 Minutes",
        level: "All",
        link: '/link12'
    }
];

// CourseCardDetails array
const CourseCardDetails = [
    {
        id: 1,
        image: img1,
        alt: 'Crack Design and Machine Coding Rounds',
        description: 'Crack Design and Machine Coding Rounds for Senior Software Engineer Roles and crack your dream job.',
        link: '/design-machine-coding', // Add the link here
    },
    {
        id: 2,
        image: img2,
        alt: 'DSA Essentials',
        description: 'A very concise program handpicked concepts, for you to master DSA quickly and crack your dream job.',
        link: '/dsa-essentials', // Add the link here
    },
    {
        id: 3,
        image: img3,
        alt: 'Master Data Structures & Algorithms',
        description: 'Master Data Structures & Algorithms and System Design. Crack Top-notch Tech roles.',
        link: '/data-structures-algorithms', // Add the link here
    },
    {
        id: 4,
        image: img4,
        alt: 'Course 4',
        description: 'A very concise program with curated and handpicked concepts, for you to master DSA quickly and crack your dream job.',
        link: '/course-4', // Add the link here
    },
    {
        id: 5,
        image: img5,
        alt: 'Course 5',
        description: 'A very concise program with curated and handpicked concepts, for you to master DSA quickly and crack your dream job.',
        link: '/course-5', // Add the link here
    },
    {
        id: 6,
        image: img6,
        alt: 'Course 6',
        description: 'Become a Python pro and unlock the door to endless career opportunities in Data Science and Software Development.',
        link: '/course-6', // Add the link here
    },
];

export { CourseCardDetails, mock, whyChooseUsData };