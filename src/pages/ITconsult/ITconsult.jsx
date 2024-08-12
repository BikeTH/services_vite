import React from "react";
import './ITconsult.css';
import Banner from "./banner/banner";
import ReasonContent from "./reason/reasonContent";
import Offer from "./offer/offer";
import TechStackSlider from "./techstack/techStackSlider";
import WhyUs from "./whyUs/whyUs";
import Quotation from "./quotation/quotation";
import Faq from "./faq/faq";
import Team from "./team/team";
import Contact from "./contact/contact";
import Footer from "./footer/footer";

export default function ITconsult(){
    return(
        <>
        <div className="ITconsult-main">
            <Banner />
            <ReasonContent />
            <Offer />
            <TechStackSlider />
            <WhyUs />
            <Quotation />
            <Faq />
            <Team />
            <Contact />
            <Footer />
        </div>
        </>
    )
}
