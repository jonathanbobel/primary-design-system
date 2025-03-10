import React, { Component } from "react";

class Release extends Component {
  render() {
    return (
      <div>
        <h1 className="title">Release Notes</h1>
        <p className="spacer">
          The Primary Design System is constantly growing and evolving. Here
          you’ll find an outline of bug fixes, new features, and other updates
          that have been implemented throughout each release.
        </p>

        <div className="release-notes">
          <div className="release-number">1.0</div>
          <div className="release-desc">
            <p>DS Name 1.0</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
        <div className="release-notes">
          <div className="release-number">1.1</div>
          <div className="release-desc">
            <p>DS Name 1.1</p>
            <p>
              Utenim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
              amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Release;
