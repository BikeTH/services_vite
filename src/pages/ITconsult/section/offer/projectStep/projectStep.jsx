import React, { useState } from "react";
import './projectStep.css';
import { FaRegLightbulb, FaPencilAlt, FaCode, FaBug, FaRocket } from "react-icons/fa";
import { FaDigitalOcean } from "react-icons/fa6";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import { IoLogoFigma, IoLogoReact, IoLogoNodejs, IoLogoCss3, IoLogoJavascript, IoLocationOutline } from "react-icons/io5";
import { SiMysql, SiPostgresql, SiExpo, SiZoom, SiGooglemeet } from "react-icons/si";

const steps = [
    {
        id: 1,
        title: "Step 1: Planning",
        content: "We start by planning the project, gathering requirements, and setting up timelines.",
        icon: <FaRegLightbulb />,
        details: (
            <div>
                <p>Our dicussion can done through <SiZoom/> <SiGooglemeet /> Online or <IoLocationOutline /> Onsite</p>
            </div>
        )
    },
    {
        id: 2,
        title: "Step 2: Design",
        content: "Our design team creates wireframes and mockups to visualize the project.",
        icon: <FaPencilAlt />,
        details: (
            <>
                <div>
                    <p>We will be using <IoLogoFigma/> Figma in designing and mockup pages for you to review.</p>
                </div>
            </>
        )
    },
    {
        id: 3,
        title: "Step 3: Development",
        content: "We bring the design to life through coding and development.",
        icon: <FaCode />,
        details: (
            <>
                <p style={{textAlign:"center"}}>Tech stack will use</p>
                <div className="development-arrangement">
                    <div className="development-content-arrangement">
                        <h1>Website</h1>
                        <h3 style={{textAlign:"center"}}><IoLogoReact/><IoLogoNodejs/><IoLogoCss3/><IoLogoJavascript/><SiMysql/><SiPostgresql/></h3>
                    </div>
                    <div className="development-content-arrangement">
                        <h1>Mobile App</h1>
                        <h3 style={{textAlign:"center"}}><SiExpo/></h3>
                    </div>
                </div>
            </>
        )
    },
    {
        id: 4,
        title: "Step 4: Testing",
        content: "We rigorously test the project to ensure everything works as expected.",
        icon: <FaBug />,
        details: (
            <>
                <div className="testing-arrangement">
                    <p>Functionality Testing</p>
                    <p>Usability Testing</p>
                    <p>Performance Testing</p>
                    <p>Security Testing</p>
                    <p>Compatibility Testing</p>
                    <p>Accessibility Testing</p>
                    <p>Integration Testing</p>
                    <p>Regression Testing</p>
                    <p>Load and Stress Testing</p>
                    <p>Data Testing</p>
                    <p>User Acceptance Testing (UAT)</p>
                    <p>Backup and Recovery Testing</p>
                </div>
            </>
        )
    },
    {
        id: 5,
        title: "Step 5: Deployment",
        content: "Finally, we deploy the project to the live environment.",
        icon: <FaRocket />,
        details: (
            <>
                <div>
                    <p>Deploying into <FaDigitalOcean/> Server and your Order will be successfully delivered, public will be able to access your web or app</p>
                </div>
            </>
        )
    }
];

export default function ProjectSteps() {
    const [currentStep, setCurrentStep] = useState(0);
    const [showDetails, setShowDetails] = useState(false);

    const toggleDetails = () => {
        setShowDetails(prev => !prev);
    };

    const handleStepClick = (index) => {
        setCurrentStep(index);
    };

    const handleNext = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);
        }
    };

    const handlePrev = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    return (
        <>
            <div className="project-navigation">
                <ul>
                    {steps.map((step, index) => (
                        <li 
                            key={step.id}
                            className={currentStep === index ? 'active' : ''}
                            onClick={() => handleStepClick(index)}
                        >
                            {step.icon}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="project-steps">
                <h2>{steps[currentStep].title}</h2>
                <p>{steps[currentStep].content}</p>
                <div className="show-details">
                    <button onClick={toggleDetails}>
                        {showDetails ? 'Show Less' : 'More Details'}
                    </button>
                </div>
                <div>
                {showDetails && (
                    <div className="details">
                        {steps[currentStep].details}
                    </div>
                )}
                </div>
                <div className="step-navigation">
                    {currentStep > 0 && (
                        <button onClick={handlePrev} className="step-nav-btnmsg prev-btn">
                            <MdArrowBackIos/>
                            <span className="step-nav-show-btmmsg">Prev</span>
                        </button>
                    )}
                    {currentStep < steps.length - 1 && (
                        <button onClick={handleNext}  className="step-nav-btnmsg next-btn">
                            <MdArrowForwardIos/>
                            <span className="step-nav-show-btmmsg">Next</span>
                        </button>
                    )}
                </div>
            </div>
        </>
    );
}
