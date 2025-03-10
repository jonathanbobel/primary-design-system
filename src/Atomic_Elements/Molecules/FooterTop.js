import React, { Component } from "react";

class FooterTop extends Component {
  render() {
    return (
      <div className="footer-top">
        <div className="share">
          <svg className="icon-svg pinterest">
            <use xlinkHref="../img/icons.svg#pinterest" />
          </svg>
          <svg className="icon-svg linkedin">
            <use xlinkHref="../img/icons.svg#linkedin" />
          </svg>
          <svg className="icon-svg email">
            <use xlinkHref="../img/icons.svg#email" />
          </svg>

          <svg className="icon-svg twitter">
            <use xlinkHref="../img/icons.svg#twitter" />
          </svg>
        </div>
        <div className="search-container">
          <input
            id="email-address"
            type="text"
            name="searchterm"
            className="search-input"
            placeholder="Email Address"
          />
          <a href={null} class="link-search">
            <span>Sign Up</span>
          </a>
        </div>
      </div>
    );
  }
}

export default FooterTop;
