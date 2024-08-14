import React from "react";
import './banner.css';
import bannerImage from '../../../../assets/image/ITConsult/banner.jpeg';
import ScrollToSection from "../../function/scrollToSection";

export default function Banner(){

    return(
    <>
        <div className="ITconsult-banner" id="home">
            <div className="ITconsult-banner-header">
                <h1>Time</h1>
                <h1>Language</h1>
                <h1>Dark/Light Mode</h1>
            </div>
            <div className="ITconsult-banner-content">
                <div className="ITconsult-intro-content">
                    <h1>Website / Application Development Malaysia</h1>
                    <h2>We Build Stunning, Efficient Websites & Apps that captivate users.</h2>
                    <p>A stunning looking website is the First Step</p>
                    <button className="buttonIT" onClick={() => ScrollToSection('ITConsult')}>Explore Now</button>
                </div>
                <img src={bannerImage} />
            </div>
            <div className="navigation">
                <h1>NAVBAR</h1>
            </div>
        </div>
    </>
    );
}