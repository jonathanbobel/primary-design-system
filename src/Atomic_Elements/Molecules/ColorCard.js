import React, { Component } from "react";

class Colors extends Component {
  render() {
    const { color, name, variable } = this.props;

    return (
      <div className="color-card">
        <div className="color" style={{ backgroundColor: color }} />
        <div className="color-desc">
          <p>
            <strong>{name}</strong>
          </p>
          <p>{color}</p>
          <p>{variable}</p>
        </div>
      </div>
    );
  }
}

export default Colors;
