import React, { Component } from "react";
//import ColorCard from "../../Atomic_Elements/Molecules/ColorCard";

class Color_Poc extends Component {
  render() {
    return (
      <div>
        <h1 className="title">Color Proof of Concept</h1>
        <h3>Greyscale</h3>
        <div className="color_gradient mb-3">
          <div className="color_block grey-90">
            <span>grey-90</span>
          </div>
          <div className="color_block grey-80">
            <span>grey-80</span>
          </div>
          <div className="color_block grey-70">
            <span>grey-70</span>
          </div>
          <div className="color_block grey-40">
            <span>grey-40</span>
          </div>
          <div className="color_block grey-20">
            <span className="dark">grey-20</span>
          </div>
          <div className="color_block grey-10">
            <span className="dark">grey-10</span>
          </div>
          <div className="color_block grey-05">
            <span className="dark">grey-05</span>
          </div>
        </div>
        <h3>Brand Colors</h3>
        <div className="color_gradient mb-3">
          <div className="color_block blue-90">
            <span>blue-90</span>
          </div>
          <div className="color_block blue-80">
            <span>blue-80</span>
          </div>
          <div className="color_block blue-70">
            <span>blue-70</span>
          </div>
          <div className="color_block blue-60">
            <span className="dark">blue-60</span>
          </div>
          <div className="color_block blue-40">
            <span className="dark">blue-40</span>
          </div>
          <div className="color_block blue-20">
            <span className="dark">blue-20</span>
          </div>
          <div className="color_block blue-05">
            <span className="dark">blue-05</span>
          </div>
        </div>
        <a
          className="mb-2"
          href="https://www.w3schools.com/colors/colors_picker.asp?colorhex=0069af"
        >
          Color Gradient for Sherwin Blue
        </a>
        <h3 className="mt-3">Dynamic Brand Colors</h3>
        <div className="color_gradient">
          <div className="color_block brand-dark-20">
            <span>brand-dark-20</span>
          </div>
          <div className="color_block brand-dark-10">
            <span>brand-dark-10</span>
          </div>
          <div className="color_block brand">
            <span>brand color</span>
          </div>
          <div className="color_block brand-light-20">
            <span className="dark">brand-light-20</span>
          </div>
          <div className="color_block brand-light-40">
            <span className="dark">brand-light-40</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Color_Poc;
