import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class Text extends Component {
  render() {
    return <span style={{ color: this.props.color }}>{this.props.value}</span>;
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <p />
        <p />
        <p />
        This is <Text color="red" value="Michael" />, no more no less.
        <p />
        <p />
        <p />
      </div>
    );
  }
}

export default App;
