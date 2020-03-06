import React from "react";
import { Link } from "react-router-dom";

function Timer() {
  return (
    <section className="TimerPage__timer">
      <h3>00:00:00</h3>
      <div className="TimerPage__buttons">
        <button>Start</button>
        <button>Stop</button>
        <button>Reset</button>
      </div>
      <Link to={"/activity"}>Back</Link>
    </section>
  );
}

export default Timer;
