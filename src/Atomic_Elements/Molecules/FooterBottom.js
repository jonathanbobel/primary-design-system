import React, { Component } from "react";
import CurrentYear from "../../Atomic_Elements/Atoms/CurrentYear";

class FooterBottom extends Component {
  render() {
    return (
      <div className="footer-bottom">
        <div className="row">
          <div className="col col-4">
            <div className="copyright">
              <a href={null}>Sherwin-Williams.com</a>
              <p>
                &copy;
                <CurrentYear /> The Sherwin-Williams Company. Computer screens
                and printers vary in how colors are displayed, so the colors you
                see may not match the coating’s actual color.
              </p>
            </div>
          </div>
          <div className="col col-6">
            <div className="row">
              <div className="col">
                <ul>
                  <li>
                    <a href={null}>About Us</a>
                  </li>
                  <li>
                    <a href={null}>Careers</a>
                  </li>
                  <li>
                    <a href={null}>Investor Relations</a>
                  </li>
                  <li>
                    <a href={null}>Contact Us</a>
                  </li>
                </ul>
              </div>
              <div className="col">
                <div className="col">
                  <ul className="terms">
                    <li>
                      <a href={null}>Terms of Use</a>
                    </li>
                    <li>
                      <a href={null}>Terms & Conditions of Sale</a>
                    </li>
                    <li>
                      <a href={null}>Privacy Policy</a>
                    </li>
                    <li>
                      <a href={null}>Politique de Confidentialite</a>
                    </li>
                    <li>
                      <a href={null}>CA Supply Chains Act</a>
                    </li>
                    <li>
                      <a href={null}>Sitemap</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FooterBottom;
