import React, {useState} from "react";
import './ITconsult.css';
import bannerImage from '../../assets/image/ITConsult/banner.jpeg';
import me from '../../assets/image/ITConsult/teamMember/aiMe.png';
import quotation from '../../assets/image/ITConsult/quotation.jpeg';
import { VscVerified, VscHeart, VscGear, VscDashboard } from "react-icons/vsc";
import { CgWebsite, CgSmartphone } from "react-icons/cg";
import { FaFigma, FaReact, FaNode, FaHtml5, FaCss3Alt, FaJava, FaDigitalOcean, FaLinux, FaDocker } from "react-icons/fa";
import { SiExpo, SiMysql } from "react-icons/si";
import { FaCoins, FaBolt, FaPenNib, FaMapLocationDot, FaUsersGear, FaServer, FaLinkedin, FaArrowUpRightDots, FaWhatsapp, FaInstagram } from "react-icons/fa6";
import { AiOutlinePlus } from "react-icons/ai";
import { TbMail } from "react-icons/tb";

const teams = [
    {
        id: 1,
        picture: me,
        details:(
            <>
                <div className="team-member-info-arrangement">
                    <h3>Wilfred</h3>
                    <p>B.sc. Major in Cyber Security</p>
                    <p>INTP - Curious and adventurous, always eager to explore new horizons!</p>
                    <p>IT</p>
                    <a className="member-portfolio" href="http://wilfredcty.com"  target="_blank" rel="noreferrer noopener">Portfolio <FaArrowUpRightDots /></a>
                    <div className="team-member-connect-arrangement">
                        <a href="https://www.linkedin.com/in/wilfred-tsen-yik-chong-2a37a724b" target="_blank" rel="noreferrer noopener"><FaLinkedin color="#0077B5" /></a>
                        <a href="mailto:700024165@student.curtin.edu.my" target="_blank" rel="noreferrer noopener"><TbMail color="636363" /></a>
                    </div>
                </div>
            </>
        )
    },
    {
        id: 2,
        picture: "",
        details:(
            <>
            
            </>
        )
    }
]

const faqs = [
    {
        id: 1,
        questions: "What we do ?",
        answer: (
            <>
                <p>We provide you with a professional Web / App development service for your industry</p>
            </>
        )
    },
    {
        id: 2,
        questions: "What do we need before we start develop ?",
        answer: (
            <>
                <p>We will provide you a CHECKLIST for information and content before the project starts.</p>
                <p>We will be proactive during this phase, and your cooperation is important</p>
            </>
        )
    },
    {
        id: 3,
        questions: "How long does it take for us to develop ?",
        answer: (
            <>
                <p>It takes approximately at least 2 weeks from starts to finish, depending on project complexity</p>
            </>
        )
    },
    {
        id: 4,
        questions: "Technical Issue? We're on It !",
        answer: (
            <>
                <p>If your application or website facing any issues, we will take action in fixing it right away!</p>
            </>
        )
    },
    {
        id: 5,
        questions: "How we develop our Project ?",
        answer: (
            <>
                <p>Most of our Project will be done in Programming, source code will be given to you</p>
            </>
        )
    }
]

const chooseUs = [
    {
        id: 1,
        icon: <FaCoins />,
        title: "Affordable packages",
        description: "Get top-notch development services at competitive prices. Our packages are designed to fit various budgets without compromising on quality.",
    },
    {
        id: 2,
        icon: <FaBolt />,
        title: "Efficient development process",
        description: "Experience a streamlined development process that saves you time and accelerates your project’s delivery. We ensure efficiency at every step.",
    },
    {
        id: 3,
        icon: <FaPenNib />,
        title: "Custom Design",
        description: "Receive a tailor-made design that reflects your brand’s unique identity. We create custom solutions that set you apart from the competition.",
    },
    {
        id: 4,
        icon: <FaMapLocationDot />,
        title: "SEO target specific geographic area",
        description: "Boost your online presence with SEO strategies that target your desired geographic area, driving more local traffic to your site.",
    },
    {
        id: 5,
        icon: <FaUsersGear />,
        title: "Troubleshooting Support Team",
        description: "Benefit from our dedicated support team, ready to resolve any issues promptly and keep your website or app running smoothly.",
    },
    {
        id: 6,
        icon: <FaServer />,
        title: "Own I.T Server",
        description: "Enjoy reliable performance with our own dedicated I.T. servers, ensuring your website and applications are always fast and secure.",
    },
]

