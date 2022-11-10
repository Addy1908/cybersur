import React from 'react'
// import logo from '../images/cybersur.png'
import logo1 from '../images/logo1.png'
import logo2 from '../images/logo2.png'
import logo3 from '../images/logo3.png'
import logo4 from '../images/logo4.PNG'
// import '../style/about.css'
// import bg from '../images/images.jpg'
import '../style/style.css'
import Navbar from "./Navbar"
import Footer from "./Footer";
import { saveAs } from "file-saver";


 


export default function Services() {


    const saveFile1 = (e) => {
        e.preventDefault();
        saveAs(
          "https://drive.google.com/drive/folders/1LN3XSUPPM6s9OZmb_3KIXb0soNlDzWMI?usp=share_link",
          "Ad-Blocker"
        );
      };

      const saveFile2 = (e) => {
        e.preventDefault();
        saveAs(
          "https://drive.google.com/drive/folders/1txkWC6QqSl8WdrCA11GbFQRE2CYVO430?usp=share_link",
          "Cookie Cleaner"
        );
      };

      const saveFile3 = (e) => {
        e.preventDefault();
        saveAs(
          "https://drive.google.com/drive/folders/14v7WsqpwQS1wpUvlTS6_jsXMm2aPEFN4?usp=share_link",
          "Sentiment Analyzer"
        );
      };

      const saveFile4 = (e) => {
        e.preventDefault();
        saveAs(
          "https://drive.google.com/drive/folders/1LN3XSUPPM6s9OZmb_3KIXb0soNlDzWMI?usp=share_link",
          "Antivirus"
        );
      };

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

                <img src={logo1} alt=""/>
                <h2 className="secondary">Ad-Blocker</h2>
                <p className="para"><b>Ad-blockers</b> are software specifically developed to remove advertisements from the sites you visit; 
                they're easy to install, available as browser extensions, 
                and are compatible with just about every device and platform.</p>
                    <button type="button" className="btn-hover color-2 downloadBtn1 " onClick={saveFile1}>Download</button>
            </div>
           
            <div className="box">
                <img src={logo2} alt=""/>
                <h2 className="secondary">Cookie Cleaner</h2>
                <p className="para"><b>Cookie Cleaner</b> is a software which is used to clear your browser stored cookies for a specified period. You can define a custom period on the options page.
                 Also, you can define the area (zone) in which you want the data to be cleared.</p>
                    <button type="button" className="btn-hover color-2 downloadBtn2" onClick={saveFile2}>Download</button>
            </div>
            <div className="box">
                <img src={logo3} alt=""/>
                <h2 className="secondary">Sentiment Analyzer</h2>
                <p className="para"><b>Sentiment analysis</b> tool is AI software that automatically analyzes text data 
                to help you quickly understand how customers feel about your brand, product or service.</p>
                    <button type="button" className="btn-hover color-2 downloadBtn3" onClick={saveFile3}>Download</button>
            </div>

             {/* <div className="box">
                <img src={logo4} alt=""/>
                <h2 className="secondary">Antivirus</h2>
                <p className="para"><b>Antivirus</b> is a software used to prevent, scan, 
                detect and delete viruses from a computer. Once installed, 
                most antivirus software runs automatically in the background to provide real-time protection against virus attacks.</p>
                    <button type="button" className="btn-hover color-2 " onClick={saveFile4}>Download</button>
            </div>  */}
        </div>


        <div id="serve">
            {/* <div className="box">

                <img src={logo1} alt=""/>
                <h2 className="secondary">Ad-Blocker</h2>
                <p className="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus facilis
                    excepturi neque, dolorem quis ducimus, at commodi delectus reprehenderit doloremque sit deleniti
                    quibusdam, natus .</p>
                    <button type="button" className="btn-hover color-6 my-2 mx-2" onClick={saveFile1}>Download</button>
            </div> */}
           
            <div className="box">
                <img src={logo4} alt=""/>
                <h2 className="secondary">Antivirus</h2>
                <p className="para"><b>Antivirus</b> is a software used to prevent, scan, 
                detect and delete viruses from a computer. Once installed, 
                most antivirus software runs automatically in the background to provide real-time protection against virus attacks.</p>
                    <button type="button" className="btn-hover color-2 downloadBtn4" onClick={saveFile4}>Download</button>
            </div>
            <div className="box">
                <img src={logo4} alt=""/>
                <h2 className="secondary">Sentiment Analyzer</h2>
                <p className="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus facilis
                    excepturi neque, dolorem quis ducimus, at commodi delectus reprehenderit doloremque sit deleniti
                    quibusdam, natus .</p>
                    <button type="button" className="btn-hover color-2 downloadBtn5" onClick={saveFile4}>Download</button>
            </div>

             {/* <div className="box">
                <img src={logo} alt=""/>
                <h2 className="secondary">Antivirus</h2>
                <p className="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus facilis
                    excepturi neque, dolorem quis ducimus, at commodi delectus reprehenderit doloremque sit deleniti
                    quibusdam, natus .</p>
                    <button type="button" className="btn-hover color-6 my-2 mx-2" onClick={saveFile4}>Download</button>
            </div>  */}
        </div>
    </section>  
    <Footer />
    </>
  )
}
