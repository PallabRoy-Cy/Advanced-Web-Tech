import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './Components/Home';
import Top from './Components/Top';
import Footer from './Components/Footer';
import Profile from './Components/Profile';

import PDetails from './Components/PDetails';
import {BrowserRouter as Br, Route,Switch} from "react-router-dom";
ReactDOM.render(
  <React.StrictMode>
    <Br>
    <Top/>
    <Switch>
      <Route exact path="/">
      <Home/>
      </Route>
      <Route exact path="/profile">
        <Profile/>
      </Route>
      <Route exact path="/students/:id/:name/:cgpa">
        <PDetails/>
      </Route>
    </Switch>
    <Footer/>
    </Br>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
