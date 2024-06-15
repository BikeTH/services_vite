import React, { useState } from "react";
import UTstructure from "./UTstructure/UT";
import UTcalculator from "./UTstructure/UTCalculator/UTcalculator";
import { Link } from "react-router-dom";
import './UTConsult.css';
import { AiOutlinePlus } from "react-icons/ai";

const FAQUT = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: "Is it Worth Investing?",
            answer: (
                <>
                    <h4>Risk vs Reward:</h4>
                    <p>Unit Trusts offer potential for higher returns but they also come with higher risk levels.</p>
                    <h4>Investment Time Horizon:</h4>
                    <p>Unit trusts are better suited for long-term investment goals (e.g., 5 years or more) due to their potential for growth and compounding returns over time.</p>
                    <h4>Inflation:</h4>
                    <p>Inflation erodes the purchasing power of money over time. Unit trusts have the potential to outpace inflation and generate real returns, whereas fixed deposits may struggle to keep up with inflation rates.</p>
                </>
            )
        },
        {
            question: "Is my Unit Trust Consultant legit?",
            answer: (<>You can check your Unit Trust Consultant on the <a href="https://www.fimm.com.my/search/" target="_blank" rel="noopener noreferrer">FIMM website</a>.</>)
        },
        {
            question: "Are there any consultation fees?",
            answer: (<>Consultation is free! You can <Link to="/contact">Contact Me</Link> anytime and we can make an appointment.</>)
        }
    ];

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="faq-UT-arrangement">
            <div>
                <h1>I'm here to answer all your questions</h1>
                <h2>If you're interested in Unit Trust, this section will help you learn more about it!</h2>
            </div>
            <div className="faq-UT">
                {faqs.map((faq, index) => (
                    <div key={index} onClick={() => handleToggle(index)} className={activeIndex === index ? 'active' : ''}>
                        <h3>{faq.question} <AiOutlinePlus className="icon"/></h3>
                        <div>{faq.answer}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default function UTConsult() {
    return (
        <>
            <div id="servicesUT" className="servicesUT">
                <UTstructure />
                <div className="calculator-UT">
                    <UTcalculator />
                </div>
                <FAQUT />
                <div className="last-UT">
                    <h1>The Best of Wealth Management.</h1>
                    <h1>All In One Place</h1>
                    <p>To help Investors meet their financial goals</p>
                </div>
            </div>
            <div className="Contact-landing">
                <h1>Reach me Out!</h1>
                <p>I'd love to hear from you! Whether you have a <span>Question</span>, a <span>Project Idea</span>, 
                    or just want to <span>say Hello</span>, feel free to get in touch. 
                    I'm always excited to connect with new people and explore new opportunities.</p>
                    <Link to="/contact" className="contact-button">
                        Contact Me!
                    </Link>
            </div>
        </>
    );
}
