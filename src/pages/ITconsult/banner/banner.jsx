import React from "react";
import './banner.css';
import bannerImage from '../../../assets/image/ITConsult/banner.jpeg';

export default function Banner(){
    function scrollToServices(){
        const servicesAll = document.getElementById('ITConsult');
        servicesAll.scrollIntoView({ behavior: 'smooth', block: 'start'});
    }

    return(
    <>
        <div className="ITconsult-banner">
            <div className="ITconsult-intro-content">
                <h1>Website / Application Development Malaysia</h1>
                <h2>We Build Stunning, Efficient Websites & Apps that captivate users.</h2>
                <p>A stunning looking website is the First Step</p>
                <button className="buttonIT" onClick={() => scrollToServices()}>Get started</button>
            </div>
            <img src={bannerImage} />
        </div>
    </>
    );
}