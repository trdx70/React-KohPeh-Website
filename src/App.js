import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';
import Home from './containers/Home/Home';
import Products from './components/Products/Products';
import Process from './components/Processing/Process';
import Contact from './components/Contact/contact';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
            <Route path="/" exact component={Home} />
            <Route path="/products" component={Products} />
            <Route path="/process" component={Process} />
            <Route path="/contact" component={Contact} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
