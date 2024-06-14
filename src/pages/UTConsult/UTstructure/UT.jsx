import React from "react";
import "./UT.css";
import { MdDiversity2, MdManageAccounts, MdOutlineSavings } from "react-icons/md";
import { PiCoinVerticalBold } from "react-icons/pi";
import { GrPlan, GrMultiple } from "react-icons/gr";
import { GiBubblingFlask } from "react-icons/gi";

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
        image: '/src/assets/image/UT-solution/planning.jpg',
        symbol: <GrPlan />,
        title: "Financial Planning Services",
        context: "We focus on identifying effective strategies and financial solutions for wealth advisors and investors to reach their financial goals. Our services offer access to diverse global investments, currency exposure, and tax benefits without initial capital requirements.",
    },
    {
        id: 2,
        image: "/src/assets/image/UT-solution/allocate.jpg",
        symbol: <GrMultiple />,
        title: "Asset Allocation",
        context: "Ensures precise distribution of wealth and legacy during and after one's lifetime, all for a minimal fee, providing confidence in the transfer of investments to loved ones.",
    },
    {
        id: 3,
        image: "/src/assets/image/UT-solution/research.jpg",
        symbol: <GiBubblingFlask />,
        title: "Research & Supports",
        context: "Our aim is to provide you, the wealth advisor, with expert insights, keeping you updated on global market trends. With this knowledge, we can develop a tailored wealth plan aligned with your objectives, facilitating effective implementation of recommendations.",
    }
];

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
                        <div className="UT-solution" key={data.id}>
                            <div className="solution-content">
                                <h1>{data.title} {data.symbol}</h1>
                                <p>{data.context}</p>
                            </div>
                            <div className="solution-image" style={{backgroundImage: `url(${data.image})`}} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
