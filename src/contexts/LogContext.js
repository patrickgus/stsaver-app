import React, { Component } from "react";

const LogContext = React.createContext({
  LogList: [],
  totalHours: "",
  error: null,
  setError: () => {},
  clearError: () => {},
  setLogList: () => {},
  setTotalHours: () => {}
});

export default LogContext;

export class LogProvider extends Component {
  state = {
    logList: [],
    totalHours: "",
    error: null
  };

  setLogList = logList => {
    this.setState({ logList });
  };

  setTotalHours = totalHours => {
    this.setState({ totalHours });
  };

  setError = error => {
    console.error(error);
    this.setState({ error });
  };

  clearError = () => {
    this.setState({ error: null });
  };

  render() {
    const value = {
      logList: this.state.logList,
      totalHours: this.state.totalHours,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setLogList: this.setLogList,
      setTotalHours: this.setTotalHours
    };
    return (
      <LogContext.Provider value={value}>
        {this.props.children}
      </LogContext.Provider>
    );
  }
}
