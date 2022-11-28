import React from 'react'
import '../style/style.css'
import Navbar from "./Navbar";
import Footer from "./Footer";

import {Helmet} from "react-helmet";


  //c3908227b0e3453688d69e73902ab5ac 


  // Initialize the news api parameters

  let apiKey = 'c3908227b0e3453688d69e73902ab5ac'

  // let apiKey = '22acc69e4fmsh39e863fa3f40915p1e180bjsn4ce366d5f22d'
  
  // Grab the news container
  let newsAccordion = document.getElementById('newsAccordion');
  
  // Create an ajax get request
  const xhr = new XMLHttpRequest();
  

  xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`, true);


  // xhr.open('GET', `https://cyber-security-news.p.rapidapi.com/news/latimes&apiKey=${apiKey}`, true);
  




  xhr.onload = function () {
      if (this.status === 200) {
          let json = JSON.parse(this.responseText);
          let articles = json.articles;
          console.log(articles);
          let newsHtml = "";
          articles.forEach(function(element, index) {
              // console.log(element, index)
              let news = `<div class="card">
                              <div class="card-header" id="heading${index}">
                                  <h2 class="mb-0">
                                  <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
                                      aria-expanded="false" aria-controls="collapse${index}">
                                     <b>Breaking News ${index+1}:</b> ${element["title"]}
                                  </button>
                                  </h2>
                              </div>
  
                              <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
                                  <div class="card-body"> ${element["content"]}. <a href="${element['url']}" target="_blank" >Read more here</a>  </div>
                              </div>
                          </div>`;
              newsHtml += news;
          });
          newsAccordion.innerHTML = newsHtml;
      }
      else {
          console.log("Some error occured")
      }
  }
  
  xhr.send()

export default function News() {
  return (
<>

<Navbar />
    <div className=' newsbox'>
 
<div  className="container my-3">
    <h3>Top News <span className="badge badge-secondary NewHead">by Cybersûr</span></h3>
    <hr/>
    <div className="accordion" id="newsAccordion"></div>

  </div>
</div>


{/* //////////////////\\\\\\\\\\\\ */}

<div className="main about">
	<h1><span>E</span></h1>
	<h1><span>D</span></h1>
	<h1><span>U</span></h1>
	<h1><span>C</span></h1>
	<h1><span>A</span></h1>
  <h1><span>T</span></h1>
  <h1><span>I</span></h1>
  <h1><span>O</span></h1>
  <h1><span>N</span></h1>
	<h1><span className="letter"></span></h1>
	<h1><span>S</span></h1>
	<h1><span>E</span></h1>
  <h1><span>C</span></h1>
  <h1><span>T</span></h1>
  <h1><span>I</span></h1>
  <h1><span>O</span></h1>
  <h1><span>N</span></h1>
    </div>
      
      <div id="serve">
            <div className="box">

                {/* <img src={logo1} alt=""/> */}
                <h2 className="secondary">DO'S</h2>
                <p className="para">•	DO use hard-to-guess passwords or passphrases. 
                A password should have a minimum of 10 characters using uppercase letters, 
                lowercase letters, numbers, and special characters.<br/>
                                         •	DO use different passwords for different accounts. 
                                         If one password gets hacked, your other accounts are not compromised.<br/>
                                         •	DO keep your passwords or passphrases confidential.<br/>
                                         </p>
                    {/* <button type="button" className="btn-hover color-2 downloadBtn1 " onClick={saveFile1}>Download</button> */}
            </div>
           
            <div className="box">
                {/* <img src={logo2} alt=""/> */}
                <h2 className="secondary">DO'S</h2>
                <p className="para">•	DO lock your computer and mobile phone when not in use. This protects data from unauthorized access and use.<br/>
                                         •	DO remember that wireless is inherently insecure. Avoid using public Wi-Fi hotspots. When you must, 
                                         use agency provided virtual private network software to protect the data and the device.<br/>
                                         •	DO report all suspicious activity and cyber incidents to your manager and ISO/designated security representative. 
                                         Challenge strangers whom you may encounter in the office.  </p>
                    {/* <button type="button" className="btn-hover color-2 downloadBtn2" onClick={saveFile2}>Download</button> */}
            </div>
            <div className="box">
                {/* <img src={logo3} alt=""/> */}
                <h2 className="secondary">DO'S</h2>
                <p className="para">•	DO pay attention to phishing traps in email and watch for telltale signs of a scam. 
                DON’T open mail or attachments from an untrusted source. <br/>
                                         •	DO destroy information properly when it is no longer needed. Place paper in designated 
                                         confidential destruction bins throughout the office or use a crosscut shredder. <br/>
                                         •	DO be aware of your surroundings when printing, copying, faxing or discussing sensitive information. 
                                         Pick up information from printers, copiers, or faxes in a timely manner.<br/>
                                         </p>
                    {/* <button type="button" className="btn-hover color-2 downloadBtn3" onClick={saveFile3}>Download</button> */}
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
            <div className="box">

                {/* <img src={logo1} alt=""/> */}
                <h2 className="secondary">DON'T</h2>
                <p className="para">•	DON’T be tricked into giving away confidential information. 
                It’s easy for an unauthorized person to call and pretend to be an employee or business partner. <br/>
                                         •	DON’T install unauthorized programs on your work computer. Malicious applications often pose as legitimate software.<br/>
                                         •	DON’T leave devices unattended. Keep all mobile devices, such as laptops and cell phones physically secured. If a device is lost or stolen, report it immediately to your manager and ISO/designated security representative.DON’T leave devices unattended. Keep all mobile devices, such as laptops and cell phones physically secured. If a device is lost or stolen, 
                                         report .</p>
                    {/* <button type="button" className="btn-hover color-2 downloadBtn1 " onClick={saveFile1}>Download</button> */}
            </div>
           
            <div className="box">
                {/* <img src={logo2} alt=""/> */}
                <h2 className="secondary">DON'T</h2>
                <p className="para">•	DON’T leave sensitive information lying around the office. DON’T leave printouts 
                or portable media containing private information on your desk. <br/>
                                         •	DON’T post any private or sensitive information, such as credit card numbers, passwords or other private information, on public sites, 
                                         including social media sites, and DON’T send it through email unless authorized to do so.<br/>
                                         •	DON’T click on links from an unknown or untrusted source. Cyber attackers often use them to trick you 
                                         into visiting malicious sites and downloading malware that can be used to steal data and damage networks.</p>
                    {/* <button type="button" className="btn-hover color-2 downloadBtn2" onClick={saveFile2}>Download</button> */}
            </div>
            <div className="box">
                {/* <img src={logo3} alt=""/> */}
                <h2 className="secondary">DON'T</h2>
                <p className="para">•	DON’T leave wireless or Bluetooth turned on when not in use. Only do so when planning to use and only in a safe environment.<br/>
                                         •	DON’T respond to phone calls or emails requesting confidential data.<br/>
                                         •	DON’T send it through email unless authorized to do so. DO use privacy settings on social media sites to restrict access to your personal information.v</p>
                    {/* <button type="button" className="btn-hover color-2 downloadBtn3" onClick={saveFile3}>Download</button> */}
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


<Helmet>
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
    integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
    crossorigin="anonymous" type="text/javascript"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
    integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
    crossorigin="anonymous" type="text/javascript"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
    integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
    crossorigin="anonymous" type="text/javascript"></script>
</Helmet> 

<Footer />
    </>
  )
}