const tech = [
    <FaFigma key="figma" />,
    <FaReact key="react" />,
    <FaNode key="node" />,
    <FaHtml5 key="html5" />,
    <FaCss3Alt key="css3" />,
    <FaJava key="java" />,
    <SiExpo key="expo" />,
    <SiMysql key="mysql" />,
    <FaDigitalOcean key="digitalocean" />,
    <FaLinux key="linux" />,
    <FaDocker key="docker" />,
  ];

const reasonSupport = [
    {
        id: 1,
        icon: <VscVerified />,
        title: "Enhanced Credibility & Trust",
        description: "A professional website creates a trustworthy image, making visitors more likely to view your business as reliable and credible.",
    },
    {
        id: 2,
        icon: <VscHeart />,
        title: "Improved User Experience",
        description: "Professional websites offer smooth navigation and fast loading, keeping visitors engaged and reducing the chance they’ll leave without taking action.",
    },
    {
        id: 3,
        icon: <VscGear />,
        title: "Effective Conversion Optimization",
        description: "Well-designed websites guide visitors toward making purchases with clear calls-to-action and easy checkout processes.",
    },
    {
        id: 4,
        icon: <VscDashboard />,
        title: "Enhanced Visibility & SEO",
        description: "A professionally built site improves your search engine ranking, attracting more visitors and boosting your chances of making sales.",
    },
]

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

