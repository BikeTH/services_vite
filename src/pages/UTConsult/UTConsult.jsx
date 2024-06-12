import React from "react";
import UTstructure from "./UTstructure/UT";
import UTcalculator from "./UTstructure/UTCalculator/UTcalculator";
import { Link } from "react-router-dom";

export default function UTConsult(){
    return(
        <>
        <div id="servicesUT" className="servicesUT">
                    <UTstructure />
                    <div className="Intro-UT">
                        <h1>What are Unit Trusts?</h1>
                        <p>Unit trust are investment funds that allow investors to pool their money together to invest in a diversified portfolio of assets such as stocks, bonds, or other securities</p>
                        <p>These funds are managed by professional fund managers who make investment decisions on behalf of the investors.</p>
                    </div>
                    <div className="calculator-UT">
                        <UTcalculator />
                    </div>
                    <div className="Summary-UT">
                        <h1>Is it Worth investing?</h1>
                        <h1>What you should know:</h1>
                        <span>Risk vs Reward:</span>
                        <p>Unit Trust offer potential for higher returns but they also come with higher risk levels</p>
                        <span>Investment Time Horizon:</span>
                        <p>Unit trusts are better suited for long-term investment goals (e.g., 5 years or more) due to their potential for growth and compounding returns over time.</p>
                        <span>Inflation:</span>
                        <p>Inflation erodes the purchasing power of money over time. Unit trusts have the potential to outpace inflation and generate real returns, whereas fixed deposits may struggle to keep up with inflation rates.</p>
                        <h1>Summary</h1>
                        <p>While unit trusts have the potential to generate higher returns over the long run, they also come with higher risks</p>
                        <p>Investors should consider their risk tolerance, investment goals, time horizon, and overall financial situation before deciding between unit trusts and fixed deposits. </p>
                        <p>Consulting with a financial advisor can also provide personalized insights and recommendations based on individual circumstances.</p>
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
