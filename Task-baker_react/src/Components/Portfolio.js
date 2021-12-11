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

function Portfolio(){
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
          <section id="portfolio" className="portfolio">
      <div className="container">

        <div className="section-title">
          <h2>Portfolio</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li data-filter="*" className="filter-active">All</li>
              <li data-filter=".filter-app">App</li>
              <li data-filter=".filter-card">Card</li>
              <li data-filter=".filter-web">Web</li>
            </ul>
          </div>
        </div>

        <div className="row portfolio-container">

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <img src="assets/img/portfolio/portfolio-1.jpg" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>App 1</h4>
              <p>App</p>
              <a href="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="App 1"><i className="bx bx-plus"></i></a>
              <a href="portfolio-details.html" data-gallery="portfolioDetailsGallery" data-glightbox="type: external" className="portfolio-details-lightbox details-link" title="Portfolio Details"><i className="bx bx-link"></i></a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <img src="assets/img/portfolio/portfolio-2.jpg" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>Web 3</h4>
              <p>Web</p>
              <a href="assets/img/portfolio/portfolio-2.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Web 3"><i className="bx bx-plus"></i></a>
              <a href="portfolio-details.html" data-gallery="portfolioDetailsGallery" data-glightbox="type: external" className="portfolio-details-lightbox details-link" title="Portfolio Details"><i className="bx bx-link"></i></a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <img src="assets/img/portfolio/portfolio-3.jpg" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>App 2</h4>
              <p>App</p>
              <a href="assets/img/portfolio/portfolio-3.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="App 2"><i className="bx bx-plus"></i></a>
              <a href="portfolio-details.html" data-gallery="portfolioDetailsGallery" data-glightbox="type: external" className="portfolio-details-lightbox details-link" title="Portfolio Details"><i className="bx bx-link"></i></a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <img src="assets/img/portfolio/portfolio-4.jpg" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>Card 2</h4>
              <p>Card</p>
              <a href="assets/img/portfolio/portfolio-4.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Card 2"><i className="bx bx-plus"></i></a>
              <a href="portfolio-details.html" data-gallery="portfolioDetailsGallery" data-glightbox="type: external" className="portfolio-details-lightbox details-link" title="Portfolio Details"><i className="bx bx-link"></i></a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <img src="assets/img/portfolio/portfolio-5.jpg" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>Web 2</h4>
              <p>Web</p>
              <a href="assets/img/portfolio/portfolio-5.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Web 2"><i className="bx bx-plus"></i></a>
              <a href="portfolio-details.html" data-gallery="portfolioDetailsGallery" data-glightbox="type: external" className="portfolio-details-lightbox details-link" title="Portfolio Details"><i className="bx bx-link"></i></a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <img src="assets/img/portfolio/portfolio-6.jpg" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>App 3</h4>
              <p>App</p>
              <a href="assets/img/portfolio/portfolio-6.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="App 3"><i className="bx bx-plus"></i></a>
              <a href="portfolio-details.html" data-gallery="portfolioDetailsGallery" data-glightbox="type: external" className="portfolio-details-lightbox details-link" title="Portfolio Details"><i className="bx bx-link"></i></a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <img src="assets/img/portfolio/portfolio-7.jpg" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>Card 1</h4>
              <p>Card</p>
              <a href="assets/img/portfolio/portfolio-7.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Card 1"><i className="bx bx-plus"></i></a>
              <a href="portfolio-details.html" data-gallery="portfolioDetailsGallery" data-glightbox="type: external" className="portfolio-details-lightbox details-link" title="Portfolio Details"><i className="bx bx-link"></i></a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <img src="assets/img/portfolio/portfolio-8.jpg" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>Card 3</h4>
              <p>Card</p>
              <a href="assets/img/portfolio/portfolio-8.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Card 3"><i className="bx bx-plus"></i></a>
              <a href="portfolio-details.html" data-gallery="portfolioDetailsGallery" data-glightbox="type: external" className="portfolio-details-lightbox details-link" title="Portfolio Details"><i className="bx bx-link"></i></a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <img src="assets/img/portfolio/portfolio-9.jpg" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>Web 3</h4>
              <p>Web</p>
              <a href="assets/img/portfolio/portfolio-9.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Web 3"><i className="bx bx-plus"></i></a>
              <a href="portfolio-details.html" data-gallery="portfolioDetailsGallery" data-glightbox="type: external" className="portfolio-details-lightbox details-link" title="Portfolio Details"><i className="bx bx-link"></i></a>
            </div>
          </div>

        </div>

      </div>
    </section>
    </div>
    )
}
export default Portfolio;