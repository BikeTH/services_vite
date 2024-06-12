import React from "react";
import { Link } from "react-router-dom";
import './home.css';
import LogoSlider from "../../components/carousel/LogoSlider";
import UTC from "../../components/card/services/UTC";
import AssignmentHelper from "../../components/card/services/AssignHelper";
import ComingSoon from "../../components/card/services/ComingSoon";
import UTstructure from "./UTstructure/UT";
import UTcalculator from "./UTstructure/UTCalculator/UTcalculator";
import Footer from "../../components/footer/Footer";
import { SwiperNavNext, SwiperNavPrev } from "../../components/swipperButton/swiperButton";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import AHstructure from "./AHstructure/AH";
import AHplayground from "./AHstructure/AHplayground/AHplayground";
import sisLogo from "../../assets/logo/sisLogo.png";

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