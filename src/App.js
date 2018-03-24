import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js';
import WorkList from './components/WorkList';
import About from './components/About';

class App extends Component {
  render() {
      return (
          <div className="App">
              <Header/>
              <WorkList/>
              <About/>
          </div>
      );
  }
}

export default App;
