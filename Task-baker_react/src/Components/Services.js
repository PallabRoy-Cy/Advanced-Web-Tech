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

function Services(){
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
<section id="services" className="services">
      <div className="container">

        <div className="section-title">
          <h2>Services</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div className="row">

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
            <div className="icon-box iconbox-blue">
              <div className="icon">
                <i className="bx bxl-dribbble"></i>
              </div>
              <h4><a href="">Lorem Ipsum</a></h4>
              <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
            <div className="icon-box iconbox-orange ">
              <div className="icon">
                <i className="bx bx-file"></i>
              </div>
              <h4><a href="">Sed Perspiciatis</a></h4>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0" data-aos="zoom-in" data-aos-delay="300">
            <div className="icon-box iconbox-pink">
              <div className="icon">
                <i className="bx bx-tachometer"></i>
              </div>
              <h4><a href="">Magni Dolores</a></h4>
              <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="100">
            <div className="icon-box iconbox-yellow">
              <div className="icon">
                <i className="bx bx-layer"></i>
              </div>
              <h4><a href="">Nemo Enim</a></h4>
              <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="200">
            <div className="icon-box iconbox-red">
              <div className="icon">
                <i className="bx bx-slideshow"></i>
              </div>
              <h4><a href="">Dele Cardo</a></h4>
              <p>Quis consequatur saepe eligendi voluptatem consequatur dolor consequuntur</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="300">
            <div className="icon-box iconbox-teal">
              <div className="icon">
                <i className="bx bx-arch"></i>
              </div>
              <h4><a href="">Divera Don</a></h4>
              <p>Modi nostrum vel laborum. Porro fugit error sit minus sapiente sit aspernatur</p>
            </div>
          </div>

        </div>

      </div>
    </section>
    </div>
    )
}
export default Services;