import React, { Component } from "react";

const footerbottom = `
<div class="footer-bottom">
  <div class="row">
    <div class="col col-4">
        <div class="copyright">
          <a>Sherwin-Williams.com</a>
          <p>©<span class="date">2019</span> The Sherwin-Williams Company. Computer screens and printers vary in how colors are displayed, so the colors you see may not match the coating’s actual color.</p>
        </div>
    </div>
    <div class="col col-6">
        <div class="row">
          <div class="col">
              <ul>
                <li><a>About Us</a></li>
                <li><a>Careers</a></li>
                <li><a>Investor Relations</a></li>
                <li><a>Contact Us</a></li>
              </ul>
          </div>
          <div class="col">
              <div class="col">
                <ul class="terms">
                    <li><a>Terms of Use</a></li>
                    <li><a>Terms &amp; Conditions of Sale</a></li>
                    <li><a>Privacy Policy</a></li>
                    <li><a>Politique de Confidentialite</a></li>
                    <li><a>CA Supply Chains Act</a></li>
                    <li><a>Sitemap</a></li>
                </ul>
              </div>
          </div>
        </div>
    </div>
  </div>
</div>`;

class Code extends Component {
  render() {
    return <div>{footerbottom}</div>;
  }
}

export default Code;
