import React from "react";
import { Link } from "react-router-dom";
import './home.css';
import LogoSlider from "../../components/carousel/LogoSlider";
import Footer from "../../components/footer/Footer";
import 'swiper/swiper-bundle.css';
import sisLogo from "../../assets/logo/sisLogo.png";
import { MdOutlineWeb } from "react-icons/md";
import { VscDebugConsole } from "react-icons/vsc";
import { FaCoins, FaRegEye, FaCalendarCheck, FaBoxOpen } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { IoShieldCheckmark } from "react-icons/io5";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { GoArrowRight } from "react-icons/go";

const ensures = [
    {
        id: 1,
        symbol: <IoShieldCheckmark />,
        title: "Quality",
        context: "Top-notch standards for your satisfaction.",
    },
    {
        id: 2,
        symbol: <BsFillLightningChargeFill />,
        title: "Fast Respond",
        context: "Swift and efficient support, always.",
    }
]

const services = [
    {
        id: 1,
        symbol: <MdOutlineWeb />,
        title: "IT Consulting",
        context: "Web development, e Business card, web hosting for enterprise or personal use",
        url: <Link to="/digitalcard" className="learnMore">Learn more <span className="navArrow"><GoArrowRight/></span></Link>,
    },
    {
        id: 2,
        symbol: <VscDebugConsole />,
        title: "Assignment Aid",
        context: "Solving on complex assignment for CS/IT student with guidance",
        url: <Link to="/CSAid" className="learnMore">Learn more <span className="navArrow"><GoArrowRight/></span></Link>,
    },
    {
        id: 3,
        symbol: <FaCoins />,
        title: "Unit Trust Consultancy",
        context: "Unlock the potential of your savings by discover unit trusts offer to investors!",
        url: <Link to="/UTConsult" className="learnMore">Learn more <span className="navArrow"><GoArrowRight/></span></Link>,
    }
]

const process = [
    {
        id: 1,
        symbol: <FaRegEye />,
        step: "1",
        title: "Discovery",
        context: "Conduct thorough research to understand client requirements and project goals.",
    },
    {
        id: 2,
        symbol: <FaCalendarCheck />,
        step: "2",
        title: "Planning",
        context: "Develop a comprehensive plan outlining the project scope, timeline, and resources needed.",
    },
    {
        id: 3,
        symbol: <FaGear />,
        step: "3",
        title: "Execute",
        context: "Implement the project plan, ensuring all tasks are completed on time and within budget.",
    },
    {
        id: 4,
        symbol: <FaBoxOpen />,
        step: "4",
        title: "Deliver",
        context: "Finalize the project and deliver the completed product to the client, ensuring all expectations are met.",
    }
]

export default function Home() {

    function scrollToServices(){
        const servicesAll = document.getElementById('servicesShorts');
        servicesAll.scrollIntoView({ behavior: 'smooth', block: 'start'});
    }    

    return(
        <>
            <div className="container-home">
                <h1><img src={sisLogo} alt="SIS Logo" className="sis-logo" /></h1>
                <h1>My Services</h1>
                <p>I provide few services over here that you might be <span style={{fontWeight:'bold'}}>interested</span>!</p>
                <button className="servicesButton" onClick={() => scrollToServices()}>Get started</button>
            </div>
            <div id="servicesShorts" className="quick-arrangement">
                <div className="quick-intro">
                    <h2>Best solutions you can find here</h2>
                    <p>We deliver top-notch solutions tailored to your needs, including <span>professional websites</span>,  
                    <span> expert unit trust advice</span>, <span>computer science assignment help</span>, <span>reliable website hosting</span>, 
                    and <span>innovative e-digital business cards</span>. Our expert team ensures you receive the highest quality service every time.</p>
                    <div className="quick-guarantee-arrangement">
                        {
                            ensures.map(data => (
                                <div className="quick-guarantee" key={data.id}>
                                    <h1>{data.symbol}</h1>
                                    <h2>{data.title}</h2>
                                    <p>{data.context}</p>
                                </div>
                            ))
                        }
                    </div>  
                </div>
                <div className="quick-sp">
                </div>
            </div>
            <div className="service-intro">
                <h1>Our Services</h1>
                <h2>We Provide a Wide Variety of Services</h2>
                <div className="service-arrangement">
                    {
                    services.map(data => (
                        <div className="service-context" key={data.id}>
                            <h1>{data.symbol}</h1>
                            <h2>{data.title}</h2>
                            <p>{data.context}</p>
                            <p>{data.url}</p>
                        </div>
                    ))
                }
                </div>
            </div>
            <div className="service-process">
                <h1>Our Working Process</h1>
                <h2>How we handle Our Projects</h2>
                <div className="process-arrangement">
                    {
                        process.map(data => (
                            <div className = "process-context" key={data.id}>
                                <div className="pcontext-arr">
                                    <h1>{data.symbol}</h1>
                                    <h3>{data.step}</h3>
                                </div>
                                <h2>{data.title}</h2>
                                <p>{data.context}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="home-logo-slider">
                <h1>Tech used</h1>
                <LogoSlider />
            </div>
            <div className="Contact-UT">
                <h1>Feel free to reach me out for free consultation!</h1>
                    <Link to="/contact" className="contact-button">
                        Contact Me!
                    </Link>
            </div>
            <Footer />
        </>
    )
}