//@ts-check
import React from 'react';
// import Top from './Top';
// import Header from './Header';
// import MetaTags from 'react-meta-tags';
import './assets/vendor/bootstrap/css/bootstrap.min.css';
import './assets/css/style.css';
import './assets/vendor/bootstrap-icons/bootstrap-icons.css';
import './assets/vendor/boxicons/css/boxicons.min.css';
import './assets/vendor/glightbox/css/glightbox.min.css';
import './assets/img/favicon.png';
import './assets/img/apple-touch-icon.png';
import './assets/vendor/swiper/swiper-bundle.min.css';
import './assets/vendor/glightbox/css/glightbox.min.css';
// import  from './assets/img/about.jpg';
function About(){
    return(
        <div>
             <head>
            
            {/* <MetaTags>
          <meta charset="utf-8"/>
          <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
          </MetaTags> */}
          <title>Baker Bootstrap Template - Index</title>
          {/* <meta content="" name="description">
          <meta content="" name="keywords"> */}
        
          {/* <!-- Favicons --> */}
          <link href="assets/img/favicon.png" rel="icon"></link> &nbsp;
          <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon"></link> &nbsp;
        
          {/* <!-- Google Fonts --> */}
          <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet"></link> &nbsp;
        {/* 
          <!-- Vendor CSS Files --> */}
          <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet"></link> &nbsp;
          <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet"></link> &nbsp;
          <link href="assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet"></link> &nbsp;
          <link href="assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet"></link> &nbsp;
          <link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet"></link> &nbsp;
        
          {/* <!-- Template Main CSS File --> */}
          <link href="assets/css/style.css" rel="stylesheet"></link> &nbsp;
        
        
        </head>
        <header id="header" className="fixed-top header-transparent">
            <div className="container d-flex align-items-center justify-content-between">
        
              {/* <h1 className="logo"><a href="index.html">Baker</a></h1> */}
              {/* <!-- Uncomment below if you prefer to use an image logo --> */}
              {/* <a href="index.html" class="logo"><img src="assets/img/logo.png" alt="" class="img-fluid"/></a> */}
        
              <nav id="navbar" className="navbar">
                
                <i className="bi bi-list mobile-nav-toggle"></i>
              </nav>
        
            </div>
          </header>
<section id="about" className="about">
      <div className="container">

        <div className="row">
          <div className="col-lg-6">
            <img src='./assets/img/about.jpg' className="img-fluid" alt=""/>
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0">
            <h3>Voluptatem dignissimos provident quasi</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
            </p>
            <div className="row">
              <div className="col-md-6">
                <i className="bx bx-receipt"></i>
                <h4>Corporis voluptates sit</h4>
                <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
              </div>
              <div className="col-md-6">
                <i className="bx bx-cube-alt"></i>
                <h4>Ullamco laboris nisi</h4>
                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
    </div>
    )
}
export default About;