import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header>
        <div className="logo-search">
          <img src="./img/SW_Logo_Planet.png" alt="Sherwin-Williams Logo" />
          <div className="search-container">
            <input
              id="search"
              type="text"
              name="searchterm"
              className="search-input"
              placeholder="What can we help you find?"
            />
            <a href={null} class="link-search">
              <svg className="icon-svg search">
                <use xlinkHref="../img/icons.svg#search" />
              </svg>
              <span>Search</span>
            </a>
          </div>
        </div>
        <nav className="menu dropmenu">
          <ul>
            <li>
              <a className="dropdown" href={null}>
                Dropmenu 1
                <svg className="icon-svg down">
                  <use xlinkHref="../img/icons.svg#down-arrow" />
                </svg>
              </a>
            </li>
            <li>
              <a className="dropdown" href={null}>
                Dropmenu 2
                <svg className="icon-svg down">
                  <use xlinkHref="../img/icons.svg#down-arrow" />
                </svg>
              </a>
            </li>
            <li>
              <a className="dropdown" href={null}>
                Dropmenu 3
                <svg className="icon-svg down">
                  <use xlinkHref="../img/icons.svg#down-arrow" />
                </svg>
              </a>
            </li>
          </ul>
          <button title="Button Title">Button Title</button>
        </nav>
        <div className="share">
          <span>Share:</span>
          <svg className="icon-svg email">
            <use xlinkHref="../img/icons.svg#email" />
          </svg>
          <svg className="icon-svg linkedin">
            <use xlinkHref="../img/icons.svg#linkedin" />
          </svg>
          <svg className="icon-svg pinterest">
            <use xlinkHref="../img/icons.svg#pinterest" />
          </svg>
          <svg className="icon-svg twitter">
            <use xlinkHref="../img/icons.svg#twitter" />
          </svg>
        </div>
      </header>
    );
  }
}
export default Header;
