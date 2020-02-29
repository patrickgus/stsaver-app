import React, { Component } from "react";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import "./RegistrationPage.css";

class RegistrationPage extends Component {
  render() {
    return (
      <div className="RegistrationPage">
        <div className="RegistrationPage__header">
          <h2>Sign up for an account</h2>
        </div>
        <RegistrationForm />
      </div>
    );
  }
}

export default RegistrationPage;
