import React from 'react'
import"../css/Landing.css"
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
     <nav id="navbar" className="navbar">
        <ul>
          <li><Link className="nav-link scrollto active" to='/'>Home</Link></li>
          <li><a className="nav-link scrollto" href="#about">About</a></li>
          
          <li><a className="nav-link scrollto" href="#team">Team</a></li>
         
          <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
          <li><a className="nav-link scrollto" href="#faq">FAQ</a></li>
          
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>
      {/* <Firstview/> */}
    </div>
  )
}
