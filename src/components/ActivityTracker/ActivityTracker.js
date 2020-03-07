import React, { Component } from "react";
import LogContext from "../../contexts/LogContext";
import ActivityChart from "../ActivityChart/ActivityChart";
import "./ActivityTracker.css";

class ActivityTracker extends Component {
  static contextType = LogContext;

  render() {
    const { error, logList, totalHours } = this.context;
    console.log(totalHours[0]);
    
    return (
      <div className="ActivityTracker">
        <h2>Activity Tracker</h2>
        <div className="ActivityTracker__chart">
            {/* add filter for dates - subtract one week from today*/}
          <ActivityChart logs={logList} />
        </div>
        <dl className="ActivityTracker__stats">
          <dt>Total Hours:</dt>
          <dd>
            {error ? (
              <p className="error">There was an error, try again</p>
            ) : (
              totalHours.sum
            )}
          </dd>
          <dt>This week:</dt>
          <dd>12</dd>
          <dt>Weekly goal:</dt>
          <dd>50</dd>
        </dl>
      </div>
    );
  }
}

export default ActivityTracker;
