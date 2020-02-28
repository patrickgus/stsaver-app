import React, { Component } from "react";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import "./RegistrationPage.css";

class RegistrationPage extends Component {
  render() {
    return (
      <div className="RegistrationPage">
        <h2>Sign up for an account</h2>
        <RegistrationForm />
      </div>
    );
  }
}

export default RegistrationPage;
