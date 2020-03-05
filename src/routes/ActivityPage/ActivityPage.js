import React, { Component } from "react";
import LogContext from "../../contexts/LogContext";
import LogApiService from "../../services/log-api-service";
import ActivityTracker from "../../components/ActivityTracker/ActivityTracker";
import LogListItem from "../../components/LogListItem/LogListItem";
import "./ActivityPage.css";

class ActivityPage extends Component {
  static contextType = LogContext;

  componentDidMount() {
    this.context.clearError();
    LogApiService.getLogs()
      .then(this.context.setLogList)
      .catch(this.context.setError);
  }

  renderLogs = () => {
    const { logList = [] } = this.context;
    return logList.map(log => <LogListItem key={log.id} log={log} />);
  };

  render() {
    const { error } = this.context;
    return (
      <div className="ActivityPage">
        <header className="ActivityPage__header">
          <h1>Screen Time Activity</h1>
          <ActivityTracker />
        </header>
        <div className="ActivityPage__logs">
          {error ? (
            <p className="error">There was an error, try again</p>
          ) : (
            this.renderLogs()
          )}
        </div>
      </div>
    );
  }
}

export default ActivityPage;
