import React from 'react'
import logo from '../images/logo.png'
import './css/Nav.css'
import { HiMenu } from "react-icons/hi";
import { HiOutlineX } from "react-icons/hi";
import {useState } from 'react';


const handleActive = (e) => {
    let links = document.getElementsByClassName('nav_item_link');
    for(let i= 0 ; i < links.length ; i++){
        if(links[i].classList.contains('active')){
            links[i].classList.remove('active');
        }
    }
    e.target.classList.add('active');
 }
 
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
                    <a className="nav_item_link" href="#" onClick={handleActive}>VR/RA</a>
                </p>
                <p className='nav_item' onClick={handleShowLinks}>
                    <a href="#" className="nav_item_link" onClick={handleActive}>Notre approche</a>
                </p>
                <p className='nav_item' onClick={handleShowLinks}>
                    <a href="#" className="nav_item_link" onClick={handleActive}>Notre agence</a>
                </p>
                <p className='nav_item' onClick={handleShowLinks}>
                    <a href="#" className="nav_item_link" onClick={handleActive}>Nos solutions</a>
                </p>
                <p className='nav_item' onClick={handleShowLinks}>
                    <a href="#" className="nav_item_link" onClick={handleActive}>Contact</a>
                </p>
            </div>
            {menu_icon}
        </nav>
    
  )
}

export default Nav