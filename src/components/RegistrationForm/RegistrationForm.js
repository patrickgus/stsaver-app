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
        <div className="full_name">
          <label htmlFor="RegistrationForm__full_name">
            Full name
          </label>
          <input
            name="fullname"
            type="text"
            required
            id="RegistrationForm__full_name"
          />
        </div>
        <div className="user_name">
          <label htmlFor="RegistrationForm__user_name">
            Username
          </label>
          <input
            name="username"
            type="text"
            required
            id="RegistrationForm__user_name"
          />
        </div>
        <div className="password">
          <label htmlFor="RegistrationForm__password">
            Password
          </label>
          <input
            name="password"
            type="password"
            required
            id="RegistrationForm__password"
          />
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
