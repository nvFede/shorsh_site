import React, { Component, Fragment } from "react";
import "../assets/styles/components/header.scss";

const Header = () => (
  <Fragment>
    <header className="header">
      <div className="header__logo">
        <h1 className="header__logo--title">Logo</h1>
      </div>
      <nav>
        <ul className="header__navigation">
          <li className="header__navigation--item">First </li>
          <li className="header__navigation--item">Second</li>
          <li className="header__navigation--item">Third </li>
        </ul>
      </nav>
    </header>
  </Fragment>
);

export default Header;
