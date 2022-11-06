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


