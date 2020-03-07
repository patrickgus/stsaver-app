import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import PrivateRoute from "../Utils/PrivateRoute";
import PublicOnlyRoute from "../Utils/PublicOnlyRoute";
import NavBar from "../NavBar/NavBar";
import LandingPage from "../../routes/LandingPage/LandingPage";
import RegistrationPage from "../../routes/RegistrationPage/RegistrationPage";
import ActivityPage from "../../routes/ActivityPage/ActivityPage";
import AddLogPage from "../../routes/AddLogPage/AddLogPage";
import TimerPage from "../../routes/TimerPage/TimerPage";
import ProfilePage from "../../routes/ProfilePage/ProfilePage";
import TokenService from "../../services/token-service";
import AuthApiService from "../../services/auth-api-service";
import IdleService from "../../services/idle-service";
import "./App.css";

class App extends Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    console.error(error);
    return { hasError: true };
  }

  componentDidMount() {
    IdleService.setIdleCallback(this.logoutFromIdle);

    if (TokenService.hasAuthToken()) {
      IdleService.regiserIdleTimerResets();
      TokenService.queueCallbackBeforeExpiry(() => {
        AuthApiService.postRefreshToken();
      });
    }
  }

  componentWillUnmount() {
    IdleService.unRegisterIdleResets();
    TokenService.clearCallbackBeforeExpiry();
  }

  logoutFromIdle = () => {
    TokenService.clearAuthToken();
    TokenService.clearCallbackBeforeExpiry();
    IdleService.unRegisterIdleResets();
    this.forceUpdate();
  };

  render() {
    return (
      <div className="App">
        <header className="App__header">
          <NavBar />
        </header>
        <main className="App__main">
          {this.state.hasError && <p className="error">There was an error!</p>}
          <Switch>
            <Route exact path={"/"} component={LandingPage} />
            <PublicOnlyRoute path={"/register"} component={RegistrationPage} />
            <PrivateRoute path={"/activity/:userId"} component={ActivityPage} />
            <PrivateRoute path={"/addlog/:userId"} component={AddLogPage} />
            <PrivateRoute path={"/timer/:userId"} component={TimerPage} />
            <PrivateRoute path={"/profile/:userId"} component={ProfilePage} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
