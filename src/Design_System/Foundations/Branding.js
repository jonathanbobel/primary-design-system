import React, { Component } from "react";
import Button from "../../Atomic_Elements/Atoms/Button";

class Branding extends Component {
  render() {
    return (
      <div className="branding w3-col">
        <h1 className="title">Branding</h1>
        <p className="mb-5">
          Correct use of the SW<sup>&reg;</sup> wordmark, the
          COVER THE EARTH<sup>&reg;</sup> logo and the combined Corporate
          Identity logo is essential to the integrity of our corporate image.
          Logos should always appear exactly as they are supplied in approved
          artwork form. Modifying the artwork will not only undermine The
          SW Company’s overall image, but may jeopardize our
          rights to exclusive use of our trademarks. Accurate reproduction and
          correct application are necessary for a consistent image.
        </p>
        <div className="w3-row">
          <div className="w3-col s5">
            <div className="img-container">
              <img
                className="logo"
                alt="Primary Design System Logo"
                src="./img/SW_Logo_Planet.png"
              />
            </div>
            <p className="caption">
              Cover the Earth<sup>&reg;</sup> + SW<sup>&reg;</sup>{" "}
              Wordmark
            </p>
          </div>
          <div className="w3-col s6">
            <h3>
              Cover the Earth<sup>&reg;</sup> + SW<sup>&reg;</sup>{" "}
              Wordmark
            </h3>
            <p>
              The preferred SW Corporate Identity is a combination
              of two logos – the SW<sup>&reg;</sup> wordmark and
              COVER THE EARTH<sup>&reg;</sup>
              logo. These components are fixed in relation to one another and
              may not be altered or repositioned in any way.
            </p>
          </div>
        </div>
        <div className="w3-row">
          <div className="w3-col s5">
            <div className="img-container">
              <img
                className="logo"
                alt="Primary Design System Logo"
                src="./img/SW_Logo_Text.png"
              />
            </div>
            <p className="caption">
              SW<sup>&reg;</sup> Wordmark
            </p>
          </div>
          <div className="w3-col s6">
            <h3>
              SW<sup>&reg;</sup> Wordmark
            </h3>
            <p>
              In situations where the preferred logo is not an appropriate
              version please use the SW<sup>&reg;</sup> wordmark
              shown here.
            </p>
          </div>
        </div>
        <Button
          className="mb-5"
          label="Download SW Logos"
          title="Download SW Logos"
        />
        <h3>Do's and Don'ts</h3>
        <div className="w3-row">
          <div className="w3-col s5">
            <div className="img-container border-top border-top--green">
              <div className="img-inner">
                <img
                  className="logo"
                  alt="Primary Design System Logo"
                  src="./img/SW_Logo_Text.png"
                />
              </div>
              <div className="img-inner">
                <img
                  className="logo"
                  alt="Primary Design System Logo"
                  src="./img/SW_Logo_Planet.png"
                />
              </div>
            </div>
            <p className="do">
              <svg className="icon-svg check">
                <use xlinkHref="./img/icons.svg#check" />
              </svg>
              Do
            </p>
            <p>Use the logos as provided without any modification.</p>
          </div>
          <div className="w3-col s5">
            <div className="img-container border-top border-top--red">
              <div className="img-inner">
                <img
                  className="logo"
                  alt="Primary Design System Logo"
                  src="./img/SW_Logo_Red.png"
                />
              </div>
              <div className="img-inner">
                <img
                  className="logo turnt"
                  alt="Primary Design System Logo"
                  src="./img/SW_Logo_Planet.png"
                />
              </div>
            </div>
            <p className="dont">
              <svg className="icon-svg x">
                <use xlinkHref="./img/icons.svg#close" />
              </svg>
              Don't
            </p>
            <p>Change color or place logo on a skewed line.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Branding;
