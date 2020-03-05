import React, { Component } from "react";

const LogListContext = React.createContext({
  LogList: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setLogList: () => {}
});

export default LogListContext;

export class LogListProvider extends Component {
  state = {
    logList: [],
    error: null,
  };

  setLogList = logList => {
    this.setState({ logList })
  }

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  render() {
    const value = {
      logList: this.state.logList,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setLogList: this.setLogList,
    }
    return (
      <LogListContext.Provider value={value}>
        {this.props.children}
      </LogListContext.Provider>
    )
  }
}

