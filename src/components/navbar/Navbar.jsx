import React, { useState, useEffect } from "react";
import { Link, useMatch, useResolvedPath, useLocation } from "react-router-dom";
import './Navbar.css';
import logo from '../../assets/logo/sisLogo.png';
import { AiOutlineMenuUnfold, AiOutlineMenuFold } from "react-icons/ai";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const location= useLocation();

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleLinkClick = () => {
        setMenuOpen(false);
    };

    useEffect(() =>{
        window.scrollTo(0,0);
    }, [location]);

    useEffect(() =>{
        const handleScroll = () => {
            const position = window.scrollY;
            setScrollPosition(position);
        }

        window.addEventListener('scroll', handleScroll, { passive: true});

        return() => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const maxScroll = 300;
    const opacity = scrollPosition / maxScroll > 1 ? 1 : scrollPosition / maxScroll;

    return (
        <nav className="nav" style={{backgroundColor: `rgba(40, 44, 48, ${opacity})`}}>
            <Link to="/">
                <img src={logo} alt="myLogo" className="nav-logo"/>
            </Link>
            <div className="menu" onClick={toggleMenu}>
                {menuOpen ? <AiOutlineMenuFold /> : <AiOutlineMenuUnfold />}
            </div>
            <ul className={menuOpen ? "open" : ""}>
                <CustomLink to="/" onClick={handleLinkClick}>Home</CustomLink>
                <CustomLink style={{backgroundColor:'inherit', transform:'none', boxShadow:'none'}}hasSubMenu>Services</CustomLink>
                <CustomLink to="/about" onClick={handleLinkClick}>About</CustomLink>
                <CustomLink to="/contact" onClick={handleLinkClick}>Contact</CustomLink>
            </ul>
        </nav>
    );
}

function CustomLink({ to, children, hasSubMenu, style, ...props }) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });
    const [subMenuOpen, setSubMenuOpen] = useState(false);

    const handleMouseEnter = () => {
        setSubMenuOpen(true);
    };

    const handleMouseLeave = () => {
        setSubMenuOpen(false);
    };

    const handleToggleSubMenu = () => {
        setSubMenuOpen(!subMenuOpen);
    };

    return (
        <li className={isActive ? "active" : ""} style={style} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {hasSubMenu ? (
                    <div className="servicesMenu" onClick={handleToggleSubMenu}>
                        {children}
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
