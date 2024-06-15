import React from "react";
import "./UT.css";
import { MdDiversity2, MdManageAccounts, MdOutlineSavings } from "react-icons/md";
import { PiCoinVerticalBold } from "react-icons/pi";
import { GrPlan, GrMultiple } from "react-icons/gr";
import { GiBubblingFlask } from "react-icons/gi";
import { ComposableMap, Geographies, Geography, ZoomableGroup, Marker } from "react-simple-maps";

const features = [
    {
        id: 1,
        symbol: <MdDiversity2 size={50} />,
        title: "Diversification",
        context: "Investors can access a diversified portfolio of assets through a single investment.",
    },
    {
        id: 2,
        symbol: <MdManageAccounts size={70} />,
        title: "Professional Management",
        context: "Unit trusts are managed by professional fund managers who make investment decisions on behalf of investors.",
    },
    {
        id: 3,
        symbol: <PiCoinVerticalBold size={70} />,
        title: "Liquidity",
        context: "Investors can easily buy and sell units in a unit trust, providing liquidity compared to direct investments in individual securities.",
    },
    {
        id: 4,
        symbol: <MdOutlineSavings size={70} />,
        title: "Affordability",
        context: "Unit trusts allow investors to participate in a diversified portfolio with relatively small amounts of capital.",
    }
];

const solution = [
    {
        id: 1,
        content: (
            <>
                <div className="UT-solution">
                    <div className="solution-content">
                        <h1>Financial Planning Services <GrPlan /></h1>
                            <p>We focus on identifying effective strategies and financial solutions for wealth advisors and investors to reach their financial goals. Our services offer access to diverse global investments, currency exposure, and tax benefits without initial capital requirements.</p>
                        </div>
                    <div className="planning-image" />
                </div>
            </>
        ),
        badge: (
            <>
                <h1></h1>
            </>
        ),
    },
    {
        id: 2,
        content: (
            <>
                <div className="UT-solution">
                    <div className="solution-content">
                        <h1>Asset Allocation <GrMultiple /></h1>
                            <p>Ensures precise distribution of wealth and legacy during and after one's lifetime, all for a minimal fee, providing confidence in the transfer of investments to loved ones.</p>
                        </div>
                    <div className="allocation-image" />
                </div>
            </>
        ),
        badge: (
            <>
                <h1></h1>
            </>
        )
    },
    {
        id: 3,
        content: (
            <>
                <div className="UT-solution">
                    <div className="solution-content">
                        <h1>Research & Supports <GiBubblingFlask /></h1>
                            <p>Our aim is to provide you, the wealth advisor, with expert insights, keeping you updated on global market trends. With this knowledge, we can develop a tailored wealth plan aligned with your objectives, facilitating effective implementation of recommendations.</p>
                        </div>
                    <div className="allocation-image" />
                </div>
            </>
        ),
        badge: (
            <>
                <h1></h1>
            </>
        )
    }
];

const markers = [
    {
        id: "Malaysia",
        coordinates: [103.3816, 3.5],
    },
    {
        id: "Thailand",
        coordinates: [100, 15]
    },
    {
        id: "Indonesia",
        coordinates: [108, -4]
    },
    {
        id: "Australia",
        coordinates: [135, -25]
    },
    {
        id: "China",
        coordinates: [100, 35]
    },
    {
        id: "Japan",
        coordinates: [140, 40]
    },
    {
        id: "Korea",
        coordinates: [126, 36]
    },
    {
        id: "Taiwan",
        coordinates: [120, 22]
    },
    {
        id: "US",
        coordinates: [-100, 38]
    }
];

const geoUrl = "https://unpkg.com/world-atlas@2.0.2/countries-110m.json";

export default function UTstructure() {
    return (
        <>
            <div className="UT-structure">
                <h1 style={{ marginTop: "0px" }}>Providing comprehensive value to investors across the board.</h1>
                <p>Unlock the potential of your savings by discovering the benefits that unit trusts offer to investors!</p>
            </div>
            <div className="UT-feature">
                <div className="Intro-UT">
                    <h1>What are Unit Trusts?</h1>
                    <p style={{ textAlign: "center" }}>Unit trusts are investment funds that allow investors to pool their money together to invest in a diversified portfolio of assets such as stocks, bonds, or other securities.</p>
                    <p style={{ textAlign: "center" }}>These funds are managed by professional fund managers who make investment decisions on behalf of the investors.</p>
                </div>
                <div className="UT-feature-arrangement">
                    {features.map(data => (
                        <div className="UT-symbol" key={data.id}>
                            {data.symbol}
                            <div className="UT-feature">
                                <h1>{data.title}</h1>
                                <p>{data.context}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="UT-solution-arrangement">
                    <h1>Solutions</h1>
                    {solution.map(data => (
                        <div key={data.id}>
                            {data.content}
                        </div>
                    ))}
                </div>
            </div>
            <div className="variety-service">
                <h1>Funds Coverage</h1>
                <h2>Multi-National Funds Combination</h2>
                <div className="map-service">
                    <ComposableMap data-tip="">
                        <Geographies geography={geoUrl}>
                            {({ geographies }) =>
                                geographies.map((geo) => (
                                <Geography key={geo.rsmKey} geography={geo} />
                                ))
                                }
                        </Geographies>
                        {markers.map(data => (
                                <Marker key={data.id} coordinates={data.coordinates}>
                                    <circle r={7} fill="red" stroke="white" strokeWidth={2}/>
                                </Marker>
                            ))
                        }    
                    </ComposableMap>
                </div>
            </div>
        </>
    );
}
