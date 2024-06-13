import React from "react";
import { Link } from "react-router-dom";
import './home.css';
import LogoSlider from "../../components/carousel/LogoSlider";
import UTC from "../../components/card/services/UTC";
import AssignmentHelper from "../../components/card/services/AssignHelper";
import ComingSoon from "../../components/card/services/ComingSoon";
import Footer from "../../components/footer/Footer";
import 'swiper/swiper-bundle.css';
import sisLogo from "../../assets/logo/sisLogo.png";
import { MdOutlineWeb } from "react-icons/md";
import { VscDebugConsole } from "react-icons/vsc";
import { FaCoins } from "react-icons/fa";


const services = [
    {
        id: 1,
        symbol: <MdOutlineWeb />,
        title: "IT Consulting",
        context: "Web development, e Business card, web hosting for enterprise or personal use",
        url: <Link to="/digitalcard">Learn more</Link>,
    },
    {
        id: 2,
        symbol: <VscDebugConsole />,
        title: "Assignment Aid",
        context: "Solving on complex assignment for CS/IT student with guidance",
        url: <Link to="/CSAid">Learn more</Link>,
    },
    {
        id: 3,
        symbol: <FaCoins />,
        title: "Unit Trust Consultancy",
        context: "Unlock the potential of your savings by discover unit trusts offer to investors!",
        url: <Link to="/UTConsult">Learn more</Link>,
    }
]

export default function Home() {

    function scrollToServices(){
        const servicesAll = document.getElementById('servicesAll');
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
            <div className="home-logo-slider">
                <LogoSlider />
            </div>
            <div id="servicesAll" className="servicesAll">
                <UTC />
                <AssignmentHelper />
                <ComingSoon />
            </div>
            <div className="service-intro">
                <h1>Our Services</h1>
                <h2>We Provide a Wide Variety of Services</h2>
                <p>We deliver top-notch solutions tailored to your needs, including professional websites, 
                    expert unit trust advice, computer science assignment help, reliable website hosting, 
                    and innovative e-digital business cards. Our expert team ensures you receive the highest quality service every time.</p>
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