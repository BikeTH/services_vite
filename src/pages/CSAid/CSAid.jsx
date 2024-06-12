import React from "react";
import AHstructure from "./AHstructure/AH";
import AHplayground from "./AHstructure/AHplayground/AHplayground";
import { Link } from "react-router-dom";

export default function CSAid(){
    return(
        <>
        <div id="servicesAH" className="servicesAH">
                    <AHstructure />
                    <div className="Intro-AH">
                        <h1>Need help?</h1>
                        <p>We are here to support and enhance your academic journey. If you'are seeking for guidance, our platform is here to assist.</p>
                        <p>Let's embark on this learning adventure together, where success is just a click away!</p>
                    </div>
                    <div className="CS-playground">
                        <AHplayground />
                    </div>
                    <div className="Summary-AH">
                        <h1>Still looking for Handhold?</h1>
                        <h1>What you should know:</h1>
                        <span>Trade-offs of Seeking Assignment Handholding:</span>
                        <p>Seeking assignment handholding offers potential for higher quality work and improved understanding, but it also comes with a cost.</p>
                        <span>The Value of Handholding:</span>
                        <p>Handholding can be beneficial for long-term learning goals and customized support, aligning with the potential growth and compounding returns over time.</p>
                        <span>Balancing Ethical Considerations in Seeking Assignment Handholding:</span>
                        <p>Without proper ethical considerations, over-reliance on assignment handholding may erode independent learning skills and hinder personal growth, whereas responsible use can lead to significant learning opportunities.</p>
                        <h1>Summary</h1>
                        <p>While seeking assignment handholding can lead to higher-quality work and learning outcomes, it also comes with potential drawbacks such as dependency and ethical considerations.</p>
                        <p>Students should carefully consider their learning objectives, time horizon, and ethical standards before deciding to seek assignment handholding.</p>
                        <p>Educators or academic advisors can provide personalized guidance and recommendations based on individual circumstances.</p>
                    </div>
                </div>
        <div className="Contact-UT">
            <h1>Feel free to reach me out for free consultation!</h1>
                <Link to="/contact" className="contact-button">
                    Contact Me!
                </Link>
        </div>
        </>
    )
}
