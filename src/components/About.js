import React from 'react'
import '../style/about.css'
// import logo from '../images/cybersur.png'
import a1 from '../images/cyber.jpg'
import a2 from '../images/images.jpg'
import '../style/style.css'
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function About() {
  return (
    <>
    <Navbar />
       <div className="main about">
	<h1><span>A</span></h1>
	<h1><span>B</span></h1>
	<h1><span>O</span></h1>
	<h1><span>U</span></h1>
	<h1><span>T</span></h1>
	<h1><span className="letter"></span></h1>
	<h1><span>U</span></h1>
	<h1><span>S</span></h1>
    </div>





 

<div class="how-section1">
                    <div class="row">
                        <div class="col-md-6 how-img">
                            <img src={a1} class="rounded-circle img-fluid" alt=""/>
                        </div>
                        <div class="col-md-6">
                            {/* <h4>Find rewarding projects</h4> */}
                                        <h4 class="subheading">Product Perspective.</h4>
                        <p class="text-muted">Cybersûr is a new self contained project aimed to eliminate the current system where the users need to put their trust in different organizations for guaranteeing their safety, instead they can put that trust into one web-application where different types of security tools are available providing a security standard and also providing an opportunity to learn about cyber security and stay updated on the latest news happening in the cyber security world. 
                        These all features are available and integrated in one application saving time..</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            {/* <h4>Get hired quickly</h4> */}
                                        <h4 class="subheading">Cybersûr is aimed to provide the following functions .</h4>
                                        <p class="text-muted">•	Ability to educate users that don’t have sufficient knowledge about the cyber security world.<br/>
                                         •	Ability to provide latest news so that the users can stay updated about the cyber world.<br/>
                                         •	Enabling users to generate and store strong passwords offline on the system.<br/>
                                         •	Enabling users to block malicious websites on the internet.<br/>
                                         •	Enabling users to check if a website is used for phishing or not<br/>.
                                         •	Enabling the user to check the sentiment of the articles to stop spreading unnecessary hate.
                                        </p>
                        </div>
                        <div class="col-md-6 how-img">
                            <img src={a2} class="rounded-circle img-fluid" alt=""/>
                        </div>
                    </div>
                    {/* <div class="row">
                        <div class="col-md-6 how-img">
                             <img src={logo} class="rounded-circle img-fluid" alt=""/>
                        </div>
                        <div class="col-md-6">
                            <h4>Work efficiently, effectively.</h4>
                                        <h4 class="subheading">With GetLance, you have the freedom and flexibility to control when, where, and how you work. Each project includes an online workspace shared by you and your client, allowing you to:</h4>
                                        <p class="text-muted">Send and receive files. Deliver digital assets in a secure environment.
                                            Share feedback in real time. Use GetLance Messages to communicate via text, chat, or video.
                                            Use our mobile app. Many features can be accessed on your mobile phone when on the go.</p>
                        </div>
                    </div> */}
                    {/* <div class="row">
                        <div class="col-md-6">
                            <h4>Get paid on time</h4>
                                        <h4 class="subheading">All projects include GetLance Payment Protection — helping ensure that you get paid for all work successfully completed through the freelancing website.</h4>
                                        <p class="text-muted">All invoices and payments happen through GetLance. Count on a simple and streamlined process.
                                            Hourly and fixed-price projects. For hourly work, submit timesheets through GetLance. For fixed-price jobs, set milestones and funds are released via GetLance escrow features.
                                            Multiple payment options. Choose a payment method that works best for you, from direct deposit or PayPal to wire transfer and more.</p>
                        </div>
                        <div class="col-md-6 how-img">
                            <img src={logo} class="rounded-circle img-fluid" alt=""/>
                        </div>
                    </div> */}
                </div>
                <Footer />
    </>
  )
}
