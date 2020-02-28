import React, { Component } from "react";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import "./RegistrationPage.css";

class RegistrationPage extends Component {
  render() {
    return (
      <div className="RegistrationPage">
        <h2>Register</h2>
        <RegistrationForm />
      </div>
    );
  }
}

export default RegistrationPage;
