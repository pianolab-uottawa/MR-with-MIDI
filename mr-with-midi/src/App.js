import React, { Component } from 'react';
import './App.css';
import Header from './header/header.js';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isShow: true,
        };
    }
  render() {
    return (
      <div className="App">

          {this.state.isShow ? <Header /> : null}
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
      </div>
    );
  }
}

export default App;
