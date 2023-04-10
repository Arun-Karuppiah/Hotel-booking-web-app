import React,{useEffect} from 'react'
import {NavLink} from "react-router-dom"
import hotel_logo from './hotel.jpg';
import './Header.css'

const Header = () => {

  useEffect(() => {
    window.addEventListener('scroll', isSticky);
    return () => {
        window.removeEventListener('scroll', isSticky);
    };
});

       
/* Method that will fix header after a specific scrollable */
       const isSticky = (e) => {
            const header = document.querySelector('.header-section');
            const scrollTop = window.scrollY;
            scrollTop >= 250 ? header.classList.add('is-sticky') : header.classList.remove('is-sticky');
        };

  return (
    <div className="header-section d-none d-xl-block">
       <nav className="navbar navbar-expand-ig" style={{backgroundColor: "#f0f0d0",height:"100px",display:"flex",padding:"26px",position:"sticky",top:"0px",zIndex:"1"}}>
           
           <img src={hotel_logo} alt="" style={{width:"100px",height:"60px",marginBottom:"10px"}}/>
           <h1 style={{color:"black",fontSize:"40px",marginLeft:"20px"}}>TAJ HOTELS</h1>
           <NavLink to="/" className="btn" style={{color:"black",fontSize:"20px",marginLeft:"600px",marginRight:"20px"}}>
            Home
           </NavLink>
           <NavLink to="/Features" className="btn" style={{color:"black",fontSize:"20px",marginRight:"20px"}}>
            Features
           </NavLink>
           <NavLink to="/Feedback" className="btn" style={{color:"black",marginRight:"20px",fontSize:"20px"}}>
            Feedback
           </NavLink>
           <NavLink to="/ContactUs" className="btn" style={{color:"black",marginRight:"20px",fontSize:"20px"}}>
            Contact Us
           </NavLink>
       </nav>
    </div>
  )
}

export default Header;