import React, { Component } from "react";
import CodeContainer from "../../Atomic_Elements/Molecules/CodeContainer";

const column_sample = `<div class="w3-row">
  <div class="w3-col m4 l3">
    <p>12 columns on a small screen, 4 on a medium screen, and 3 on a large screen.</p>
  </div>
  <div class="w3-col m8 l9">
    <p>12 columns on a small screen, 8 on a medium screen, and 9 on a large screen.</p>
  </div>
</div>`;

class Grid extends Component {
  render() {
    return (
      <div>
        <h1 className="title">Grid</h1>
        <p>
          The Primary Grid is based heavily on w3.css's 12 column, mobile-first
          responsive grid.
        </p>
        <p>
          For a full reference on w3.css's grid system, please visit{" "}
          <a href="https://www.w3schools.com/w3css/w3css_grid.asp/">
            W3.CSS Responsive Fluid Grid
          </a>{" "}
          for in-depth information on usage.
        </p>
        <p>We will provide an overview below.</p>
        <h3>Columns and Rows</h3>
        <div className="w3-border">
          <div className="w3-row">
            <div className="w3-col m1 w3-center w3-grey">1</div>
            <div className="w3-col m1 w3-center">2</div>
            <div className="w3-col m1 w3-center w3-grey">3</div>
            <div className="w3-col m1 w3-center">4</div>
            <div className="w3-col m1 w3-center w3-grey">5</div>
            <div className="w3-col m1 w3-center">6</div>
            <div className="w3-col m1 w3-center w3-grey">7</div>
            <div className="w3-col m1 w3-center">8</div>
            <div className="w3-col m1 w3-center w3-grey">9</div>
            <div className="w3-col m1 w3-center">10</div>
            <div className="w3-col m1 w3-center w3-grey">11</div>
            <div className="w3-col m1 w3-center">12</div>
          </div>
          <div className="w3-row">
            <div className="w3-col w3-container m4 l3 w3-blue">
              <p>
                This part will occupy 12 columns on a small screen, 4 on a
                medium screen, and 3 on a large screen.
              </p>
            </div>
            <div className="w3-col m8 l9 w3-container w3-green">
              <p>
                This part will occupy 12 columns on a small screen, 8 on a
                medium screen, and 9 on a large screen.
              </p>
            </div>
          </div>
          <div className="w3-row">
            <div className="w3-col m1 w3-center w3-grey">1</div>
            <div className="w3-col m1 w3-center">2</div>
            <div className="w3-col m1 w3-center w3-grey">3</div>
            <div className="w3-col m1 w3-center">4</div>
            <div className="w3-col m1 w3-center w3-grey">5</div>
            <div className="w3-col m1 w3-center">6</div>
            <div className="w3-col m1 w3-center w3-grey">7</div>
            <div className="w3-col m1 w3-center">8</div>
            <div className="w3-col m1 w3-center w3-grey">9</div>
            <div className="w3-col m1 w3-center">10</div>
            <div className="w3-col m1 w3-center w3-grey">11</div>
            <div className="w3-col m1 w3-center">12</div>
          </div>
        </div>
        <CodeContainer text={column_sample} />
      </div>
    );
  }
}

export default Grid;
