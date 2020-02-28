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
        <h2>
          <Link to="/activity">S.T.Saver</Link>
        </h2>
        {this.renderLoginLink()}
      </nav>
    );
  }
}

export default withRouter(NavBar);
