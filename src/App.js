import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js';
import WorkList from './components/WorkList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <WorkList/>
      </div>
    );
  }
}

export default App;
