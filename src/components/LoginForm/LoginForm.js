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
        <div className="user_name">
          <label htmlFor="LoginForm__username">Username</label>
          <input type="text" name="username" id="LoginForm__username" />
        </div>
        <div className="password">
          <label htmlFor="LoginForm__password">Password</label>
          <input name="password" type="password" id="LoginForm__password" />
        </div>
        <button type="submit">Login</button>
        <button className="LoginForm__demo" onClick={this.handleDemoClick}>
          Demo
        </button>
      </form>
    );
  }
}

export default withRouter(LoginForm);
