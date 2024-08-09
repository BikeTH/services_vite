import React from "react";
import './ITconsult.css';
import bannerImage from '../../assets/image/ITConsult/banner.jpeg';
import { VscVerified, VscHeart, VscGear, VscDashboard } from "react-icons/vsc";
import { CgWebsite, CgSmartphone } from "react-icons/cg";
import { FaFigma, FaReact, FaNode, FaHtml5, FaCss3Alt, FaJava, FaDigitalOcean, FaLinux, FaDocker } from "react-icons/fa";
import { SiExpo, SiMysql } from "react-icons/si";
import { FaCoins, FaBolt, FaPenNib, FaMapLocationDot, FaUsersGear, FaServer } from "react-icons/fa6";

const chooseUs = [
    {
        id: 1,
        icon: <FaCoins />,
        title: "Affordable packages",
        description: "Get top-notch development services at competitive prices. Our packages are designed to fit various budgets without compromising on quality.",
    },
    {
        id: 2,
        icon: <FaBolt />,
        title: "Efficient development process",
        description: "Experience a streamlined development process that saves you time and accelerates your project’s delivery. We ensure efficiency at every step.",
    },
    {
        id: 3,
        icon: <FaPenNib />,
        title: "Custom Design",
        description: "Receive a tailor-made design that reflects your brand’s unique identity. We create custom solutions that set you apart from the competition.",
    },
    {
        id: 4,
        icon: <FaMapLocationDot />,
        title: "SEO target specific geographic area",
        description: "Boost your online presence with SEO strategies that target your desired geographic area, driving more local traffic to your site.",
    },
    {
        id: 5,
        icon: <FaUsersGear />,
        title: "Troubleshooting Support Team",
        description: "Benefit from our dedicated support team, ready to resolve any issues promptly and keep your website or app running smoothly.",
    },
    {
        id: 6,
        icon: <FaServer />,
        title: "Own I.T Server",
        description: "Enjoy reliable performance with our own dedicated I.T. servers, ensuring your website and applications are always fast and secure.",
    },
]

const tech = [
    <FaFigma key="figma" />,
    <FaReact key="react" />,
    <FaNode key="node" />,
    <FaHtml5 key="html5" />,
    <FaCss3Alt key="css3" />,
    <FaJava key="java" />,
    <SiExpo key="expo" />,
    <SiMysql key="mysql" />,
    <FaDigitalOcean key="digitalocean" />,
    <FaLinux key="linux" />,
    <FaDocker key="docker" />,
  ];

const reasonSupport = [
    {
        id: 1,
        icon: <VscVerified />,
        title: "Enhanced Credibility & Trust",
        description: "A professional website creates a trustworthy image, making visitors more likely to view your business as reliable and credible.",
    },
    {
        id: 2,
        icon: <VscHeart />,
        title: "Improved User Experience",
        description: "Professional websites offer smooth navigation and fast loading, keeping visitors engaged and reducing the chance they’ll leave without taking action.",
    },
    {
        id: 3,
        icon: <VscGear />,
        title: "Effective Conversion Optimization",
        description: "Well-designed websites guide visitors toward making purchases with clear calls-to-action and easy checkout processes.",
    },
    {
        id: 4,
        icon: <VscDashboard />,
        title: "Enhanced Visibility & SEO",
        description: "A professionally built site improves your search engine ranking, attracting more visitors and boosting your chances of making sales.",
    },
]

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
]

export default function ITconsult(){
    function scrollToServices(){
        const servicesAll = document.getElementById('ITConsult');
        servicesAll.scrollIntoView({ behavior: 'smooth', block: 'start'});
    } 

    return(
        <>
        <div className="ITconsult-main">
            <div className="ITconsult-banner">
                <div className="ITconsult-intro-content">
                    <h1>Website/Application Development Malaysia</h1>
                    <h2>We Build Stunning, Efficient Websites & Apps that captivate users.</h2>
                    <p>A stunning looking website is the First Step</p>
                    <button className="buttonIT" onClick={() => scrollToServices()}>Get started</button>
                </div>
                <img style={{maxHeight:"540px", maxWidth:"540px"}} src={bannerImage} />
            </div>
            <div id="ITConsult" className="ITconsult-content">
                <div className="ITconsult-reason-content">
                    <div className="ITconsult-reason-header">
                        <h1>4 Main Reasons</h1>
                        <h2>Professional website Boost Sales</h2>
                    </div>
                    <div className="ITconsult-reason-support">
                        {
                            reasonSupport.map(data => (
                                <div className="ITconsult-reason-support-arrangement" key={data.id}>
                                    <h1>{data.icon}</h1>
                                    <h2>{data.title}</h2>
                                    <p>{data.description}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="ITconsult-offer">
                    {
                        offer.map(data => (
                            <div className="ITconsult-offer-arrangement" key={data.id}>
                                <h1>{data.icon}</h1>
                                <h2>{data.title}</h2>
                            </div>
                        ))
                    }
            </div>
            <div className="ITconsult-tech-slider">
                {tech.map((icon, index) => (
                    <div className="ITconsult-tech-item" style={{ animationDelay: `${-30 / tech.length * index}s` }} key={index}>
                        {icon}
                    </div>
                ))}
            </div>
            <div className="ITconsult-why-us">
                {
                    chooseUs.map(data => (
                        <div className="ITconsult-why-us-arrangement" key={data.id}>
                            <h1>{data.icon}</h1>
                            <h2>{data.title}</h2>
                            <p>{data.description}</p>
                        </div>
                    ))
                }
            </div>
            <div className="ITconsult-price-quotation">
                <h1>How Much to Build Website</h1>
                <h2>Calculate estimate cost by using below Form</h2>
                <p>Price may changed without noticed</p>
                <div className="ITconsult-price-quotation-form">

                </div>
            </div>
            <div className="ITconsult-faq">

            </div>
            <div className="ITconsult-teams">

            </div>
            <div className="ITconsult-contact">

            </div>
            <div className="ITconsult-footer">
                
            </div>
        </div>
        </>
    )
}
