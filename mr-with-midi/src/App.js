import React, { Component } from 'react';
import './App.css';
import HeaderNavButton from './button/button.js';

class App extends Component {
  render() {
    return (
      <div className="App">
          <HeaderNavButton/>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
      </div>
    );
  }
}

export default App;
