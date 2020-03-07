import React, { Component } from "react";
import { format } from "date-fns";
import LogApiService from "../../services/log-api-service";
import LogContext from "../../contexts/LogContext";
import "./LogListItem.css";

class LogListItem extends Component {
  static contextType = LogContext;

  handleDelete = () => {
    const { userId } = this.context;
    LogApiService.deleteLog(userId, this.props.log.id).then(res => {
      LogApiService.getLogs(userId).then(this.context.setLogList);
    });
  };

  render() {
    const log = this.props.log;
    return (
      <section className="LogListItem">
        <h3>{format(new Date(log.start_time), "MM-dd-yyyy")}</h3>
        <p>
          {format(new Date(log.start_time), "h:mma")} -{" "}
          {format(new Date(log.end_time), "h:mma")}
        </p>
        <dl>
          <dt>Screen time hours:</dt>
          <dd>{log.hours}</dd>
          <dt>Media type:</dt>
          <dd>{log.media}</dd>
          <dt>Breaks taken:</dt>
          <dd>{log.breaks}</dd>
        </dl>
        <div className="LogListItem__buttons">
          <button>Edit</button>
          <button onClick={this.handleDelete}>Delete</button>
        </div>
      </section>
    );
  }
}

export default LogListItem;
