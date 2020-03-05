import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import TokenService from "../../services/token-service";
import IdleService from "../../services/idle-service";
import "./NavBar.css";

class NavBar extends Component {
  handleLogoutClick = () => {
    TokenService.clearAuthToken();
    TokenService.clearCallbackBeforeExpiry();
    IdleService.unRegisterIdleResets();

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
        {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
      </nav>
    );
  }
}

export default withRouter(NavBar);
