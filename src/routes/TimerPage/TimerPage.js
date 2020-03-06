import React, { Component } from "react";
import Timer from "../../components/Timer/Timer";
import "./TimerPage.css";

class TimerPage extends Component {
  render() {
    return (
      <div className="TimerPage">
        <header className="TimerPage__header">
          <h1>Timer</h1>
        </header>
        <Timer />
      </div>
    );
  }
}

export default TimerPage;
