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

    const mainNav = document.getElementById("js-menu");
    mainNav.classList.remove("active");

    this.props.history.push("/");
  };

  handleIconClick = () => {
    const mainNav = document.getElementById("js-menu");

    mainNav.classList.add("active");
  };

  handleLinkClick = () => {
    const mainNav = document.getElementById("js-menu");

    mainNav.classList.remove("active");
  };

  renderLoggedInLinks() {
    const { userId } = this.context;
    return (
      <>
        <li>
          <Link
            className="NavBar__nav-links"
            to={`/activity/${userId}`}
            onClick={this.handleLinkClick}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className="NavBar__nav-links"
            to={`/addlog/${userId}`}
            onClick={this.handleLinkClick}
          >
            Add Log
          </Link>
        </li>
        <li>
          <Link
            className="NavBar__nav-links"
            to={`/timer/${userId}`}
            onClick={this.handleLinkClick}
          >
            Timer
          </Link>
        </li>
        <li>
          <Link
            className="NavBar__nav-links"
            to={`/profile/${userId}`}
            onClick={this.handleLinkClick}
          >
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
          <Link
            className="NavBar__nav-links"
            to="/"
            onClick={this.handleLinkClick}
          >
            Login
          </Link>
        </li>
        <li>
          <Link
            className="NavBar__nav-links"
            to="/register"
            onClick={this.handleLinkClick}
          >
            Register
          </Link>
        </li>
      </>
    );
  }

  render() {
    const { userId } = this.context;
    return (
      <nav className="NavBar">
        <FontAwesomeIcon
          onClick={this.handleIconClick}
          className="NavBar__navbar-toggle"
          icon={faBars}
        />
        <h2>
          <Link to={`/activity/${userId}`} onClick={this.handleLinkClick}>
            S.T.Saver
          </Link>
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
