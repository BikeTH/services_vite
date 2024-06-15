import React from "react"
import { Route, Routes } from "react-router-dom"
import About from "./pages/About/About"
import Contact from "./pages/Contact/Contact"
import Home from "./pages/Home/Home"
import UTConsult from "./pages/UTConsult/UTConsult"
import CSAid from "./pages/CSAid/CSAid"
import ITconsult from "./pages/ITconsult/ITconsult"
import Navbar from "./components/navbar/Navbar"
import NavToTop from "./components/toTop/NavToTop"

export default function App(){
    return(
        <>
            <Navbar />
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/UTConsult" element={<UTConsult />} />
                    <Route path="/CSAid" element={<CSAid />} />
                    <Route path="/ITconsult" element={<ITconsult />} />
                </Routes>
            </div>
            <NavToTop />
        </>
    )
}
