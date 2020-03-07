import React, { Component } from "react";
import { Link } from "react-router-dom";
import LogContext from "../../contexts/LogContext";

class ProfilePage extends Component {
  static contextType = LogContext;

  render() {
    const { userId } = this.context;
    return (
      <div className="ProfilePage">
        <h3>Coming Soon!</h3>
        <Link to={`/activity/${userId}`}>Back</Link>
      </div>
    );
  }
}

export default ProfilePage;
