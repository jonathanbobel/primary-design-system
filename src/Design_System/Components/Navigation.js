import React, { Component } from "react";
import Utility from "../../Atomic_Elements/Molecules/Utility";
import Header from "../../Atomic_Elements/Molecules/Header";
import JumpLinks from "../../Atomic_Elements/Molecules/JumpLinks";
import FooterTop from "../../Atomic_Elements/Molecules/FooterTop";
import FooterBottom from "../../Atomic_Elements/Molecules/FooterBottom";
import CodeContainer from "../../Atomic_Elements/Molecules/CodeContainer";

const utility = `<nav class="utility">
  <div class="location">
    <span class="divider">Coil &amp; Extrusion Coating</span>
    <div><img alt="American Flag" src="/img/usa.png"></div>
    <span class="country">USA - English</span>
    <a>
        Change
        <svg class="icon-svg down">
          <use xlink:href="../img/icons.svg#down-arrow"></use>
        </svg>
    </a>
  </div>
  <div class="links">
    <ul>
        <li>
          <a>
              <svg class="icon-svg download">
                <use xlink:href="../img/icons.svg#download"></use>
              </svg>
              Formula Express
          </a>
        </li>
        <li>
          <a>
              <svg class="icon-svg email">
                <use xlink:href="../img/icons.svg#email"></use>
              </svg>
              Contact
          </a>
        </li>
        <li>
          <a>
              <svg class="icon-svg">
                <use xlink:href="../img/icons.svg#location"></use>
              </svg>
              Find a Location
          </a>
        </li>
        <li>
          <a>
              <svg class="icon-svg account">
                <use xlink:href="../img/icons.svg#account"></use>
              </svg>
              Account
          </a>
        </li>
    </ul>
  </div>
</nav>
`;

const header = `<header>
  <div class="logo-search">
    <img src="./img/SW_Logo_Planet.png" alt="SW Logo">
    <div class="search-container">
        <input id="search" type="text" name="searchterm" class="search-input" placeholder="What can we help you find?">
        <a class="link-search">
          <svg class="icon-svg search">
              <use xlink:href="../img/icons.svg#search"></use>
          </svg>
          <span>Search</span>
        </a>
    </div>
  </div>
  <nav class="menu dropmenu">
    <ul>
        <li>
          <a class="dropdown">
              Dropmenu 1
              <svg class="icon-svg down">
                <use xlink:href="../img/icons.svg#down-arrow"></use>
              </svg>
          </a>
        </li>
        <li>
          <a class="dropdown">
              Dropmenu 2
              <svg class="icon-svg down">
                <use xlink:href="../img/icons.svg#down-arrow"></use>
              </svg>
          </a>
        </li>
        <li>
          <a class="dropdown">
              Dropmenu 3
              <svg class="icon-svg down">
                <use xlink:href="../img/icons.svg#down-arrow"></use>
              </svg>
          </a>
        </li>
    </ul>
    <button title="Button Title">Button Title</button>
  </nav>
  <div class="share">
    <span>Share:</span>
    <svg class="icon-svg email">
        <use xlink:href="../img/icons.svg#email"></use>
    </svg>
    <svg class="icon-svg linkedin">
        <use xlink:href="../img/icons.svg#linkedin"></use>
    </svg>
    <svg class="icon-svg pinterest">
        <use xlink:href="../img/icons.svg#pinterest"></use>
    </svg>
    <svg class="icon-svg twitter">
        <use xlink:href="../img/icons.svg#twitter"></use>
    </svg>
  </div>
</header>`;

const jumplinks = `<div class="jumplinks">
  <ul>
    <li class="selected"><a>Selected</a></li>
    <li><a>Normal</a></li>
    <li><a>Normal</a></li>
    <li><a>Normal</a></li>
    <li><a>Normal</a></li>
    <li><a>Normal</a></li>
    <li><a>Normal</a></li>
  </ul>
</div>`;

const footertop = `<div class="footer-top">
  <div class="share">
      <svg class="icon-svg pinterest">
        <use xlink:href="../img/icons.svg#pinterest"></use>
      </svg>
      <svg class="icon-svg linkedin">
        <use xlink:href="../img/icons.svg#linkedin"></use>
      </svg>
      <svg class="icon-svg email">
        <use xlink:href="../img/icons.svg#email"></use>
      </svg>
      <svg class="icon-svg twitter">
        <use xlink:href="../img/icons.svg#twitter"></use>
      </svg>
  </div>
  <div class="search-container">
    <input id="email-address" type="text" name="searchterm" class="search-input" placeholder="Email Address">
    <a class="link-search">
      <span>Sign Up</span>
    </a>
  </div>
</div>`;

const footerbottom = `
<div class="footer-bottom">
  <div class="row">
    <div class="col col-4">
        <div class="copyright">
          <a>SW.com</a>
          <p>
            ©<span class="date">2019</span> The SW Company. 
            Computer screens and printers vary in how colors are displayed, so 
            the colors you see may not match the coating’s actual color.
          </p>
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

class Navigation extends Component {
  render() {
    return (
      <div>
        <h1 className="title">Navigation</h1>
        <p>
          A consistent navigation is vital to ensure that our users can clearly
          navigate to their desired content. Any icons placed in the navigation
          should be easily identifiable and are not to be repeated.
        </p>
        <h3 className="mt-5">Utility Navigation</h3>
        <Utility />
        <br />
        <CodeContainer text={utility} />
        <h3 className="mt-5">Header</h3>
        <Utility />
        <Header />
        <br />
        <CodeContainer text={utility + header} />
        <h3 className="mt-3">Jumplinks</h3>
        <JumpLinks class={"jumplinks"} />
        <br />
        <CodeContainer text={jumplinks} />
        <h3 className="mt-5">Footer Top</h3>
        <footer>
          <FooterTop />
        </footer>
        <br />
        <CodeContainer text={footertop} />
        <h3 className="mt-5">Footer</h3>
        <footer>
          <FooterTop />
          <FooterBottom />
        </footer>
        <br />
        <CodeContainer text={footertop + footerbottom} />
      </div>
    );
  }
}

export default Navigation;
