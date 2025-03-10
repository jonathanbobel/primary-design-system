import React, { Component } from "react";

class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: false };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((state) => ({
      isToggleOn: !state.isToggleOn,
    }));
  }

  render() {
    return (
      <button
        aria-expanded={this.state.isToggleOn}
        onClick={this.handleClick}
        className={this.state.isToggleOn === true ? "toggle" : ""}
      >
        <span>{this.props.text}</span>
        <span>
          <svg className="icon-svg up">
            <use xlinkHref="./img/icons.svg#down-arrow" />
          </svg>
        </span>
      </button>
    );
  }
}

export default Toggle;
