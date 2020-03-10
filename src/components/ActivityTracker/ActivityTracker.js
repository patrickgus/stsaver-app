import React, { Component } from "react";
import LogContext from "../../contexts/LogContext";
import ActivityChart from "../ActivityChart/ActivityChart";
import "./ActivityTracker.css";
import { subDays } from "date-fns";

class ActivityTracker extends Component {
  static contextType = LogContext;

  render() {
    const { error, logList, totalHours } = this.context;
    return (
      <div className="ActivityTracker">
        <h2>Activity Tracker</h2>
        <div className="ActivityTracker__chart">
          <ActivityChart
            logs={logList.filter(log => {
              const date = new Date(log.start_time);
              return date >= subDays(new Date(), 6) && date <= new Date();
            })}
          />
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
        </dl>
      </div>
    );
  }
}

export default ActivityTracker;
