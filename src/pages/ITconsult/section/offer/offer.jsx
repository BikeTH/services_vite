import React, { useState } from "react";
import './offer.css';
import { CgWebsite, CgSmartphone } from "react-icons/cg";
import { GoPackageDependents } from "react-icons/go";
import { LuPackageOpen } from "react-icons/lu";
import { MdClose } from "react-icons/md";
import ProjectSteps from "./projectStep/projectStep";
import ScrollToSection from "../../function/scrollToSection";

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

export default function Offer() {
    const [isPackage, setIsPackage] = useState(false);
    const [isHovering, setIsHovering] = useState(false);

    const handleClick = () => {
        handlePackageClick();
        ScrollToSection('offer');
    }

    const handlePackageClick = () => {
        setIsPackage(!isPackage);
        setIsHovering(false);
    };

    return (
        <div className={`ITconsult-offer ${isPackage ? 'shifted' : ''}`} id="offer">
            <div className="offers-arrangement">
                <h1>What we Offer</h1>
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
                    <h1>~ How we Delivered Project ~</h1>
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
                    onClick={handleClick}
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                >
                    {isPackage ? null : (
                    isHovering ? (
                        <LuPackageOpen size={44} />
                        ) : (
                        <div>
                            <GoPackageDependents size={44} />
                            <p className="click-me-text">Click me</p>
                        </div>
                        )
                    )}
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
