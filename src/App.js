import React from "react";
// import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import About from "./components/About";
import Services from "./components/Services";
import News from "./components/News";


// import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    // <div className="app">
    //   <Navbar />

    //   <Banner />
    //   <About />
    //   <Services />

    //   <News />
    //   <Footer />
    // </div>

    <BrowserRouter>
    
      <Routes>
        <Route path='/' element={<Banner/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/news' element={<News/>}/>
      </Routes>
      

      {/* <Banner /> */}
      {/* <About /> */}
      {/* <Services /> */}

      {/* <News /> */}
      {/* <Footer /> */}
    </BrowserRouter>
  );
}
