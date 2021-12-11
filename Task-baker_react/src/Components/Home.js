// @ts-check
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

function Home(){
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

      <h1 className="logo"><a href="index.html">Baker</a></h1>
      {/* <!-- Uncomment below if you prefer to use an image logo --> */}
      {/* <a href="index.html" class="logo"><img src="assets/img/logo.png" alt="" class="img-fluid"/></a> */}

      <nav id="navbar" className="navbar">
        <ul>
          <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
          <li><a className="nav-link scrollto" href="#about">About</a></li>
          <li><a className="nav-link scrollto" href="#services">Services</a></li>
          <li><a className="nav-link scrollto " href="#portfolio">Portfolio</a></li>
          <li><a className="nav-link scrollto" href="#team">Team</a></li>
          <li><a className="nav-link scrollto" href="#pricing">Pricing</a></li>
          <li className="dropdown"><a href="#"><span>Drop Down</span> <i className="bi bi-chevron-down"></i></a>
            <ul>
              <li><a href="#">Drop Down 1</a></li>
              <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></a>
                <ul>
                  <li><a href="#">Deep Drop Down 1</a></li>
                  <li><a href="#">Deep Drop Down 2</a></li>
                  <li><a href="#">Deep Drop Down 3</a></li>
                  <li><a href="#">Deep Drop Down 4</a></li>
                  <li><a href="#">Deep Drop Down 5</a></li>
                </ul>
              </li>
              <li><a href="#">Drop Down 2</a></li>
              <li><a href="#">Drop Down 3</a></li>
              <li><a href="#">Drop Down 4</a></li>
            </ul>
          </li>
          <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>

    </div>
  </header>
  {/* <!-- ======= Hero Section ======= --> */}
  <section id="hero" className="d-flex align-items-center justify-content-center">
    <div className="container position-relative">
      <h1>Welcome to Baker</h1>
      <h2>We are team of talented designers making websites with Bootstrap</h2>
      <a href="#about" className="btn-get-started scrollto">Get Started</a>
    </div>
  </section>
  {/* <!-- End Hero --> */}
        </div>
    )
}
export default Home;