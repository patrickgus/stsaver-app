import React, { Component } from "react";
import { Link } from "react-router-dom";
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
          <Link to={"/addlog"}>Add Log</Link>
        </header>
        <section className="ActivityPage__logs">
          {this.renderLogs()}
        </section>
      </div>
    );
  }
}

export default ActivityPage;
