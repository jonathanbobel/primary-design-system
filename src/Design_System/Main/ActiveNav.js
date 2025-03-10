import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Toggle from "./Toggle";

class ActiveNav extends Component {
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
      this.setState(state => ({
        isOpen: !state.isOpen
      }));
    }
    console.log(this.state);
  }

  closeClick() {
    const isOpen = this.state.isOpen;
    if (isOpen) {
      this.setState(state => ({
        isOpen: !state.isOpen
      }));
    }
    console.log(this.state);
  }

  render() {
    return (
      <ul
        className={
          this.state.toggleUL === true
            ? "active list-unstyled"
            : "list-unstyled"
        }
      >
        <li>
          <Toggle onClick={this.closeClick} text={"Foundations"} />
          <ul className="foundations" hidden>
            <li>
              <NavLink className={this.props.className} to={this.props.to}>
                Colors
              </NavLink>
            </li>
          </ul>
        </li>
      </ul>
    );
  }
}

export default ActiveNav;
