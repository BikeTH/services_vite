import React from "react";
import './offer.css';
import { CgWebsite, CgSmartphone } from "react-icons/cg";

const offer = [
    {
        id: 1,
        icon: <CgSmartphone />,
        title: "Mobile Application",
    },
    {
        id: 2,
        icon: <CgWebsite />,
        title: "Website",
    }
]

export default function Offer(){
    return(
        <>
        <div className="ITconsult-offer">
            <h1 style={{fontSize: "24px"}}>What we Offer</h1>
                <div className="ITconsult-offer-arrangment">
                {
                    offer.map(data => (
                        <div className="ITconsult-offer-content" key={data.id}>
                            <h1 style={{fontSize: "68px", fontWeight:"800"}}>{data.icon}</h1>                                <h2 style={{fontSize: "24px", fontWeight:"400", margin:"0", transform:"translateY(-48px)"}}>{data.title}</h2>
                        </div>
                    ))
                }
            </div>
        </div>
        </>
    )
}