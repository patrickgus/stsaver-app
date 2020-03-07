import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Input, Button, Required } from "../Utils/Utils";
import AuthApiService from "../../services/auth-api-service";
import "./RegistrationForm.css";

class RegistrationForm extends Component {
  state = { error: null };

  handleSubmit = e => {
    e.preventDefault();
    const { first_name, last_name, username, password } = e.target;

    this.setState({ error: null });
    AuthApiService.postUser({
      username: username.value,
      password: password.value,
      first_name: first_name.value,
      last_name: last_name.value
    }).then(user => {
      AuthApiService.postLogin({
        username: user.username,
        password: password.value
      })
        .then(res => {
          username.value = "";
          password.value = "";
          first_name.value = "";
          last_name.value = "";
          this.props.history.push(`/activity/${res.userId}`);
        })
        .catch(res => {
          this.setState({ error: res.error });
        });
    });
  };

  handleCancel = e => {
    e.preventDefault();
    this.props.history.push("/");
  };

  render() {
    const { error } = this.state;
    return (
      <form className="RegistrationForm" onSubmit={this.handleSubmit}>
        <div role="alert">{error && <p className="error">{error}</p>}</div>
        <div className="RegistrationForm__form-section">
          <label htmlFor="first_name">
            First name <Required />
          </label>
          <Input name="first_name" type="text" required id="first_name" />
        </div>
        <div className="RegistrationForm__form-section">
          <label htmlFor="last_name">
            Last name <Required />
          </label>
          <Input name="last_name" type="text" required id="last_name" />
        </div>
        <div className="RegistrationForm__form-section">
          <label htmlFor="username">
            Username <Required />
          </label>
          <Input name="username" type="text" required id="username" />
        </div>
        <div className="RegistrationForm__form-section">
          <label htmlFor="password">
            Password <Required />
          </label>
          <Input name="password" type="password" required id="password" />
        </div>
        <div className="RegistrationForm__buttons">
          <Button type="submit">Register</Button>
          <Button onClick={this.handleCancel}>Cancel</Button>
        </div>
      </form>
    );
  }
}

export default withRouter(RegistrationForm);
