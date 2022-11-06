import React from 'react'
import logo from '../images/cybersur.png'
import '../style/style.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
    <nav id="navbar">
        <div id="logo">
            <img src={logo}alt=""/>
        </div>
        <ul>
            <Link to="/"><li className="list"><a href=' #'> Home</a></li></Link>
            <Link to="/About"><li className="list"><a href=' #'>About us</a></li></Link>
            <Link to="/Services"><li className="list"><a href=' #'> Services</a> </li></Link>
            <Link to="/News"><li className="list"><a href=' #'> News</a></li></Link>
            
        </ul>
    </nav>

   
    </>
  )
}
