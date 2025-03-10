import React, { Component } from "react";

class CurrentYear extends Component {
  constructor() {
    super();

    var d = new Date(),
      date = d.getFullYear();

    this.state = {
      date: date
    };
  }

  render() {
    return <span className="date">{this.state.date}</span>;
  }
}

export default CurrentYear;
