import React, { useState, useEffect } from "react";
import { Link, useMatch, useResolvedPath, useLocation } from "react-router-dom";
import './Navbar.css';
import logo from '../../assets/logo/sisLogo.png';
import { AiOutlineMenuUnfold, AiOutlineMenuFold } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { GoArrowRight } from "react-icons/go";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const location = useLocation();
    const isUTConsultPage = location.pathname === "/UTConsult";

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleLinkClick = () => {
        setMenuOpen(false);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    useEffect(() => {
        const handleScroll = () => {
            const position = window.scrollY;
            setScrollPosition(position);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const maxScroll = 300;
    const opacity = scrollPosition / maxScroll > 1 ? 1 : scrollPosition / maxScroll;
    const colorValue = isUTConsultPage ? Math.min(255, Math.floor(opacity * 255)) : 255;
    const textColor = isUTConsultPage ? `rgb(${colorValue}, ${colorValue}, ${colorValue})` : 'inherit';

    return (
        <nav className={`nav ${isUTConsultPage ? 'utconsult-nav' : ''}`} style={{backgroundColor: `rgba(40, 44, 48, ${opacity})` }}>
            <Link to="/">
                <img src={logo} alt="myLogo" className="nav-logo" />
            </Link>
            <div className="menu" onClick={toggleMenu}>
                {menuOpen ? <AiOutlineMenuFold /> : <AiOutlineMenuUnfold />}
            </div>
            <ul className={menuOpen ? "open" : ""} style={{ color: textColor }}>
                <CustomLink to="/" setMenuOpen={setMenuOpen}>Home</CustomLink>
                <CustomLink to="/about" setMenuOpen={setMenuOpen}>About</CustomLink>
                <CustomLink
                    style={{ backgroundColor: 'inherit', transform: 'none', boxShadow: 'none', borderBottom: 'none', color: textColor }} 
                    hasSubMenu
                    setMenuOpen={setMenuOpen}
                >
                    Services
                </CustomLink>
                <CustomLink to="/contact" setMenuOpen={setMenuOpen}>Contact</CustomLink>
            </ul>
        </nav>
    );
}

function CustomLink({ to, children, hasSubMenu, style, setMenuOpen, ...props }) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });
    const [subMenuOpen, setSubMenuOpen] = useState(false);
    const [subMenuWay, setSubMenuWay] = useState(window.innerWidth <= 960);
    const location = useLocation();

    useEffect(() => {
        const handleSubMenuWay = () => {
            setSubMenuWay(window.innerWidth <= 960);
        };

        window.addEventListener('resize', handleSubMenuWay);

        return () => {
            window.removeEventListener('resize', handleSubMenuWay);
        };
    }, []);

    const handleMouseEnter = () => {
        if (!subMenuWay) {
            setSubMenuOpen(true);
        }
    };

    const handleMouseLeave = () => {
        if (!subMenuWay) {
            setSubMenuOpen(false);
        }
    };

    const handleToggleSubMenu = () => {
        if (subMenuWay) {
            setSubMenuOpen(!subMenuOpen);
        }
    };

    const handleLinkClick = () => {
        setMenuOpen(false);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <li
            className={isActive ? "active" : ""}
            style={style}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {hasSubMenu ? (
                <div
                    className={`servicesMenu ${subMenuOpen ? 'open' : ''}`}
                    onClick={handleToggleSubMenu}
                >
                    {children}
                    <IoIosArrowDown className={`arrow ${subMenuOpen ? 'rotate' : ''}`} style={{ paddingTop: "5px" }} />
                    {subMenuOpen && (
                        <ul className="sub-menu">
                            <li className="submenu-item">
                                <h2>Personal Services</h2>
                                <ul className="inner-sub-menu">
                                    <li>
                                        <Link to="/UTConsult" onClick={handleLinkClick}>UnitTrust Consultation</Link>
                                        <span className="right-arrow"><GoArrowRight /></span>
                                    </li>
                                </ul>
                            </li>
                            <li className="submenu-item">
                                <h2>Team Services</h2>
                                <ul className="inner-sub-menu">
                                    <li>
                                        <Link to="/CSAid" onClick={handleLinkClick}>Assignment Aid</Link>
                                        <span className="right-arrow"><GoArrowRight /></span>
                                    </li>
                                    <li>
                                        <Link to="/digitalcard" onClick={handleLinkClick}>e Business Card</Link>
                                        <span className="right-arrow"><GoArrowRight /></span>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    )}
                </div>
            ) : (
                <Link to={to} onClick={handleLinkClick} {...props}>
                    {children}
                </Link>
            )}
        </li>
    );
}
