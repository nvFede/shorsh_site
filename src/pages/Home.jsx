import React, { Component, Fragment } from "react";
import logo from "../assets/images/me.jpg";

import "../assets/styles/components/home.scss";

export default class Home extends Component {

  componentDidMount() {
    console.log('mounted')
  }

  render() {
    return (
      <Fragment>
        <main className="main">
          <img className="main__image" src={logo} alt="Logo" />
          <h1 className="main__title">React boilerplate</h1>
         

        </main>
      </Fragment>
    );
  }
}
