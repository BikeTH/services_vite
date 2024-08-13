import React, { useState } from "react";
import './offer.css';
import { CgWebsite, CgSmartphone } from "react-icons/cg";
import { GoPackageDependents, GoArrowRight, GoArrowLeft } from "react-icons/go";
import { LuPackageOpen } from "react-icons/lu";
import { MdClose, MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import { FaRegLightbulb, FaPencilAlt, FaCode, FaBug, FaRocket } from "react-icons/fa";

const offer = [
    {
        id: 1,
        icon: <CgSmartphone />,
        title: "Mobile Application",
    },
    {
        id: 2,
        icon: <CgWebsite />,
        title: "Website",
    }
];

const steps = [
    {
        id: 1,
        title: "Step 1: Planning",
        content: "We start by planning the project, gathering requirements, and setting up timelines.",
        icon: <FaRegLightbulb />
    },
    {
        id: 2,
        title: "Step 2: Design",
        content: "Our design team creates wireframes and mockups to visualize the project.",
        icon: <FaPencilAlt />
    },
    {
        id: 3,
        title: "Step 3: Development",
        content: "We bring the design to life through coding and development.",
        icon: <FaCode />
    },
    {
        id: 4,
        title: "Step 4: Testing",
        content: "We rigorously test the project to ensure everything works as expected.",
        icon: <FaBug />
    },
    {
        id: 5,
        title: "Step 5: Deployment",
        content: "Finally, we deploy the project to the live environment.",
        icon: <FaRocket />
    }
];


function ProjectSteps() {
    const [currentStep, setCurrentStep] = useState(0);

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
                <div className="step-navigation">
                    {currentStep > 0 && (
                        <button onClick={handlePrev}><MdArrowBackIos/></button>
                    )}
                    {currentStep < steps.length - 1 && (
                        <button onClick={handleNext}><MdArrowForwardIos/></button>
                    )}
                </div>
            </div>
        </>
    );
}

export default function Offer() {
    const [isPackage, setIsPackage] = useState(false);
    const [isHovering, setIsHovering] = useState(false);

    const handlePackageClick = () => {
        setIsPackage(!isPackage);
        setIsHovering(false);
    };

    return (
        <div className={`ITconsult-offer ${isPackage ? 'shifted' : ''}`} id="offer">
            <div className="offers-arrangement">
                <h1 style={{ fontSize: "24px" }}>What we Offer</h1>
                <div className="ITconsult-offers-arrangement">
                    {offer.map(data => (
                        <div className="ITconsult-offer-content" key={data.id}>
                            <h1 style={{ fontSize: "68px", fontWeight: "800" }}>{data.icon}</h1>
                            <h2 style={{ fontSize: "24px", fontWeight: "400", margin: "0", transform: "translateY(-48px)" }}>{data.title}</h2>
                        </div>
                    ))}
                </div>
            </div>
            <div className={`project-arrangement ${isPackage ? 'shifted-project' : ''}`}>
                <div className="project-header">
                    <h1 style={{ fontSize: "24px" }}>~ How we Delivered Project ~</h1>
                    {isPackage && (
                        <div
                            className="workflow-btn-cancel"
                            onClick={handlePackageClick}
                        >
                            <MdClose size={44} />
                        </div>
                    )}
                </div>
                <div
                    className="workflow-btn"
                    onClick={handlePackageClick}
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                >
                    {isPackage ? null : (isHovering ? <LuPackageOpen size={44} /> : <GoPackageDependents size={44} />)}
                </div>
                {isPackage && (
                    <div className="project-content">
                        <ProjectSteps />
                    </div>
                )}
            </div>
        </div>
    );
}
