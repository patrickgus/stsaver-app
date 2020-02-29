import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./TimerPage.css";

class TimerPage extends Component {
  render() {
    return (
      <div className="TimerPage">
        <header className="TimerPage__header">
          <h1>Timer</h1>
        </header>

        <section className="TimerPage__timer">
          <h3>00:00:00</h3>
          <div className="TimerPage__buttons">
            <button>Start</button>
            <button>Stop</button>
            <button>Reset</button>
          </div>
          <Link to={"/activity"}>Back</Link>
        </section>
      </div>
    );
  }
}

export default TimerPage;
