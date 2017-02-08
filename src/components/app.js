import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Home from './home/Home';

export default class App extends Component {
  render() {
    return (<div>
      <Header />
      <Home />
      <Footer />
      </div>
    );
  }
}
