import React, { Component } from "react";
import ColorCard from "../../Atomic_Elements/Molecules/ColorCard";

class Colors extends Component {
  render() {
    return (
      <div>
        <h1 className="title">Color</h1>
        <p>
          We believe in the power of color. A strong, recognizable color system creates consistency and enhances brand identity across all digital products. Our color palette consists of a core primary palette, a secondary palette, and a tertiary palette, with tints and shades used where appropriate.
        </p>
        <p>
          The color palette below has been tested for accessibility and meets WCAG 1.4.3 (Color Contrast) Guidelines. These colors have been specifically selected for digital use and may differ from print guidelines.
        </p>
        <h3>Primary Colors</h3>
        <div className="color-grid">
          <ColorCard name={"SW Blue"} color={"#0069AF"} variable={"$sw-blue"} />
          <ColorCard
            name={"SW Dark Grey"}
            color={"#222"}
            variable={"$sw-dark-grey"}
          />
          <ColorCard name={"White"} color={"#FFF"} />
          <ColorCard
            name={"SW Light Grey"}
            color={"#EAEAEA"}
            variable={"$sw-light-grey"}
          />
        </div>
        <h3>Secondary Colors</h3>
        <div className="color-grid">
          <ColorCard
            name={"Mid Grey 01"}
            color={"#666"}
            variable={"$mid-grey-01"}
          />
          <ColorCard
            name={"Mid Grey 02"}
            color={"#999"}
            variable={"$mid-grey-02"}
          />
          <ColorCard
            name={"Line Grey"}
            color={"#CCC"}
            variable={"$line-grey"}
          />
          <ColorCard
            name={"Light Grey"}
            color={"#F6F6F6"}
            variable={"$light-grey"}
          />
          <ColorCard
            name={"Light Blue"}
            color={"#F5FBFE"}
            variable={"$light-blue"}
          />
          <ColorCard
            name={"Dark Blue"}
            color={"#336699"}
            variable={"$dark-blue"}
          />
          <ColorCard
            name={"Error Red"}
            color={"#DA1C25"}
            variable={"$error-red"}
          />
          <ColorCard
            name={"Green"}
            color={"#2D8700"}
            variable={"$success-green"}
          />
          <ColorCard
            name={"Bright Blue*"}
            color={"#33BBFF"}
            variable={"$bright-blue"}
          />
        </div>
        <p>
          <em>
            *Note: Bright Blue is to be used for decorative elements only and is
            to be paired with another distinctive feature (e.g. change in line
            thickness). This color does not fall within ADA compliance contrast
            values and does not need to as long as it is used for decorative
            purposes.
          </em>
        </p>
        <h3>Tertiary Colors</h3>
        <div className="color-grid">
          <ColorCard
            name={"Dark Red"}
            color={"#992222"}
            variable={"$dark-red"}
          />
          <ColorCard
            name={"Burnt Orange"}
            color={"#CD4921"}
            variable={"$burnt-orange"}
          />
          <ColorCard name={"Mustard"} color={"#E2A504"} variable={"$mustard"} />
          <ColorCard name={"Teal"} color={"#19738A"} variable={"$teal"} />
          <ColorCard name={"Purple"} color={"#714F8F"} variable={"$purple"} />
          <ColorCard
            name={"Light Green"}
            color={"#14A880"}
            variable={"$light-green"}
          />
        </div>
        <h3>WCAG Contrast Compliance</h3>
        <p>
          In order to meet ADA Compliance, please use the contrast checkers
          below.
        </p>
        <p>
          <a href="http://www.accessible-colors.com">
            www.accessible-colors.com
          </a>
        </p>
        <p>
          <a href="http://www.webaim.org/resources/contrastchecker">
            www.webaim.org/resources/contrastchecker
          </a>
        </p>
        <p>
          <a href="http://www.contrastchecker.com">www.contrastchecker.com</a>
        </p>
      </div>
    );
  }
}

export default Colors;
