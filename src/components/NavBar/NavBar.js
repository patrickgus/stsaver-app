import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "./NavBar.css";

class NavBar extends Component {
  handleLogoutClick = () => {
    this.props.history.push("/");
  };

  renderLogoutLink() {
    return (
      <div className="NavBar__logged-in">
        <Link onClick={this.handleLogoutClick} to="/">
          Logout
        </Link>
      </div>
    );
  }

  renderLoginLink() {
    return (
      <div className="NavBar__not-logged-in">
        <Link to="/">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    );
  }

  render() {
    return (
      <nav className="NavBar">
        <h3>
          <Link to="/activity">STSaver</Link>
        </h3>
        {this.renderLoginLink()}
      </nav>
    );
  }
}

export default withRouter(NavBar);
