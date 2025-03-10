import React, { Component } from "react";
import Button from "../../Atomic_Elements/Atoms/Button";

class Home extends Component {
  render() {
    return (
      <div>
        <h1 className="title">Welcome!</h1>
        <h3>What is Primary?</h3>
        <p>
          Welcome to the Primary Design System. This style guide is a digital extension and evolution of a structured brand system. It is designed to help maintain visual integrity and consistency across digital experiences, ensuring a cohesive and accessible user interface.
        </p>
        <p className="spacer">
          This guide serves as a reference for the specifications and usage of color, typography, user interface elements, imagery, and design principles. It is intended to support both current and future digital design efforts, front-end development, and the overall communication framework of the brand.
        </p>
        {/* <h3>Code Downloads</h3>
        <Button className="mb-5" label="Source Files" title="Source Files" />

        <h3>Figma Download</h3>
        <Button label="Figma UI Kit" title="Figma UI Kit" /> */}
      </div>
    );
  }
}

export default Home;
