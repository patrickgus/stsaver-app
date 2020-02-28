import React, { Component } from "react";
import { Link } from "react-router-dom";
import LoginForm from "../../components/LoginForm/LoginForm";
import "./LandingPage.css";

class LandingPage extends Component {
  renderLoggedIn = () => {
    return (
      <div className="LandingPage__logged-in">
        <h3>You are already logged in</h3>
        <Link to="/activity">To Activity Page</Link>
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
          {/* <h2>Rested eyes increase productivity</h2> */}
        </header>

        <section className="LandingPage__description">
          <h3>Keep track of your screen time</h3>
          <div className="LandingPage__description-image">
            <img
              src="https://www.ajactraining.org/wp-content/uploads/2019/09/image-placeholder.jpg"
              alt="screenshot of activity page"
            />
          </div>
          <p>
            Keep logs of you screen time sessions and set goals to limit the
            amount of exposure. Set goals for how much time you spend on your
            computer, phone, tablet, etc.
          </p>
        </section>

        <section className="LandingPage__description">
          <h3>Manage your screen time</h3>
          <div className="LandingPage__description-image">
            <img
              src="https://www.ajactraining.org/wp-content/uploads/2019/09/image-placeholder.jpg"
              alt="screenshot of timer page"
            />
          </div>
          <p>
            Set a timer to get a reminder to take a break. A good rule to follow
            is the 20-20-20 rule, which is to take a break every 20 minutes by
            looking at an object 20 feet away for 20 seconds.
          </p>
        </section>
        <div className="LandingPage__login">{this.renderNotLoggedIn()}</div>
      </div>
    );
  }
}

export default LandingPage;
