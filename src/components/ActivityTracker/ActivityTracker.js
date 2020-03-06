import React, { Component } from "react";
import LogContext from "../../contexts/LogContext";
import LogApiService from "../../services/log-api-service";
import ActivityChart from "../ActivityChart/ActivityChart";
import "./ActivityTracker.css";

class ActivityTracker extends Component {
  static contextType = LogContext;

  componentDidMount() {
    this.context.clearError();
    LogApiService.getLogs()
      .then(this.context.setLogList)
      .catch(this.context.setError);
  }

  render() {
    const { logList } =this.context;
    return (
      <div className="ActivityTracker">
        <h2>Activity Tracker</h2>
        <div className="ActivityTracker__chart">
          <ActivityChart logs={logList} />
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
}

export default ActivityTracker;
