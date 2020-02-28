import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import LandingPage from "../../routes/LandingPage/LandingPage";
import RegistrationPage from "../../routes/RegistrationPage/RegistrationPage";
import ActivityPage from "../../routes/ActivityPage/ActivityPage";
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
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
