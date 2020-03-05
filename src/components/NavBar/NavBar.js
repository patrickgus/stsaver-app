import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
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

  handleIconClick = () => {
    let mainNav = document.getElementById("js-menu");

    mainNav.classList.toggle("active");
  };

  renderLoggedInLinks() {
    return (
      <>
        <li>
          <Link className="NavBar__nav-links" to="/activity">
            Home
          </Link>
        </li>
        <li>
          <Link className="NavBar__nav-links" to="/addlog">
            Add Log
          </Link>
        </li>
        <li>
          <Link className="NavBar__nav-links" to="/timer">
            Timer
          </Link>
        </li>
        <li>
          <Link className="NavBar__nav-links" to="/profile">
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
