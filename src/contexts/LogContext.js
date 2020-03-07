import React, { Component } from "react";

const LogContext = React.createContext({
  LogList: [],
  totalHours: {},
  userId: {},
  error: null,
  setError: () => {},
  clearError: () => {},
  setLogList: () => {},
  setTotalHours: () => {},
  addLog: () => {}
});

export default LogContext;

export class LogProvider extends Component {
  state = {
    logList: [],
    totalHours: {},
    userId: {},
    error: null
  };

  setLogList = logList => {
    this.setState({ logList });
  };

  setTotalHours = totalHours => {
    this.setState({ totalHours });
  };

  setUserId = userId => {
    this.setState({ userId });
  };

  setError = error => {
    console.error(error);
    this.setState({ error });
  };

  clearError = () => {
    this.setState({ error: null });
  };

  addLog = log => {
    this.setLogList([...this.state.logList, log]);
  };

  render() {
    const value = {
      logList: this.state.logList,
      totalHours: this.state.totalHours,
      userId: this.state.userId,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setLogList: this.setLogList,
      setTotalHours: this.setTotalHours,
      setUserId: this.setUserId,
      addLog: this.addLog
    };
    return (
      <LogContext.Provider value={value}>
        {this.props.children}
      </LogContext.Provider>
    );
  }
}
