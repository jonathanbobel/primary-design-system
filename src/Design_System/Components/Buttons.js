import React, { Component } from "react";
import Button from "../../Atomic_Elements/Atoms/Button";
import CodeContainer from "../../Atomic_Elements/Molecules/CodeContainer";

/*eslint no-script-url: "error"*/

const code_button = `<div><button label="Submit">Button</button></div>`;
const code_button_primary = `<div><button class="primary" label="Submit">Primary Button</button></div>`;
const code_button_secondary = `<div><button class="secondary" label="Submit">Secondary Button</button></div>`;
const code_text_link = `<div class="button-container">
  <div class="text-link>
    <svg class="icon-svg account">
      <use xlink:href="../img/icons.svg#account" />
    </svg>
    <a class="link no-hover" href="">Text Link Normal</a>
  </div>
</div>`;
const anchor_button_primary = `<a class="button" href="">Primary Anchor Button</a>`;

class Buttons extends Component {
  render() {
    return (
      <div className="buttons">
        <h1 className="title">Buttons & Links</h1>
        <p className="mb-3">
          Whether it’s to submit a form or apply to an open position, buttons
          and links are the way our users interact with our websites. For
          optimum communication, button text should be clear and concise, not to
          exceed one line of text.
        </p>
        <h3>Primary Buttons</h3>
        <p>
          We have two styles of Primary buttons, one with a blue background and
          one with a white background. The white button is only to be used over
          dark images or dark backgrounds, where the contrast ratio of the
          primary CTA doesn’t pass compliance. Note: the white background button
          is shown below over a gray background for display purposes only.
        </p>
        <div className="button-container">
          <Button label="Submit" title="Primary Button" />
        </div>
        <CodeContainer text={code_button} />
        <div className="button-container button-container-dark">
          <Button
            className="no-hover primary"
            label="Submit"
            title="Primary White Button"
          />
        </div>
        <CodeContainer text={code_button_primary} />
        <h3>Secondary Button</h3>
        <div className="button-container">
          <Button
            className="secondary"
            label="Submit"
            title="Secondary Button"
          />
        </div>
        <CodeContainer text={code_button_secondary} />
        <h3>Text Links</h3>
        <p>
          Plain text links are usually within paragraph/body copy and should be
          underlined to indicate it is a link. Text links that include an icon
          use the same styling, however, the icon is never underlined.
        </p>
        <div className="button-container">
          <div className="text-link">
            <svg className="icon-svg account">
              <use xlinkHref="../img/icons.svg#account" />
            </svg>
            <a className="link no-hover" href={null}>
              Text Link Normal
            </a>
          </div>
        </div>
        <CodeContainer text={code_text_link} />
        <h3>Anchor Tags with Button Styles</h3>
        <p>
          Sometimes you need an anchor tag to look like a button but behave like
          an anchor tag. Here are your options.
        </p>
        <div className="button-container">
          <a className="button mr-2" href={""}>
            Primary Anchor Button
          </a>
        </div>
        <CodeContainer text={anchor_button_primary} />
        <div className="button-container button-container-dark">
          <a className="button primary mr-2" href={""}>
            Primary White Anchor Button
          </a>
        </div>
        <CodeContainer text={anchor_button_primary} />

        <div className="button-container">
          <a className="button secondary" href={""}>
            Secondary Anchor Button
          </a>
        </div>
        <CodeContainer text={anchor_button_primary} />
      </div>
    );
  }
}

export default Buttons;
