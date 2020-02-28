import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./LoginForm.css";

class LoginForm extends Component {
  handleSubmit = () => {
    this.props.history.push("/activity");
  };

  handleDemoClick = () => {
    this.props.history.push("/activity");
  };

  render() {
    return (
      <form className="LoginForm" onSubmit={this.handleSubmit}>
        <div className="LoginForm__header">
          <h2>Login Here</h2>
        </div>
        <div className="LoginForm__username">
          <label htmlFor="username">Username</label>
          <input type="text" name="username" id="username" />
        </div>
        <div className="LoginForm__password">
          <label htmlFor="password">Password</label>
          <input name="password" type="password" id="password" />
        </div>
        <div className="LoginForm__buttons">
          <button type="submit">Login</button>
          <button className="LoginForm__demo" onClick={this.handleDemoClick}>
            Demo
          </button>
        </div>
      </form>
    );
  }
}

export default withRouter(LoginForm);
