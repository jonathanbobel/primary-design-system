import React, { Component } from "react";

class Utility extends Component {
  render() {
    return (
      <nav className="utility">
        <div className="location">
          <span className="divider">Coil & Extrusion Coating</span>
          <div>
            <img alt="American Flag" src="/img/usa.png" />
          </div>
          <span className="country">USA - English</span>
          <a href={null}>
            Change
            <svg className="icon-svg down">
              <use xlinkHref="../img/icons.svg#down-arrow" />
            </svg>
          </a>
        </div>
        <div className="links">
          <ul>
            <li>
              <a href={null}>
                <svg className="icon-svg download">
                  <use xlinkHref="../img/icons.svg#download" />
                </svg>
                Formula Express
              </a>
            </li>
            <li>
              <a href={null}>
                <svg className="icon-svg email">
                  <use xlinkHref="../img/icons.svg#email" />
                </svg>
                Contact
              </a>
            </li>
            <li>
              <a href={null}>
                <svg className="icon-svg">
                  <use xlinkHref="../img/icons.svg#location" />
                </svg>
                Find a Location
              </a>
            </li>
            <li>
              <a href={null}>
                <svg className="icon-svg account">
                  <use xlinkHref="../img/icons.svg#account" />
                </svg>
                Account
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
export default Utility;
