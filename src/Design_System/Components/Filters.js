import React, { Component } from "react";
import Pill from "../../Atomic_Elements/Atoms/Pill";
import SideFilters from "../../Atomic_Elements/Molecules/SideFilters";
import CodeContainer from "../../Atomic_Elements/Molecules/CodeContainer";

const pill = `<a class="pill" href="">
  <span>Selection</span>
  <svg class="icon-svg close-x">
    <use xlink:href="../img/icons.svg#close" />
  </svg>
</a>`;
const filter = `<div class="filter">
  <div id="accordionGroup" class="accordion" data-allow-multiple="true">
    <h3>
      <button
        aria-expanded="false"
        class="accordion-trigger"
        aria-controls="sect1"
        id="accordion1id"
      >
        <span class="accordion-title">
          Content Type 1
          <span class="accordion-icon">
            <svg class="icon-svg expand">
              <use xlink:href="../img/icons.svg#expand"></use>
            </svg>
            <svg class="icon-svg collapse-minus">
              <use xlink:href="../img/icons.svg#collapse"></use>
            </svg>
          </span>
        </span>
      </button>
    </h3>
    <div
      id="sect1"
      role="region"
      aria-labelledby="accordion1id"
      class="accordion-panel"
      hidden
    >
      <div>
        <div class="form">
          <div class="checkbox-container">
            <label>
              Articles (2)
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>
            <label>
              Articles (2)
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>
            <label>
              Articles (2)
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>
          </div>
        </div>
      </div>
    </div>
    <h3>
      <button
        aria-expanded="true"
        class="accordion-trigger"
        aria-controls="sect2"
        id="accordion2id"
      >
        <span class="accordion-title">
          Content Type 2
          <span class="accordion-icon">
            <svg class="icon-svg expand">
              <use xlink:href="../img/icons.svg#expand"></use>
            </svg>
            <svg class="icon-svg collapse-minus">
              <use xlink:href="../img/icons.svg#collapse"></use>
            </svg>
          </span>
        </span>
      </button>
    </h3>
    <div
      id="sect2"
      role="region"
      aria-labelledby="accordion2id"
      class="accordion-panel"
    >
      <div>
        <div class="form">
          <div class="checkbox-container">
            <label>
              Articles (2)
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>
            <label>
              Articles (2)
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>
            <label>
              Articles (2)
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>
            <label>
              Articles (2)
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>
            <label>
              Articles (2)
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>
            <label>
              Articles (2)
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`;
const filter_layout = `<div class="filter-container">
  <div class="filter">
    <h4 class="mb-3">Filters:</h4>
    <div class="accordion" data-allow-multiple="true">
      <h3>
        <button
          aria-expanded="false"
          class="accordion-trigger"
          aria-controls="sect3"
          id="accordion3id"
        >
          <span class="accordion-title">
            Content Type
            <span class="accordion-icon">
              <svg class="icon-svg expand">
                <use xlink:href="../img/icons.svg#expand"></use>
              </svg>
              <svg class="icon-svg collapse-minus">
                <use xlink:href="../img/icons.svg#collapse"></use>
              </svg>
            </span>
          </span>
        </button>
      </h3>
      <div
        id="sect3"
        role="region"
        aria-labelledby="accordion3id"
        class="accordion-panel"
        hidden
      >
        <div>
          <div class="form">
            <div class="checkbox-container">
              <label>
                Articles (2)
                <input type="checkbox" />
                <span class="checkmark"></span>
              </label>
              <label>
                Articles (2)
                <input type="checkbox" />
                <span class="checkmark"></span>
              </label>
              <label>
                Articles (2)
                <input type="checkbox" />
                <span class="checkmark"></span>
              </label>
            </div>
          </div>
        </div>
      </div>
      <h3>
        <button
          aria-expanded="true"
          class="accordion-trigger"
          aria-controls="sect4"
          id="accordion4id"
        >
          <span class="accordion-title">
            Content Type
            <span class="accordion-icon">
              <svg class="icon-svg expand">
                <use xlink:href="../img/icons.svg#expand"></use>
              </svg>
              <svg class="icon-svg collapse-minus">
                <use xlink:href="../img/icons.svg#collapse"></use>
              </svg>
            </span>
          </span>
        </button>
      </h3>
      <div
        id="sect4"
        role="region"
        aria-labelledby="accordion4id"
        class="accordion-panel"
      >
        <div>
          <div class="form">
            <div class="checkbox-container">
              <label>
                Articles (2)
                <input type="checkbox" />
                <span class="checkmark"></span>
              </label>
              <label>
                Articles (2)
                <input type="checkbox" />
                <span class="checkmark"></span>
              </label>
              <label>
                Articles (2)
                <input type="checkbox" />
                <span class="checkmark"></span>
              </label>
              <label>
                Articles (2)
                <input type="checkbox" />
                <span class="checkmark"></span>
              </label>
              <label>
                Articles (2)
                <input type="checkbox" />
                <span class="checkmark"></span>
              </label>
              <label>
                Articles (2)
                <input type="checkbox" />
                <span class="checkmark"></span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="results-container">
    <header>
      <div class="selections">
        <h4>Selections:</h4>
        <Pill title="Selection" />
        <Pill title="Selection" />
        <Pill title="Selection" />
      </div>
      <div class="text-link">
        <svg class="icon-svg account">
          <use xlink:href="../img/icons.svg#account" />
        </svg>
        <a class="link no-hover" href="">
          Text Link Normal
        </a>
      </div>
    </header>
    <div class="results">
      <p>Results</p>
    </div>
  </div>
</div>`;

