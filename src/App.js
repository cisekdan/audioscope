import React, { Component } from 'react';
import './App.css';
import Nes from './components/Nes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nes
          width={256}
          height={240}
        />
      </div>
    );
  }
}

export default App;
