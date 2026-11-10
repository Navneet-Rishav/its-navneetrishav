import React, { useState } from "react";
import "./Navbar.css";
import { assExp } from '../../assets/assets'
import { Link } from "react-router-dom";

const Navbar = () => {

    const [menu,setMenu] = useState("home")
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to='/' onClick={()=>setMenu("home")}><img src={assExp.logo} alt="Navneet Rishav logo" /></Link>
      </div>
      <div className="navbar-menu">
        <Link to='/' onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>Home</Link>
        <a href="/#aboutme" onClick={()=>setMenu("about")} className={menu==="about"?"active":""}>About</a>
        <a href="/#experience" onClick={()=>setMenu("experience")} className={menu==="experience"?"active":""}>Experience</a>
        <a href="/#skills" onClick={()=>setMenu("skills")} className={menu==="skills"?"active":""}>Skills</a>
        <a href="/#projects" onClick={()=>setMenu("projects")} className={menu==="projects"?"active":""}>Projects</a>
        <Link to="/certificates" onClick={()=>setMenu("certs")} className={menu==="certs"?"active":""}>Certifications</Link>
      </div>
    </nav>
  );
};

export default Navbar;
