import React, { Component } from 'react';
import './App.css';
import Header from './header/header.js';
import Body from "./body/body";

class App extends Component {
    constructor(props) {
        super(props);

    }
  render() {
    return (
      <div className="App">

          <Header />
          <Body />

      </div>
    );
  }
}

export default App;
//https://electronjs.org/docs/tutorial/application-packaging#adding-unpacked-files-in-asar-archive