class Filters extends Component {
  componentDidMount() {
    const script = document.createElement("script");

    script.src = "./js/accordion.js";
    script.async = true;

    document.body.appendChild(script);
  }
  render() {
    return (
      <div>
        <h1 className="title">Filters</h1>
        <h3>Pills</h3>
        <div className="pill-container">
          <a className="pill" href={null}>
            <span>Selection</span>
            <svg className="icon-svg close-x">
              <use xlinkHref="../img/icons.svg#close" />
            </svg>
          </a>
          <a className="pill hover" href={null}>
            <span>Selection Hover</span>
            <svg className="icon-svg close-x">
              <use xlinkHref="../img/icons.svg#close" />
            </svg>
          </a>
        </div>
        <CodeContainer text={pill} />
        <h3>Filters</h3>
        <SideFilters />
        <CodeContainer text={filter} />
        <h3>Filter Layout</h3>
        <div className="filter-container">
          <div className="filter">
            <h4 className="mb-3">Filters:</h4>
            <div className="accordion" data-allow-multiple="true">
              <h3>
                <button
                  aria-expanded="false"
                  className="accordion-trigger"
                  aria-controls="sect3"
                  id="accordion3id"
                >
                  <span className="accordion-title">
                    Content Type
                    <span className="accordion-icon">
                      <svg className="icon-svg expand">
                        <use xlinkHref="../img/icons.svg#expand" />
                      </svg>
                      <svg className="icon-svg collapse-minus">
                        <use xlinkHref="../img/icons.svg#collapse" />
                      </svg>
                    </span>
                  </span>
                </button>
              </h3>
              <div
                id="sect3"
                role="region"
                aria-labelledby="accordion3id"
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
                  aria-controls="sect4"
                  id="accordion4id"
                >
                  <span className="accordion-title">
                    Content Type
                    <span className="accordion-icon">
                      <svg className="icon-svg expand">
                        <use xlinkHref="../img/icons.svg#expand" />
                      </svg>
                      <svg className="icon-svg collapse-minus">
                        <use xlinkHref="../img/icons.svg#collapse" />
                      </svg>
                    </span>
                  </span>
                </button>
              </h3>
              <div
                id="sect4"
                role="region"
                aria-labelledby="accordion4id"
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
          <div className="results-container">
            <header>
              <div className="selections">
                <h4>Selections:</h4>
                <Pill title="Selection" />
                <Pill title="Selection" />
                <Pill title="Selection" />
              </div>
              <div className="text-link">
                <svg className="icon-svg account">
                  <use xlinkHref="../img/icons.svg#account" />
                </svg>
                <a className="link no-hover" href="">
                  Text Link Normal
                </a>
              </div>
            </header>
            <div className="results">
              <p>Results</p>
            </div>
          </div>
        </div>
        <CodeContainer text={filter_layout} />
      </div>
    );
  }
}

export default Filters;
