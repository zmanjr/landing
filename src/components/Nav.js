import React from 'react'
import logo from '../images/logo.png'
import './css/Nav.css'
import { HiMenu } from "react-icons/hi";
import { HiOutlineX } from "react-icons/hi";
import {useState } from 'react';



 
 
function Nav() {
    const [showLinks , setShowLinks] = useState(false);

    const handleShowLinks = () => {
        setShowLinks(!showLinks);
    }
    const menu_icon = showLinks ? <HiOutlineX className='nav_btn' onClick={handleShowLinks}/> : <HiMenu  className='nav_btn' onClick={handleShowLinks}/>;
  return (
    
        <nav className={`nav ${showLinks? 'show_nav' : null}`}>
            <div className='nav_logo'>
               <img src={logo} alt="logo" />
            </div>
            <div className='nav_items'>
                <p  className='nav_item' onClick={handleShowLinks} >
                    <a className="nav_item_link  vr"  href="#vr" >VR/RA</a>
                </p>
                <p className='nav_item' onClick={handleShowLinks}>
                    <a href="#napp" className="nav_item_link napp" >Notre approche</a>
                </p>
                <p className='nav_item' onClick={handleShowLinks}>
                    <a href="#nag" className="nav_item_link nag" >Notre agence</a>
                </p>
                <p className='nav_item' onClick={handleShowLinks}>
                    <a href="#noss" className="nav_item_link noss" >Nos solutions</a>
                </p>
                <p className='nav_item' onClick={handleShowLinks}>
                    <a href="#contact" className="nav_item_link contact"  >Contact</a>
                </p>
            </div>
            {menu_icon}
            
        </nav>
    
    
  )
}

export default Nav