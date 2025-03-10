import React, { Component } from "react";
import CodeContainer from "../../Atomic_Elements/Molecules/CodeContainer";

const tooltips = `<p class="tooltip-text">
  Example of a ToolTip
  <span class="tooltip-container">
    <button class="information" aria-labelledby="information-label">
      <svg class="icon-svg information">
        <use xlinkHref="../img/icons.svg#information" />
      </svg>
    </button>
    <div role="tooltip" id="information-label">
    Cras enim, augue integer lectus vivamus pulvinar ac. Cursus quam
    in elementum vestibulum arcu diam eu.
    </div>
  </span>
</p>`;

class Tooltips extends Component {
  render() {
    return (
      <div>
        <h1 className="title">Tooltips</h1>
        <p>
          Tooltips are a way to display supplemental information for users,
          giving them further clarity or instruction on an element. Content
          should always be brief, and tooltips are never to be used in a way
          that interferes with critical tasks. Users can view tooltips upon
          mouse hover or focus, and is also accessible via keyboard.
        </p>
        <p className="tooltip-text">
          Example of a ToolTip
          <span className="tooltip-container">
            <button className="information" aria-labelledby="information-label">
              <svg className="icon-svg information">
                <use xlinkHref="./img/icons.svg#information" />
              </svg>
            </button>
            <div role="tooltip" id="information-label">
              Cras enim, augue integer lectus vivamus pulvinar ac. Cursus quam
              in elementum vestibulum arcu diam eu.
            </div>
          </span>
        </p>

        <CodeContainer text={tooltips} />
      </div>
    );
  }
}

export default Tooltips;
