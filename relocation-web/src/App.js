import React from 'react';
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import { ToastContainer } from 'react-toastify';

import Leads from './pages/Leads';
import NotFound from './components/not-found';

library.add(faUser);

const App = () => {

  return (
    <Router>
      <ToastContainer />
      <div className="cont">
        <div className="content">
          <Switch>
            <Route exact path="/" component={Leads} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
