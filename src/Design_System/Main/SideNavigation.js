import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Toggle from "../../Atomic_Elements/Molecules/Toggle";
import "../../js/scripts.js";
import logo from "../../img/primary.png"; 


class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };

    // This binding is necessary to make `this` work in the callback
    this.openClick = this.openClick.bind(this);
    this.closeClick = this.closeClick.bind(this);
  }

  openClick() {
    const isOpen = this.state.isOpen;
    if (!isOpen) {
      this.setState((state) => ({
        isOpen: !state.isOpen,
      }));
    }
    console.log(this.state);
  }

  closeClick() {
    const isOpen = this.state.isOpen;
    if (isOpen) {
      this.setState((state) => ({
        isOpen: !state.isOpen,
      }));
    }
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <NavLink exact to="/">
          <img
            className="logo"
            alt="Primary Design System Logo"
            src={logo}
          />
        </NavLink>
        {/*<input placeholder="Search" />*/}
        <nav>
          <ul className="nav list-unstyled">
            <li className="single">
              <NavLink exact to="/">
                Welcome
              </NavLink>
            </li>
            <li className="single">
              <NavLink exact to="/release">
                Release Notes
              </NavLink>
            </li>
            <ul className="bucket">
              <li>
                <Toggle text={"Foundations"} />
                <ul className="foundations" hidden>
                  <li>
                    <NavLink to="/branding">Branding</NavLink>
                  </li>
                  <li>
                    <NavLink to="/colors">Colors</NavLink>
                  </li>
                  <li>
                    <NavLink to="/color_poc">Color POC</NavLink>
                  </li>
                  <li>
                    <NavLink to="/typography">Typography</NavLink>
                  </li>
                  <li>
                    <NavLink to="/icons">Iconography</NavLink>
                  </li>
                  <li>
                    <NavLink to="/grid">Grid</NavLink>
                  </li>
                </ul>
              </li>
            </ul>
            <ul className="bucket">
              <li>
                <Toggle text={"Components"} />
                <ul className="components" hidden>
                  <li>
                    <NavLink to="/breadcrumbs">Breadcrumbs</NavLink>
                  </li>
                  <li>
                    <NavLink to="/buttons">Buttons &amp; Links</NavLink>
                  </li>
                  <li>
                    <NavLink to="/tooltips">Tooltips</NavLink>
                  </li>
                  <li>
                    <NavLink to="/accordions">Accordions</NavLink>
                  </li>
                  <li>
                    <NavLink to="/tabs">Tabs</NavLink>
                  </li>
                  <li>
                    <NavLink to="/menus">Menus</NavLink>
                  </li>
                  <li>
                    <NavLink to="/filters">Filters</NavLink>
                  </li>
                  <li>
                    <NavLink to="/tables">Tables</NavLink>
                  </li>
                  <li>
                    <NavLink to="/pages">Pagination</NavLink>
                  </li>
                  <li>
                    <NavLink to="/navigation">Navigation</NavLink>
                  </li>
                  <li>
                    <NavLink to="/forms">Forms</NavLink>
                  </li>
                  <li>
                    <NavLink to="/carousel">Carousels</NavLink>
                  </li>
                </ul>
              </li>
            </ul>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navigation;
