import React, { useState } from "react";
import './footer.css';
import ScrollToSection from "../../function/scrollToSection";
import { BiMapPin } from "react-icons/bi";
import { MdClose } from "react-icons/md";

export default function Footer(){
    const [showMsg, setShowMsg] = useState(false);

    const footer = [
        {
            id: 1,
            title: "About",
            content:"We build functional websites and applications tailored to your business needs, whether for optimizing operations or increasing visitor engagement. Our solutions enhance efficiency and deliver practical, user-friendly tools.",
        },
        {
            id: 2,
            title: "Quick Link",
            content: 
            <>
                <div className="Footer-Quick-Link-btn">
                    <button onClick={() => ScrollToSection('home')}>Home</button>
                    <button onClick={() => ScrollToSection('offer')}>Our Products</button>
                    <button onClick={() => ScrollToSection('quotation')}>Pricing Plan</button>
                    <button onClick={() => ScrollToSection('faq')}>FaQ</button>
                    <button onClick={() => ScrollToSection('team')}>Our Team</button>
                    <button onClick={() => ScrollToSection('contact')}>Contact Us</button>
                </div>
            </>
        },
        {
            id: 3,
            title: "Legal",
            content:
            <>
                <div className="Footer-Quick-Link-btn">
                    <button onClick={() => setShowMsg(true)}>Privacy Policy</button>
                </div>
            </>
        },
    ]

    return(
        <>
            <div className="ITconsult-footer" id="footer">
                <div className="our-location">
                    <div className="our-location-arrangement">
                        <h1><BiMapPin /></h1>
                        <div>
                            <h3>We are located at:</h3>
                            <p>Malaysia</p>
                        </div>
                    </div>
                    <div>
                        LOGO
                    </div>
                </div>
                <div style={{borderBottom:"0.2px solid white", padding:"8px", margin:"0 auto"}}/>
                <div>
                    <div className="ITconsult-footer-content">
                        {footer.map(data => (
                            <div className="ITconsult-footer-content-arrangement" key={data.id}>
                                <h1>{data.title}</h1>
                                <div>{data.content}</div>
                            </div>
                        ))}
                    </div>
                </div>
                <div style={{borderBottom:"0.2px solid white", padding:"8px", margin:"0 auto"}}/>
                <p>&copy; 2024. All rights reserved.</p>
            </div>
            {showMsg && (
                <div className="pop-msg-overlay">
                    <div className="msg-content">
                        <button className="msg-close" onClick={() => setShowMsg(false)}><MdClose /></button>
                        <h2>Privacy Policy</h2>
                        <div className="msg-body">
                            <p>Here are the rules and regulations...</p>
                            {/* Add full privacy policy content here */}
                        </div>
                    </div>
                </div>
            )}       
        </>
    );
}