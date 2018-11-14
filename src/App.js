import React, { Component } from 'react';
import './App.css';
import Nes from './components/Nes';
import logo from './images/logo.png';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={logo} alt="logo" className="logo" />
        <Nes
          width={512}
          height={480}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
