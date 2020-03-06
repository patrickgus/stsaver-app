import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import AuthApiService from "../../services/auth-api-service";
import "./LoginForm.css";

class LoginForm extends Component {
  state = { error: null };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ error: null });
    const { username, password } = e.target;

    AuthApiService.postLogin({
      username: username.value,
      password: password.value
    })
      .then(res => {
        username.value = "";
        password.value = "";
        this.props.history.push(`/activity/${res.userId}`);
      })
      .catch(res => {
        this.setState({ error: res.error });
      });
  };

  handleDemoClick = e => {
    e.preventDefault();
    this.setState({ error: null });
    
    AuthApiService.postLogin({
      username: "testuser",
      password: "Test123!"
    })
      .then(res => {
        this.props.history.push(`/activity/${res.userId}`);
      })
      .catch(res => {
        this.setState({ error: res.error });
      });
  };

  render() {
    const { error } = this.state;
    return (
      <form className="LoginForm" onSubmit={this.handleSubmit}>
        <div className="LoginForm__header">
          <h2>Login Here</h2>
        </div>
        <div role="alert">{error && <p className="error">{error}</p>}</div>
        <div className="LoginForm__form-section">
          <label htmlFor="username">Username</label>
          <input type="text" name="username" id="username" />
        </div>
        <div className="LoginForm__form-section">
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
