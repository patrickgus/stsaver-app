import React, { Component } from "react";
import LogContext from "../../contexts/LogContext";
import LogApiService from "../../services/log-api-service";
import ActivityTracker from "../../components/ActivityTracker/ActivityTracker";
import LogListItem from "../../components/LogListItem/LogListItem";
import "./ActivityPage.css";

class ActivityPage extends Component {
  static defaultProps = {
    match: { params: {} }
  };

  static contextType = LogContext;

  componentDidMount() {
    const { userId } = this.props.match.params;

    this.context.clearError();
    LogApiService.getLogs(userId)
      .then(this.context.setLogList)
      .catch(this.context.setError);
    LogApiService.getTotalHours(userId)
      .then(this.context.setTotalHours)
      .catch(this.context.setError);
    this.context.setUserId(userId);
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
          <h2>Logs:</h2>
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
