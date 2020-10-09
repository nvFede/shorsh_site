import React, { Component, Fragment } from "react";
import { Link, NavLink } from "react-router-dom";
import "../assets/styles/components/header.scss";

import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";

export default class Header extends Component {
  render() {
    return (
      <Fragment>
        <header className="header">
          <div className="header__logo">
            <Link to="/">
              <h1 className="header__logo--title">Logo</h1>
            </Link>
          </div>
          <nav>
            <ul className="header__navigation">
              <li className="header__navigation--item">
                <NavLink exact to="/" activeClassName="is-selected">
                  Home
                </NavLink>
              </li>
              <li className="header__navigation--item">
                <NavLink exact to="/about" activeClassName="is-selected">
                  About
                </NavLink>
              </li>
              <li className="header__navigation--item">
                <NavLink exact to="/contact" activeClassName="is-selected">
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
      </Fragment>
    );
  }
}
