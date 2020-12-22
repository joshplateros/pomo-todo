import React, { Component } from 'react';
import Timer from './Timer';
import TimerController from './TimerController';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="main">
        <h1> POMODORO POG </h1>
        <Timer />
        <TimerController />
      </div>
    );
  }
}

export default App;
