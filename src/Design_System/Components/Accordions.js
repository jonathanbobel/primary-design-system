import React, { Component } from "react";
import { initAccordion } from "../../js/accordion";
import CodeContainer from "../../Atomic_Elements/Molecules/CodeContainer";
import icons from "../../img/icons.svg";

const code_accordion = `<div id="accordionGroup" class="accordion" data-allow-multiple="true">
  <h3>
    <button aria-expanded="false" class="accordion-trigger" aria-controls="sect1" id="accordion1id">
      <span class="accordion-title">
        General Legal Compliance
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
  <div id="sect1" role="region" aria-labelledby="accordion1id" class="accordion-panel" hidden>
    <div>
      <p>Info 1</p>
    </div>
  </div>
  <h3>
    <button aria-expanded="false" class="accordion-trigger" aria-controls="sect2" id="accordion2id">
      <span class="accordion-title">
        Use of Company Name
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
  <div id="sect2" role="region" aria-labelledby="accordion2id" class="accordion-panel" hidden>
    <div>
      <p>Info 2</p>
    </div>
  </div>
  <h3>
    <button aria-expanded="false" class="accordion-trigger" aria-controls="sect3" id="accordion3id">
      <span class="accordion-title">
        Anti-Corruption
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
  <div id="sect3" role="region" aria-labelledby="accordion3id" class="accordion-panel" hidden>
    <div>
      <p>
        SW expects its suppliers to act with integrity. Suppliers
        shall not engage (directly or indirectly) in unethical activities with
        public or private parties such as offering bribes, kickbacks, or other
        improper payments for the purpose of gaining favorable treatment.
        Suppliers are expected to comply with the U.S Foreign Corrupt Practices
        Act as well as all other anti-bribery and anti-corruption laws in the
        countries where they conduct business.
      </p>
    </div>
  </div>
</div>`;

class Accordions extends Component {
  componentDidMount() {
    initAccordion();
  }
  render() {
    return (
      <div>
        <h1 className="title">Accordions</h1>
        <p>
          Accordions provide a way to group relevant pieces of content,
          benefiting the user by reducing page length and scrolling so they can
          more efficiently focus on the topics that matter to them. We use
          accordions for things like FAQs, colors, and product families where a
          user likely has a targeted question, color grouping, or product family
          that they want to learn more about.
        </p>
        <div id="accordionGroup" className="accordion" data-allow-multiple>
          <h3>
            <button
              aria-expanded="false"
              className="accordion-trigger"
              aria-controls="sect1"
              id="accordion1id"
            >
              <span className="accordion-title">
                General Legal Compliance
                <span className="accordion-icon">
                  <svg className="icon-svg expand">
                    <use xlinkHref={`${icons}#expand`} />
                  </svg>
                  <svg className="icon-svg collapse-minus">
                    <use xlinkHref={`${icons}#collapse`} />
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
              <p>Info 1</p>
            </div>
          </div>
          <h3>
            <button
              aria-expanded="false"
              className="accordion-trigger"
              aria-controls="sect2"
              id="accordion2id"
            >
              <span className="accordion-title">
                Use of Company Name
                <span className="accordion-icon">
                  <svg className="icon-svg expand">
                    <use xlinkHref={`${icons}#expand`} />
                  </svg>
                  <svg className="icon-svg collapse-minus">
                    <use xlinkHref={`${icons}#collapse`} />
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
            hidden
          >
            <div>
              <p>Info 2</p>
            </div>
          </div>
          <h3>
            <button
              aria-expanded="false"
              className="accordion-trigger"
              aria-controls="sect3"
              id="accordion3id"
            >
              <span className="accordion-title">
                Anti-Corruption
                <span className="accordion-icon">
                  <svg className="icon-svg expand">
                    <use xlinkHref={`${icons}#expand`} />
                  </svg>
                  <svg className="icon-svg collapse-minus">
                    <use xlinkHref={`${icons}#collapse`} />
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
              <p>
                SW expects its suppliers to act with integrity.
                Suppliers shall not engage (directly or indirectly) in unethical
                activities with public or private parties such as offering
                bribes, kickbacks, or other improper payments for the purpose of
                gaining favorable treatment. Suppliers are expected to comply
                with the U.S Foreign Corrupt Practices Act as well as all other
                anti-bribery and anti-corruption laws in the countries where
                they conduct business.
              </p>
            </div>
          </div>
        </div>
        <CodeContainer text={code_accordion} />
      </div>
    );
  }
}

export default Accordions;
