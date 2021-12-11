import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services';
import Portfolio from './Components/Portfolio';
import Team from './Components/Team';
import Pricing from './Components/Pricing';
import Contect from './Components/Contect';
ReactDOM.render(
  <React.StrictMode>
    <Home/>
    <About/>
    <Services/>
    <Portfolio/>
    <Team/>
    <Pricing/>
    <Contect/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
