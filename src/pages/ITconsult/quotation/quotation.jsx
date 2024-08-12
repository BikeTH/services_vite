import React from "react";
import './quotation.css';

export default function Quotation(){
    return(
        <>
        <div className="ITconsult-price-quotation">
            <div className="ITconsult-price-quotation-header">
                <h1 style={{fontSize: "24px", textAlign:"center"}}>Build Website / Application Plan</h1>
                <h2 style={{fontSize: "42px", textAlign:"center", margin:"0px"}}>How Much to Build a Website / Application?</h2>
                <p style={{fontSize: "16px", textAlign:"center", margin:"0px", fontStyle:"italic"}}>Price may vary without notice</p>
            </div>
            <div className="ITconsult-price-quotation-form">
                <h1 style={{textAlign:"center", fontSize:"68px"}}>Progressing....</h1>
            </div>
        </div>
        </>
    )
}