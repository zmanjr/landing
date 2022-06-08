import React from 'react'
import './css/Header.css'

function Header() {
  return (
    
    <header className='banner'>
      <div className='banner_title'>
         <p className='banner_title_p1'>L’agence de marketing évènementiel<br /> au service de votre marque dans</p>
         <p className='banner_title_p2'>la mode, la beauté et le luxe</p>
      </div>
      <div className='banner_subtitle'>
          <p className='banner_subtitle_p1'>Une Capsul + des innovations hi-tech<br />le cocktail parfait pour (re)faire parler de vous !</p>
      </div>
    </header>
    
  )
}

export default Header