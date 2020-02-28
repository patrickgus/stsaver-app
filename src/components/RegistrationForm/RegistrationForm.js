import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./RegistrationForm.css";

class RegistrationForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.history.push("/activity");
  };

  handleCancel = e => {
    e.preventDefault();
    this.props.history.push("/");
  };

  render() {
    return (
      <form className="RegistrationForm" onSubmit={this.handleSubmit}>
        <div className="RegistrationForm__first_name">
          <label htmlFor="first_name">First name</label>
          <input name="first_name" type="text" required id="first_name" />
        </div>
        <div className="RegistrationForm__last_name">
          <label htmlFor="last_name">Last name</label>
          <input name="last_name" type="text" required id="last_name" />
        </div>
        <div className="RegistrationForm__username">
          <label htmlFor="username">Username</label>
          <input name="username" type="text" required id="username" />
        </div>
        <div className="RegistrationForm__password">
          <label htmlFor="password">Password</label>
          <input name="password" type="password" required id="password" />
        </div>
        <div className="RegistrationForm__buttons">
          <button type="submit">Register</button>
          <button onClick={this.handleCancel}>Cancel</button>
        </div>
      </form>
    );
  }
}

export default withRouter(RegistrationForm);
