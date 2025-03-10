import React, { Component } from "react";
import Button from "../../Atomic_Elements/Atoms/Button";

class Home extends Component {
  render() {
    return (
      <div>
        <h1 className="title">Welcome!</h1>
        <h3>What is Primary?</h3>
        <p>
          Welcome to the Primary Design System by Sherwin-Williams. This style
          sheet is a digital addendum and evolution of the Sherwin-Williams
          brand guide. It is provided to help maintain brand integrity and
          consistency throughout the digital space. It represents the core
          elements that constitute Sherwin-Williams’ digital content.
        </p>
        <p className="spacer">
          This style sheet also serves as a reference for specifications and
          usage of color, fonts, user interface elements, imagery, and creative
          design elements. It is intended to aid in current and future digital
          design, front-end development, and clarification of the
          Sherwin-Williams communication system as a whole.
        </p>

        <h3>Code Downloads</h3>
        <Button className="mb-5" label="Source Files" title="Source Files" />

        <h3>Figma Download</h3>
        <Button label="Figma UI Kit" title="Figma UI Kit" />
      </div>
    );
  }
}

export default Home;
