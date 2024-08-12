import React from "react";
import './footer.css';
import { BiMapPin } from "react-icons/bi";

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
                <p>Home</p>
                <p>Offer</p>
                <p>Pricing</p>
                <p>FaQ</p>
                <p>Team</p>
                <p>Contact</p>
        </>
    },
    {
        id: 3,
        title: "Legal",
        content: "Privacy  Policy",
    },
]

export default function Footer(){
    return(
        <>
            <div className="ITconsult-footer">
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
        </>
    )
}