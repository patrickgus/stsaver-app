import React, { Component } from "react";
import { Link } from "react-router-dom";
import LogContext from "../../contexts/LogContext";
import Timer from "../../components/Timer/Timer";
import "./TimerPage.css";

class TimerPage extends Component {
  static contextType = LogContext;

  render() {
    const { userId } = this.context;
    return (
      <div className="TimerPage">
        <header className="TimerPage__header">
          <h1>Timer</h1>
        </header>
        <Timer defaultBreakLength={5} defaultSessionLength={20} />
        <Link to={`/activity/${userId}`}>Back</Link>
      </div>
    );
  }
}

export default TimerPage;
