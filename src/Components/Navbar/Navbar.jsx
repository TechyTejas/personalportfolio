import React from 'react'
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
          {/* //need to add the logo */}
       <img src="logo" alt="" />
       <ul className='nav-menu'>
        <li>Home</li>
        <li>About me</li>
        <li>Services</li>
        <li>Portfolio</li>
        <li>Contact</li>
       </ul>
       <div className="nav-connect">Connect With Me</div>
    </div>
  )
}

export default Navbar