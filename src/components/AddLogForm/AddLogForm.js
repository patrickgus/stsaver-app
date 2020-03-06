import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import LogContext from "../../contexts/LogContext";
import LogApiService from "../../services/log-api-service";
import "./AddLogForm.css";

class AddLogForm extends Component {
  static contextType = LogContext;

  handleSubmit = e => {
    e.preventDefault();
    const { start_time, end_time, media, breaks } = e.target;

    LogApiService.postLog(
      start_time.value,
      end_time.value,
      media.value,
      breaks.value
    )
      .then(this.context.addGame)
      .then(() => {
        start_time.value = "";
        end_time.value = "";
        media.value = "";
        breaks.value = "";
        this.props.history.push("/activity");
      })
      .catch(this.context.setError);
  };

  handleCancel = e => {
    e.preventDefault();
    this.props.history.push("/activity");
  };

  render() {
    return (
      <form className="AddLogForm" onSubmit={this.handleSubmit}>
        <div className="AddLogForm__form-section">
          <label htmlFor="start_time">Start time</label>
          <input
            type="datetime-local"
            name="start_time"
            id="start_time"
            required
          />
        </div>
        <div className="AddLogForm__form-section">
          <label htmlFor="end_time">End time</label>
          <input type="datetime-local" name="end_time" id="end_time" required />
        </div>
        <div className="AddLogForm__form-section">
          <label htmlFor="media">Media type</label>
          <select name="media" id="media" required>
            <option value="">--Choose one--</option>
            <option value="computer">Computer</option>
            <option value="phone">Phone</option>
            <option value="tablet">Tablet</option>
            <option value="television">Television</option>
          </select>
        </div>
        <div className="AddLogForm__form-section">
          <label htmlFor="breaks">Number of breaks</label>
          <input type="number" name="breaks" id="breaks" required />
        </div>
        <div className="AddLogForm__buttons">
          <button type="submit">Submit</button>
          <button onClick={this.handleCancel}>Cancel</button>
        </div>
      </form>
    );
  }
}

export default withRouter(AddLogForm);
