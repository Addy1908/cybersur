import React from 'react'
// import logo from '../images/cybersur.png'
// import '../style/about.css'
// import bg from '../images/images.jpg'
import '../style/style.css'
import Navbar from "./Navbar";
import Footer from "./Footer";

import '../style/style.css'

export default function Banner() {
  return (
    <>
    <Navbar />
   
    <section id="home" >
    <div className="sign">
      <span className="fast-flicker">C</span>y<span className="fast-flicker">b</span>ers<span className="flicker">û</span>r
    </div>
       
    </section>


    <Footer />
    </>
  )
}
