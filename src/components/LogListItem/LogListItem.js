import React, { Component } from "react";
import moment from "moment";
import { Input, Button } from "../Utils/Utils";
import LogApiService from "../../services/log-api-service";
import LogContext from "../../contexts/LogContext";
import "./LogListItem.css";

class LogListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false
    };
  }

  static contextType = LogContext;

  handleSubmit = e => {
    e.preventDefault();
    const { userId } = this.context;
    const { start_time, end_time, media, breaks } = e.target;

    LogApiService.updateLog(
      userId,
      this.props.log.id,
      start_time.value,
      end_time.value,
      media.value,
      breaks.value
    ).then(res => {
      LogApiService.getLogs(userId).then(this.context.setLogList);
      this.setState({ editing: false });
    });
  };

  handleCancel = e => {
    e.preventDefault();
    this.setState({ editing: false });
  };

  handleEdit = () => {
    this.setState({ editing: true });
  };

  handleDelete = () => {
    const { userId } = this.context;
    LogApiService.deleteLog(userId, this.props.log.id).then(res => {
      LogApiService.getLogs(userId).then(this.context.setLogList);
    });
  };

  renderEditingView = () => {
    const { start_time, end_time, media, breaks } = this.props.log;
    const start = moment(start_time).format("YYYY-DD-MMTHH:mm");
    const end = moment(end_time).format("YYYY-DD-MMTHH:mm");

    return (
      <form className="LogListItem__edit-form" onSubmit={this.handleSubmit}>
        <div className="LogListItem__form-section">
          <label htmlFor="start_time">Start time</label>
          <Input
            type="datetime-local"
            name="start_time"
            id="start_time"
            defaultValue={start}
            required
          />
        </div>
        <div className="LogListItem__form-section">
          <label htmlFor="end_time">End time</label>
          <Input
            type="datetime-local"
            name="end_time"
            id="end_time"
            defaultValue={end}
            required
          />
        </div>
        <div className="LogListItem__form-section">
          <label htmlFor="media">Media type</label>
          <select name="media" id="media" defaultValue={media} required>
            <option value="">--Choose one--</option>
            <option value="computer">Computer</option>
            <option value="phone">Phone</option>
            <option value="tablet">Tablet</option>
            <option value="television">Television</option>
          </select>
        </div>
        <div className="LogListItem__form-section">
          <label htmlFor="breaks">Number of breaks</label>
          <Input
            type="number"
            name="breaks"
            id="breaks"
            defaultValue={breaks}
            required
          />
        </div>
        <div className="LogListItem__buttons">
          <Button type="submit">Submit</Button>
          <Button onClick={this.handleCancel}>Cancel</Button>
        </div>
      </form>
    );
  };

  renderDefaultView = () => {
    const { start_time, end_time, hours, media, breaks } = this.props.log;
    return (
      <>
        <h3>{moment(start_time).format("MM-DD-YYYY")}</h3>
        <p>
          {moment(start_time).format("h:mmA")} -{" "}
          {moment(end_time).format("h:mmA")}
        </p>
        <dl>
          <dt>Screen Hours:</dt>
          <dd>{hours}</dd>
          <dt>Media type:</dt>
          <dd>{media}</dd>
          <dt>Breaks taken:</dt>
          <dd>{breaks}</dd>
        </dl>
        <div className="LogListItem__buttons">
          <Button className="edit" onClick={this.handleEdit}>
            Edit
          </Button>
          <Button onClick={this.handleDelete}>Delete</Button>
        </div>
      </>
    );
  };

  render() {
    return (
      <section className="LogListItem">
        {this.state.editing
          ? this.renderEditingView()
          : this.renderDefaultView()}
      </section>
    );
  }
}

export default LogListItem;
