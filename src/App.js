import React, { Component } from 'react';
import Timer from './Timer.js';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="main">
        <h1> POMODORO POG </h1>
		<Timer />

      </div>
    );
  }
}

export default App;
