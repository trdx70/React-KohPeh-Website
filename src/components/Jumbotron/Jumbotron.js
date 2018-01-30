import React, { Component } from "react";

import Cards from '../Cards/card';
import "./Jumbotron.css";


class Jumbotron extends Component {
  render() {
    return (
      
       <div className="jumboBody"> 
        <div className="jumbotron jumbotron-fluid" id="jumbo">
          <div className="container">
            <div id="jumboText">
              <h1 className="h1">Hello, Koh-peh!</h1>
              <p className="h3 text-warning">
                No one knows exactly how or when coffee was discovered, though
                there are many legends about its origin.
              </p>
            </div>
          </div>
        </div>
       <Cards />
        </div> 
     
    );
  }
}

export default Jumbotron;
