import React, { Component } from "react";
import { Link } from "react-router-dom";
import LogContext from "../../contexts/LogContext";
import TokenService from "../../services/token-service";
import LoginForm from "../../components/LoginForm/LoginForm";
import "./LandingPage.css";

class LandingPage extends Component {
  static contextType = LogContext;

  renderLoggedIn = () => {
    const { userId } = this.context;
    return (
      <div className="LandingPage__logged-in">
        <h3>You are already logged in</h3>
        <Link to={`/activity/${userId}`}>To Activity Page</Link>
      </div>
    );
  };

  renderNotLoggedIn = () => {
    return <LoginForm />;
  };

  render() {
    return (
      <div className="LandingPage">
        <header className="LandingPage__header">
          <h1>Screen Time Saver</h1>
          <div className="LandingPage__login">
            {TokenService.hasAuthToken()
              ? this.renderLoggedIn()
              : this.renderNotLoggedIn()}
          </div>
        </header>
        <div className="LandingPage__descriptions-container">
          <section className="LandingPage__description">
            <div className="LandingPage__description-image">
              <img
                src="https://www.ajactraining.org/wp-content/uploads/2019/09/image-placeholder.jpg"
                alt="screenshot of activity page"
              />
            </div>
            <div className="LandingPage__description-content">
              <h3>Keep track of your screen time</h3>
              <p>
                Keep logs of you screen time sessions and set goals to limit the
                amount of exposure. Set goals for how much time you spend on
                your computer, phone, tablet, etc.
              </p>
            </div>
          </section>

          <section className="LandingPage__description">
            <div className="LandingPage__description-image">
              <img
                src="https://www.ajactraining.org/wp-content/uploads/2019/09/image-placeholder.jpg"
                alt="screenshot of timer page"
              />
            </div>
            <div className="LandingPage__description-content-2">
              <h3>Manage your screen time</h3>
              <p>
                Set a timer to get a reminder to take a break. A good rule to
                follow is the 20-20-20 rule, which is to take a break every 20
                minutes by looking at an object 20 feet away for 20 seconds.
              </p>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default LandingPage;
