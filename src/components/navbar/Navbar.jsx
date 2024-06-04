import React, { useState } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import './Navbar.css';
import logo from '../../assets/logo/sisLogo.png';
import { AiOutlineMenuUnfold, AiOutlineMenuFold } from "react-icons/ai";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleLinkClick = () => {
        setMenuOpen(false);
    };

    return (
        <nav className="nav">
            <Link to="/">
                <img src={logo} alt="myLogo" className="nav-logo"/>
            </Link>
            <div className="menu" onClick={toggleMenu}>
                {menuOpen ? <AiOutlineMenuFold /> : <AiOutlineMenuUnfold />}
            </div>
            <ul className={menuOpen ? "open" : ""}>
                <CustomLink to="/" onClick={handleLinkClick}>Home</CustomLink>
                <CustomLink to="/services" hasSubMenu>Services</CustomLink>
                <CustomLink to="/about" onClick={handleLinkClick}>About</CustomLink>
                <CustomLink to="/contact" onClick={handleLinkClick}>Contact</CustomLink>
            </ul>
        </nav>
    );
}

function CustomLink({ to, children, hasSubMenu, ...props }) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });
    const [subMenuOpen, setSubMenuOpen] = useState(false);

    const handleMouseEnter = () => {
        setSubMenuOpen(true);
    };

    const handleMouseLeave = () => {
        setSubMenuOpen(false);
    };

    return (
        <li className={isActive ? "active" : ""} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {hasSubMenu ? (
                <div>
                    <Link style={{paddingTop:"7px"}}>{children}</Link>
                    {subMenuOpen && (
                        <ul className="sub-menu">
                            <li><Link to="/service1">UnitTrust Consultantation</Link></li>
                            <li><Link to="/service2">Assignment Aid</Link></li>
                        </ul>
                    )}
                </div>
            ) : (
                <Link to={to} {...props}>
                    {children}
                </Link>
            )}
        </li>
    );
}
