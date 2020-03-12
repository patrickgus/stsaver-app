import React, { Component } from "react";
import { Button } from "../../Utils/Utils";
import "./Controller.css";

export default class Controller extends Component {
  render() {
    return (
      <div className="controller">
        <Button id="start_stop" onClick={this.props.onStartStop}>
          {this.props.isStart ? "Stop" : "Start"}
        </Button>
        <Button id="reset" onClick={this.props.onReset}>
          Reset
        </Button>
      </div>
    );
  }
}
