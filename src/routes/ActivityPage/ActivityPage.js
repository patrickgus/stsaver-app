import React, { Component } from "react";
import ActivityTracker from "../../components/ActivityTracker/ActivityTracker";
import LogListItem from "../../components/LogListItem/LogListItem";
import logs from "../../stores/logs-store";
import "./ActivityPage.css";

class ActivityPage extends Component {
  renderLogs = () => {
    return logs.map(log => <LogListItem key={log.id} log={log} />);
  };

  render() {
    return (
      <div className="ActivityPage">
        <header className="ActivityPage__header">
          <h1>Screen Time Activity</h1>
          <ActivityTracker />
        </header>
        <div className="ActivityPage__logs">{this.renderLogs()}</div>
      </div>
    );
  }
}

export default ActivityPage;
