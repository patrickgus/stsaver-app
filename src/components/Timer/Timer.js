import React, { Component } from "react";
import Settings from "./Settings/Settings";
import Times from "./Times/Times";
import Controller from "./Controller/Controller";
import "./Timer.css";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.audioBeep = React.createRef();

    this.state = {
      breakLength: this.props.defaultBreakLength,
      sessionLength: this.props.defaultSessionLength,
      timeLabel: "Session",
      timeLeftInSecond: this.props.defaultSessionLength * 60,
      isStart: false,
      timerInterval: null
    };
  }

  onIncreaseBreak = () => {
    if (this.state.breakLength < 60 && !this.state.isStart) {
      this.setState({
        breakLength: this.state.breakLength + 1
      });
    }
  };

  onDecreaseBreak = () => {
    if (this.state.breakLength > 1 && !this.state.isStart) {
      this.setState({
        breakLength: this.state.breakLength - 1
      });
    }
  };

  onIncreaseSession = () => {
    if (this.state.sessionLength < 60 && !this.state.isStart) {
      this.setState({
        sessionLength: this.state.sessionLength + 1,
        timeLeftInSecond: (this.state.sessionLength + 1) * 60
      });
    }
  };

  onDecreaseSession = () => {
    if (this.state.sessionLength > 1 && !this.state.isStart) {
      this.setState({
        sessionLength: this.state.sessionLength - 1,
        timeLeftInSecond: (this.state.sessionLength - 1) * 60
      });
    }
  };

  onReset = () => {
    this.setState({
      breakLength: this.props.defaultBreakLength,
      sessionLength: this.props.defaultSessionLength,
      timeLabel: "Session",
      timeLeftInSecond: this.props.defaultSessionLength * 60,
      isStart: false,
      timerInterval: null
    });

    this.audioBeep.current.pause();
    this.audioBeep.current.currentTime = 0;
    this.state.timerInterval && clearInterval(this.state.timerInterval);
  };

  onStartStop = () => {
    if (!this.state.isStart) {
      this.setState({
        isStart: !this.state.isStart,
        timerInterval: setInterval(() => {
          this.decreaseTimer();
          this.phaseControl();
        }, 1000)
      });
    } else {
      this.audioBeep.current.pause();
      this.audioBeep.current.currentTime = 0;
      this.state.timerInterval && clearInterval(this.state.timerInterval);

      this.setState({
        isStart: !this.state.isStart,
        timerInterval: null
      });
    }
  };

  decreaseTimer = () => {
    this.setState({
      timeLeftInSecond: this.state.timeLeftInSecond - 1
    });
  };

  phaseControl = () => {
    if (this.state.timeLeftInSecond === 0) {
      this.audioBeep.current.play();
    } else if (this.state.timeLeftInSecond === -1) {
      if (this.state.timeLabel === "Session") {
        this.setState({
          timeLabel: "Break",
          timeLeftInSecond: this.state.breakLength * 60
        });
      } else {
        this.setState({
          timeLabel: "Session",
          timeLeftInSecond: this.state.sessionLength * 60
        });
      }
    }
  };

  render() {
    return (
      <div className="pomodoro-clock">
        <Settings
          breakLength={this.state.breakLength}
          sessionLength={this.state.sessionLength}
          isStart={this.state.isStart}
          onDecreaseBreak={this.onDecreaseBreak}
          onDecreaseSession={this.onDecreaseSession}
          onIncreaseBreak={this.onIncreaseBreak}
          onIncreaseSession={this.onIncreaseSession}
        />
        <Times
          timeLabel={this.state.timeLabel}
          timeLeftInSecond={this.state.timeLeftInSecond}
        />
        <Controller
          onReset={this.onReset}
          onStartStop={this.onStartStop}
          isStart={this.state.isStart}
        />
        <audio
          id="beep"
          preload="auto"
          src="https://goo.gl/65cBl1"
          ref={this.audioBeep}
        ></audio>
      </div>
    );
  }
}
