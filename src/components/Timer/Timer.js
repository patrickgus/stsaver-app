import React from "react";
import "./Timer.css";

function Timer() {
  return (
    <section className="Timer">
      <h3>00:00:00</h3>
      <div className="Timer__buttons">
        <button>Start</button>
        <button>Stop</button>
        <button>Reset</button>
      </div>
    </section>
  );
}

export default Timer;
