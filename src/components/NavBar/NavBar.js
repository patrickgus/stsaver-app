import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import TokenService from "../../services/token-service";
import IdleService from "../../services/idle-service";
import LogContext from "../../contexts/LogContext";
import "./NavBar.css";

class NavBar extends Component {
  static contextType = LogContext;

  handleLogoutClick = () => {
    TokenService.clearAuthToken();
    TokenService.clearCallbackBeforeExpiry();
    IdleService.unRegisterIdleResets();

    this.props.history.push("/");
  };

  handleIconClick = () => {
    let mainNav = document.getElementById("js-menu");

    mainNav.classList.toggle("active");
  };

  renderLoggedInLinks() {
    const { userId } = this.context;
    return (
      <>
        <li>
          <Link className="NavBar__nav-links" to={`/activity/${userId}`}>
            Home
          </Link>
        </li>
        <li>
          <Link className="NavBar__nav-links" to={`/addlog/${userId}`}>
            Add Log
          </Link>
        </li>
        <li>
          <Link className="NavBar__nav-links" to={`/timer/${userId}`}>
            Timer
          </Link>
        </li>
        <li>
          <Link className="NavBar__nav-links" to={`/profile/${userId}`}>
            Profile
          </Link>
        </li>
        <li>
          <Link
            className="NavBar__nav-links"
            onClick={this.handleLogoutClick}
            to="/"
          >
            Logout
          </Link>
        </li>
      </>
    );
  }

  renderLoginLink() {
    return (
      <>
        <li>
          <Link className="NavBar__nav-links" to="/">
            Login
          </Link>
        </li>
        <li>
          <Link className="NavBar__nav-links" to="/register">
            Register
          </Link>
        </li>
      </>
    );
  }

  render() {
    return (
      <nav className="NavBar">
        <FontAwesomeIcon
          onClick={this.handleIconClick}
          className="NavBar__navbar-toggle"
          icon={faBars}
        />
        <h2>
          <Link to="/activity">S.T.Saver</Link>
        </h2>
        <ul className="NavBar__main-nav" id="js-menu">
          {TokenService.hasAuthToken()
            ? this.renderLoggedInLinks()
            : this.renderLoginLink()}
        </ul>
      </nav>
    );
  }
}

export default withRouter(NavBar);
