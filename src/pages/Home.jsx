import React, { Component, Fragment } from "react";
import logo from "../assets/images/me.jpg";

import "../assets/styles/components/home.scss";

export default class Home extends Component {
  render() {
    return (
      <Fragment>
        <main className="main">
          <img className="main__image" src={logo} alt="Logo" />
          <h1 className="main__title">React boilerplate</h1>
          <p className="main__paragraph">
            Just a quick <span className="main__paragraph--react">React</span>{" "}
            BoilerPlate with extensive
            <span className="main__paragraph--sass"> Sass</span> mixins, options
            and configurations
          </p>
        </main>
      </Fragment>
    );
  }
}
