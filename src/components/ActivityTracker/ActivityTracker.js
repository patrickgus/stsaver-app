import React from "react";
import ActivityChart from "../../images/Activity-chart-demo.PNG";
import "./ActivityTracker.css";

function ActivityTracker() {
  return (
    <div className="ActivityTracker">
      <h2>Activity Tracker</h2>
      <div className="ActivityTracker__chart">
        <img src={ActivityChart} alt="placeholder for activity tracker chart" />
      </div>
      <dl className="ActivityTracker__stats">
        <dt>Total Hours:</dt>
        <dd>120</dd>
        <dt>This week:</dt>
        <dd>12</dd>
        <dt>Weekly goal:</dt>
        <dd>50</dd>
      </dl>
    </div>
  );
}

export default ActivityTracker;