export default function ITconsult(){
    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    function scrollToServices(){
        const servicesAll = document.getElementById('ITConsult');
        servicesAll.scrollIntoView({ behavior: 'smooth', block: 'start'});
    } 

    return(
        <>
        <div className="ITconsult-main">
            <div className="ITconsult-banner">
                <div className="ITconsult-intro-content">
                    <h1>Website / Application Development Malaysia</h1>
                    <h2>We Build Stunning, Efficient Websites & Apps that captivate users.</h2>
                    <p>A stunning looking website is the First Step</p>
                    <button className="buttonIT" onClick={() => scrollToServices()}>Get started</button>
                </div>
                <img src={bannerImage} />
            </div>
            <div id="ITConsult" className="ITconsult-content">
                <div className="ITconsult-reason-content">
                    <div className="ITconsult-reason-header">
                        <h1 style={{fontSize: "24px", fontWeight:"600"}}>4 Main Reasons</h1>
                        <h2 style={{fontSize: "42px", fontWeight:"300"}}>Professional website Boost Sales</h2>
                    </div>
                    <div className="ITconsult-reason-support">
                        {
                            reasonSupport.map(data => (
                                <div className="ITconsult-reason-support-arrangement" key={data.id}>
                                    <h1 style={{fontSize: "48px"}}>{data.icon}</h1>
                                    <h2 style={{fontSize: "28px", fontWeight:"800"}}>{data.title}</h2>
                                    <p style={{fontSize: "18px", fontWeight:"400"}}>{data.description}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="ITconsult-offer">
                <h1 style={{fontSize: "24px"}}>What we Offer</h1>
                    <div className="ITconsult-offer-arrangment">
                    {
                        offer.map(data => (
                            <div className="ITconsult-offer-content" key={data.id}>
                                <h1 style={{fontSize: "68px", fontWeight:"800"}}>{data.icon}</h1>
                                <h2 style={{fontSize: "24px", fontWeight:"400", margin:"0", transform:"translateY(-48px)"}}>{data.title}</h2>
                            </div>
                        ))
                    }
                    </div>
            </div>
            <div className="ITconsult-tech-slider">
                {tech.map((icon, index) => (
                    <div className="ITconsult-tech-item" style={{ animationDelay: `${-10 / tech.length * index}s` }} key={index}>
                        {icon}
                    </div>
                ))}
            </div>
            <div className="ITconsult-why-us">
                <h1 style={{fontSize: "24px"}}>Why Choose Us?</h1>
                <div className="ITconsult-why-us-arrangement">
                    {
                        chooseUs.map(data => (
                            <div className="ITconsult-why-us-content" key={data.id}>
                                <h1>{data.icon}</h1>
                                <h2>{data.title}</h2>
                                <p>{data.description}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="ITconsult-price-quotation">
                    <div className="ITconsult-price-quotation-header">
                        <h1 style={{fontSize: "24px", textAlign:"center"}}>Build Website / Application Plan</h1>
                        <h2 style={{fontSize: "42px", textAlign:"center", margin:"0px"}}>How Much to Build a Website / Application?</h2>
                        <p style={{fontSize: "16px", textAlign:"center", margin:"0px", fontStyle:"italic"}}>Price may vary without notice</p>
                </div>
                <div className="ITconsult-price-quotation-form">

                </div>
            </div>
            <div className="ITconsult-faq">
                <div className="ITconsult-faq-header" style={{textAlign:"center"}}>
                    <h1 style={{fontSize:"24px", margin:"0px"}}>FAQ</h1>
                    <h2 style={{fontSize:"38px", margin:"0px"}}>Ask Away! Your questions Matter to Us</h2>
                </div>
                <div className="ITconsult-faq-question">
                    {faqs.map((faq,index) => (
                        <div className="ITconsult-faq-question-arrangement" key={faq.id} onClick={() => handleToggle(index)}>
                            <h1 onClick={() => handleToggle(index)}>{faq.questions} 
                            <AiOutlinePlus className={`icon ${activeIndex === index ? 'rotate' : ''}`} /></h1>
                            <div className={`ITconsult-faq-answer ${activeIndex === index ? 'expanded' : ''}`}>
                                {faq.answer}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="ITconsult-teams">
                <h1 style={{fontSize:"24px", textAlign:"center"}}>Meet Our Team</h1>
                <div className="ITconsult-teams-arrangement">
                    {teams.map(data => (
                        <div className="ITconsult-teams-member-arrangement" key={data.id}>
                            <div className="member-detail-arrangement">
                                <img className="member-picture" src={data.picture} />
                                <div>
                                    {data.details}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="ITconsult-contact">
                <img src={quotation} />
                <div className="ITconsult-contact-detail">
                    <h1>Request For Quotation ?</h1>
                    <p>You can directly Contact Us with no Charges and We are Happy to Help!</p>
                    <ul>
                        <a href="https://www.linkedin.com/in/wilfred-tsen-yik-chong-2a37a724b" target="_blank" rel="noreferrer noopener"><FaLinkedin color="#0077B5" /><span className="contact-text">LinkedIn</span></a>
                        <a href="https://www.instagram.com/wilc_43?igsh=MWtteTUyOXVxbjlvdg==" target="_blank" rel="noreferrer noopener"><FaInstagram color="#bc2a8d" /><span className="contact-text">Instagram</span></a>
                        <a href="tel:+601121823390" target="_blank" rel="noreferrer noopener"><FaWhatsapp color="#25D366" /><span className="contact-text">Whatapps</span></a>
                        <a href="mailto:700024165@student.curtin.edu.my" target="_blank" rel="noreferrer noopener"><TbMail color="636363" /><span className="contact-text">Email</span></a>
                    </ul>
                </div>
            </div>
            <div className="ITconsult-footer">
                
            </div>
        </div>
        </>
    )
}
