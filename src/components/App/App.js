import React, { Component } from "react";
import NavBar from "../NavBar/NavBar";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App__header">
          <NavBar />
        </header>
        <main className="App__main"></main>
      </div>
    );
  }
}

export default App;
