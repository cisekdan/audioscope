import React, { Component } from 'react';
import './App.css';
import Nes from './components/Nes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nes
          width={512}
          height={480}
        />
      </div>
    );
  }
}

export default App;
