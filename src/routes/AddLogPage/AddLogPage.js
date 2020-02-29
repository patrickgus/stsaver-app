import React, { Component } from "react";
import AddLogForm from "../../components/AddLogForm/AddLogForm";
import "./AddLogPage.css";

class AddLogPage extends Component {
  render() {
    return (
      <div className="AddLogPage">
        <header className="AddLogPage__header">
          <h2>Add A New Screen Time Log</h2>
        </header>
        <AddLogForm />
      </div>
    );
  }
}

export default AddLogPage;
