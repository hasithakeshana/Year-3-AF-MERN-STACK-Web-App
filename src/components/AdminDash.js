import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import managerForm from './managerSignup';
import addCatergory from './addCategory';

import 'bootstrap/dist/css/bootstrap.min.css';

export default class AdminDash extends React.Component{


    render() {
        return(

            
            
            <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="https://codingthesmartway.com" target="_blank">
              
            </a>
            <div className="navbar-brand">Admin Panel</div>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/addManager" className="nav-link">Add Manager</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/addCatergory" className="nav-link">Add Catergory</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br/>
          <Route path="/addManager" component={managerForm} />
          <Route path="/addCatergory" component={addCatergory} />
        </div>
      </Router>
           
      
            
        )
    }
}