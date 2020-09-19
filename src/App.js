import React, { Component } from "react";
import "./styles.css";
import Routes from "./router";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello React</h1>
        <Routes />
      </div>
    );
  }
}
