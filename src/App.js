import React, { Component } from 'react';
import './App.css';
import Nes from './components/Nes';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Nes
          width={512}
          height={480}
        />
      </div>
    );
  }
}

export default App;
