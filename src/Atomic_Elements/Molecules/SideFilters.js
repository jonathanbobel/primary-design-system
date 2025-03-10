import React, { Component } from "react";

class SideFilters extends Component {
  render() {
    return (
      <div>
        <div className="filter">
          <div className="accordion" data-allow-multiple="true">
            <h3>
              <button
                aria-expanded="false"
                className="accordion-trigger"
                aria-controls="sect1"
                id="accordion1id"
              >
                <span className="accordion-title">
                  Content Type
                  <span className="accordion-icon">
                    <svg className="icon-svg expand">
                      <use xlinkHref="./img/icons.svg#expand" />
                    </svg>
                    <svg className="icon-svg collapse-minus">
                      <use xlinkHref="./img/icons.svg#collapse" />
                    </svg>
                  </span>
                </span>
              </button>
            </h3>
            <div
              id="sect1"
              role="region"
              aria-labelledby="accordion1id"
              className="accordion-panel"
              hidden
            >
              <div>
                <div className="form">
                  <div className="checkbox-container">
                    <label>
                      Articles (2)
                      <input type="checkbox" />
                      <span className="checkmark" />
                    </label>
                    <label>
                      Articles (2)
                      <input type="checkbox" />
                      <span className="checkmark" />
                    </label>
                    <label>
                      Articles (2)
                      <input type="checkbox" />
                      <span className="checkmark" />
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <h3>
              <button
                aria-expanded="true"
                className="accordion-trigger"
                aria-controls="sect2"
                id="accordion2id"
              >
                <span className="accordion-title">
                  Content Type
                  <span className="accordion-icon">
                    <svg className="icon-svg expand">
                      <use xlinkHref="./img/icons.svg#expand" />
                    </svg>
                    <svg className="icon-svg collapse-minus">
                      <use xlinkHref="./img/icons.svg#collapse" />
                    </svg>
                  </span>
                </span>
              </button>
            </h3>
            <div
              id="sect2"
              role="region"
              aria-labelledby="accordion2id"
              className="accordion-panel"
            >
              <div>
                <div className="form">
                  <div className="checkbox-container">
                    <label>
                      Articles (2)
                      <input type="checkbox" />
                      <span className="checkmark" />
                    </label>
                    <label>
                      Articles (2)
                      <input type="checkbox" />
                      <span className="checkmark" />
                    </label>
                    <label>
                      Articles (2)
                      <input type="checkbox" />
                      <span className="checkmark" />
                    </label>
                    <label>
                      Articles (2)
                      <input type="checkbox" />
                      <span className="checkmark" />
                    </label>
                    <label>
                      Articles (2)
                      <input type="checkbox" />
                      <span className="checkmark" />
                    </label>
                    <label>
                      Articles (2)
                      <input type="checkbox" />
                      <span className="checkmark" />
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SideFilters;
