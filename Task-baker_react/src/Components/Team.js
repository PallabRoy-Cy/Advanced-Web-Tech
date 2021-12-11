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

function Team(){
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
          <section id="team" className="team section-bg">
      <div className="container">

        <div className="section-title">
          <h2>Team</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div className="row">

          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="member">
              <div className="member-img">
                <img src="assets/img/team/team-1.jpg" className="img-fluid" alt=""/>
                <div className="social">
                  <a href=""><i className="bi bi-twitter"></i></a>
                  <a href=""><i className="bi bi-facebook"></i></a>
                  <a href=""><i className="bi bi-instagram"></i></a>
                  <a href=""><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
              <div className="member-info">
                <h4>Walter White</h4>
                <span>Chief Executive Officer</span>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="member">
              <div className="member-img">
                <img src="assets/img/team/team-2.jpg" className="img-fluid" alt=""/>
                <div className="social">
                  <a href=""><i className="bi bi-twitter"></i></a>
                  <a href=""><i className="bi bi-facebook"></i></a>
                  <a href=""><i className="bi bi-instagram"></i></a>
                  <a href=""><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
              <div className="member-info">
                <h4>Sarah Jhonson</h4>
                <span>Product Manager</span>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="member">
              <div className="member-img">
                <img src="assets/img/team/team-3.jpg" className="img-fluid" alt=""/>
                <div className="social">
                  <a href=""><i className="bi bi-twitter"></i></a>
                  <a href=""><i className="bi bi-facebook"></i></a>
                  <a href=""><i className="bi bi-instagram"></i></a>
                  <a href=""><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
              <div className="member-info">
                <h4>William Anderson</h4>
                <span>CTO</span>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="member">
              <div className="member-img">
                <img src="assets/img/team/team-4.jpg" className="img-fluid" alt=""/>
                <div className="social">
                  <a href=""><i className="bi bi-twitter"></i></a>
                  <a href=""><i className="bi bi-facebook"></i></a>
                  <a href=""><i className="bi bi-instagram"></i></a>
                  <a href=""><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
              <div className="member-info">
                <h4>Amanda Jepson</h4>
                <span>Accountant</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
    </div>
    )
}
export default Team;