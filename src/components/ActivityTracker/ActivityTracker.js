import React from "react";
import "./ActivityTracker.css";

function ActivityTracker() {
  return (
    <div className="ActivityTracker">
      <h2>Activity Tracker</h2>
      <div className="ActivityTracker__chart">
        <img src="https://www.ajactraining.org/wp-content/uploads/2019/09/image-placeholder.jpg" />
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
