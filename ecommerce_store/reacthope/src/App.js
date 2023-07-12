import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import MasterLayout from './layouts/admin/MasterLayout';
import Home from './components/fontend/Home';
import Register from './components/fontend/auth/Register';
import Login from './components/fontend/auth/Login';
import axios from 'axios';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import AdminPrivateRoute from './AdminPrivateRoute';

axios.defaults.baseURL = "http://localhost:8000/";
axios.defaults.headers.post['Content-Type']='application/json';
axios.defaults.headers.post['Accept']='application/json';

axios.defaults.withCredentials = true;
axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem('auth_token');
  config.headers.Authorization =  token ? `Bearer ${token}` : '';
  return config;
});

function App() {
  return (
    <div className="App">
       <Router>
        <Switch>
        <Route exact path="/" component={Home}/>
        {/* <Route path="/register" component={Register}/> */}
        <Route path="/login">
          {localStorage.getItem('auth_token') ? <Redirect to="/admin" /> : <Login />  }
        </Route>

        <Route path ="/register">
          {localStorage.getItem('auth_token') ? <Redirect to="/admin" /> : <Register />  }
        </Route>


        {/* <Route path="/admin" name="Admin" render={(props) => <MasterLayout {...props} /> } /> */}
        <AdminPrivateRoute path="/admin" name="Admin"/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
