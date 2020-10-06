import React, { Component } from "react";

import Header from "../components/Header";
import Home from "../components/Home";

import "../assets/styles/app.scss";

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Home />
      </div>
    );
  }
}
