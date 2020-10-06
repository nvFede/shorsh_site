import React, { Component, Fragment } from "react";

import "../assets/styles/components/about.scss";

import BeachColor from "../assets/images/palettes/BeachColor.png";
import BeautifullBlues from "../assets/images/palettes/BeautifulBlues.png";
import BlueberryFlavored from "../assets/images/palettes/BlueberryFlavored.png";
import Ferrari from "../assets/images/palettes/Ferrari.png";
import NaomiSky from "../assets/images/palettes/NaomiSky.png";
import NatureFigures from "../assets/images/palettes/NatureFigures.png";
import SnakeBones from "../assets/images/palettes/SnakeBones.png";
import SonicRainboom from "../assets/images/palettes/SonicRainboom.png";
import SpookySeason from "../assets/images/palettes/SpookySeason.png";

export default class About extends Component {
  render() {
    return (
      <Fragment>
        <main className="main">
          <h1>About</h1>

          <section className="palette palette-container">
            <ul className="palette__list">
              <li className="palette__list--item">$primary-color</li>
              <li className="palette__list--item">$secondary-color</li>
              <li className="palette__list--item">$background-color</li>
              <li className="palette__list--item">$foreground-color</li>
              <li className="palette__list--item">$alternative-color</li>
            </ul>

            <figure>
              <img
                className="palette__image"
                src={BeachColor}
                alt="BeachColor"
              />
              <figcaption className="palette__caption">Beach Color</figcaption>
            </figure>
            <figure>
              <img
                className="palette__image"
                src={BeautifullBlues}
                alt="BeautifullBlues"
              />
              <figcaption className="palette__caption">
                Beautifull Blues
              </figcaption>
            </figure>
            <figure>
              <img
                className="palette__image"
                src={BlueberryFlavored}
                alt="BlueberryFlavored"
              />
              <figcaption className="palette__caption">
                Blueberry Flavored
              </figcaption>
            </figure>
            <figure>
              <img className="palette__image" src={Ferrari} alt="Ferrari" />
              <figcaption className="palette__caption">Ferrari</figcaption>
            </figure>
            <figure>
              <img className="palette__image" src={NaomiSky} alt="NaomiSky" />
              <figcaption className="palette__caption">Naomi Sky</figcaption>
            </figure>
            <figure>
              <img
                className="palette__image"
                src={NatureFigures}
                alt="NatureFigures"
              />
              <figcaption className="palette__caption">
                Nature Figures
              </figcaption>
            </figure>
            <figure>
              <img
                className="palette__image"
                src={SnakeBones}
                alt="SnakeBones"
              />
              <figcaption className="palette__caption">Snake Bones</figcaption>
            </figure>
            <figure>
              <img
                className="palette__image"
                src={SonicRainboom}
                alt="SonicRainboom"
              />
              <figcaption className="palette__caption">
                Sonic Rainboom
              </figcaption>
            </figure>
            <figure>
              <img
                className="palette__image"
                src={SpookySeason}
                alt="SpookySeason"
              />
              <figcaption className="palette__caption">
                Spooky Season
              </figcaption>
            </figure>
          </section>
        </main>
      </Fragment>
    );
  }
}
