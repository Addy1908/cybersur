import React from 'react'
import logo from '../images/cybersur.png'
// import '../style/about.css'
// import bg from '../images/images.jpg'
import '../style/style.css'
import Navbar from "./Navbar"
import Footer from "./Footer";
export default function Services() {
  return (
    <>
    <Navbar/>
    <section className="services ">
    <div className="main about">
	<h1><span>C</span></h1>
	<h1><span>Y</span></h1>
	<h1><span>B</span></h1>
	<h1><span>E</span></h1>
	<h1><span>R</span></h1>
	<h1><span className="letter"></span></h1>
	<h1><span>T</span></h1>
	<h1><span>O</span></h1>
    <h1><span>O</span></h1>
    <h1><span>L</span></h1>
    <h1><span>S</span></h1>
    </div>
        <div id="serve">
            <div className="box">

                <img src={logo} alt=""/>
                <h2 className="secondary">Tool 1</h2>
                <p className="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus facilis
                    excepturi neque, dolorem quis ducimus, at commodi delectus reprehenderit doloremque sit deleniti
                    quibusdam, natus .</p>
            </div>
            {/* <div className="box">
                <img src={logo} alt=""/>
                <h2 className="secondary">Sweets Ordering</h2>
                <p className="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus facilis
                    excepturi neque, dolorem quis ducimus, at commodi delectus reprehenderit doloremque sit deleniti
                    quibusdam, natus .</p>
            </div> */}
            <div className="box">
                <img src={logo} alt=""/>
                <h2 className="secondary">Tool 2</h2>
                <p className="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus facilis
                    excepturi neque, dolorem quis ducimus, at commodi delectus reprehenderit doloremque sit deleniti
                    quibusdam, natus .</p>
            </div>
            <div className="box">
                <img src={logo} alt=""/>
                <h2 className="secondary">Tool 3</h2>
                <p className="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus facilis
                    excepturi neque, dolorem quis ducimus, at commodi delectus reprehenderit doloremque sit deleniti
                    quibusdam, natus .</p>
            </div>

             <div className="box">
                <img src={logo} alt=""/>
                <h2 className="secondary">Tool 4</h2>
                <p className="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus facilis
                    excepturi neque, dolorem quis ducimus, at commodi delectus reprehenderit doloremque sit deleniti
                    quibusdam, natus .</p>
            </div> 
        </div>
    </section>  
    <Footer />
    </>
  )
}
