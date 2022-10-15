import React from 'react';
import './Header.css';
import logo from '../../images/logo.jpg';
import logoo from '../../images/logoo.jpg';
import { NavLink } from 'react-router-dom';



const Header = () => {
    return (
        <div>
            <nav>
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/about">About Us</NavLink>
                <NavLink to="/services">Services</NavLink>
                <NavLink to="/schedule">Schedule</NavLink>
            </nav>

            <div className='header'>
                <h2>EFFORT <span className='black'>UNIVERSITY</span> ADMISSION</h2>
                <img src={logo} alt="" />
                <img className='logoo' src={logoo} alt="" />

            </div>
            <marquee behavior="scroll" direction="right">Breaking News: ভর্তি চলছে ৫ শতাংশ মূল্যছাড়ে... (Discount 5%)..  </marquee>

            {/* <div className='bg'>
                <img src={bg} alt="" />
            </div> */}

        </div>
    );
};

export default Header;