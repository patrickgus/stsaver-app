import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./AddLogForm.css";

class AddLogForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.history.push("/activity");
  };

  handleCancel = e => {
    e.preventDefault();
    this.props.history.push("/activity");
  };

  render() {
    return (
      <form className="AddLogForm" onSubmit={this.handleSubmit}>
        <div className="AddLogForm__form-section">
          <label htmlFor="date">Date</label>
          <input type="date" name="date" id="date" required />
        </div>
        <div className="AddLogForm__form-section times">
          <label htmlFor="start-time">Start time</label>
          <input type="time" name="start-time" id="start-time" required />
          <label htmlFor="end-time">End time</label>
          <input type="time" name="end-time" id="end-time" required />
        </div>
        <div className="AddLogForm__form-section">
          <label htmlFor="media-type">Media type</label>
          <select name="media-type" id="media-type" required>
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
        <button type="submit">Submit</button>
        <button onClick={this.handleCancel}>Cancel</button>
      </form>
    );
  }
}

export default withRouter(AddLogForm);
