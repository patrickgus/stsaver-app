import React, { Component } from "react";
import LogContext from "../../contexts/LogContext";
import ActivityChart from "../ActivityChart/ActivityChart";
import "./ActivityTracker.css";
import { subDays } from "date-fns";

class ActivityTracker extends Component {
  static contextType = LogContext;

  render() {
    const { error, logList, totalHours } = this.context;
    const filteredList = logList.filter(log => {
      const date = new Date(log.start_time);
      return date >= subDays(new Date(), 6) && date <= new Date();
    });

    return (
      <div className="ActivityTracker">
        <h3>Activity from the past 7 days</h3>
        <div className="ActivityTracker__chart">
          <ActivityChart logs={filteredList} />
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
