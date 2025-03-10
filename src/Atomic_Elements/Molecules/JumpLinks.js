import React, { Component } from "react";

class JumpLinks extends Component {
  render() {
    return (
      <div className={this.props.class}>
        <ul>
          <li className="selected">
            <a href={null}>Selected</a>
          </li>
          <li>
            <a href={null}>Normal</a>
          </li>
          <li>
            <a href={null}>Normal</a>
          </li>
          <li>
            <a href={null}>Normal</a>
          </li>
          <li>
            <a href={null}>Normal</a>
          </li>
          <li>
            <a href={null}>Normal</a>
          </li>
          <li>
            <a href={null}>Normal</a>
          </li>
        </ul>
      </div>
    );
  }
}
export default JumpLinks;
