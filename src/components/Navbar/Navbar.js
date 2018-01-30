import React, { Component } from "react";
import { Link } from 'react-router-dom';

import './Navbar.css';
import logo from '../../assets/images/imagesLogo.png';

class Navbar extends Component {
  render() {
    return (
      <div>
          <nav className="navbar bg-dark navbar-dark navbar-expand-sm">
        <div className="container">
            <Link className="navbar-brand" to="/">
              <img src={logo} className="img-thumbnail" alt="Koh-Peh logo"/>
              <span className="display-3 ml-2">Koh-peh</span>     
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/products">
                    Varieties
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/process" className="nav-link" >
                    Processing
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact" className="nav-link" >
                    Contact us
                  </Link>
                </li>
              </ul>
            </div>
        </div>
          </nav>
      </div>
    );
  }
}

export default Navbar;