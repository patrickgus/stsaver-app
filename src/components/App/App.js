import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import LandingPage from "../../routes/LandingPage/LandingPage";
import RegistrationPage from "../../routes/RegistrationPage/RegistrationPage";
import ActivityPage from "../../routes/ActivityPage/ActivityPage";
import AddLogPage from "../../routes/AddLogPage/AddLogPage";
import TimerPage from "../../routes/TimerPage/TimerPage";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App__header">
          <NavBar />
        </header>
        <main className="App__main">
          <Switch>
            <Route exact path={"/"} component={LandingPage} />
            <Route path={"/register"} component={RegistrationPage} />
            <Route path={"/activity"} component={ActivityPage} />
            <Route path={"/addlog"} component={AddLogPage} />
            <Route path={"/timer"} component={TimerPage} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
