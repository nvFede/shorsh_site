import React, { Component, Fragment } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "../components/Header";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";

import Footer from "../components/Footer";
import "../assets/styles/app.scss";

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <BrowserRouter>
          <Fragment>
            <Header />
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />

            <Footer />
          </Fragment>
        </BrowserRouter>
      </Fragment>
    );
  }
}
