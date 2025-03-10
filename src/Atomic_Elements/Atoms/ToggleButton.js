import React from "react";

// just for a fun, button have parent and child components
// you can keep it simple and use just one component for button, but if you are learning React
// it's better for you to see how parent-child communication works on this simple example.
// btw, you can find button built from just one component (es5) here https://codepen.io/_danko/pen/yJqRWr
// n.b. in real life project do not use 'div' for a button - think about accessibility

class ToggleButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      condition: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      condition: !this.state.condition
    });
    const timer = setTimeout(() => {
      this.setState({
        condition: false
      });
    }, 2000);
    return () => clearTimeout(timer);
  }
  render() {
    return (
      <ButtonChild
        className={this.state.condition ? "button toggled" : "button"}
        toggleClassName={this.handleClick}
        label={this.props.label}
        title={this.props.title}
      >
        {this.state.condition ? "button toggled" : "button"}
      </ButtonChild>
    );
  }
}

class ButtonChild extends React.Component {
  render() {
    return (
      <button
        className={this.props.className}
        onClick={this.props.toggleClassName}
      >
        {this.props.children}
      </button>
    );
  }
}

export default ToggleButton;
