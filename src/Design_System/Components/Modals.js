import React, { Component } from "react";
import CodeContainer from "../../Atomic_Elements/Molecules/CodeContainer";

const modal = ``;

class Modal extends Component {
  componentDidMount() {
    const script = document.createElement("script");

    script.src = "./js/accordion.js";
    script.async = true;

    document.body.appendChild(script);

    var navDialogEl = document.querySelector(".dialog");
    var dialogOverlay = document.querySelector(".dialog-overlay");
    var myDialog = new Dialog(navDialogEl, dialogOverlay);
    myDialog.addEventListeners(".open-dialog", ".close-dialog");
  }
  render() {
    return (
      <div>
        <div
          class="dialog"
          role="dialog"
          aria-labelledby="dialog-title"
          aria-describedby="dialog-description"
        >
          <header>
            <p>New Estimate</p>
            <button type="button" aria-label="Close" class="close-dialog close">
              <svg className="icon-svg close-x">
                <use xlink:href="../img/icons.svg#close" />
              </svg>
            </button>
          </header>
          <form>
            <div class="input-container">
              <label for="projectname">Project Name</label>
              <input type="text" name="projectname" id="projectname" />
            </div>
            <div class="input-container">
              <label for="streetaddress">Street Address</label>
              <input type="text" name="streetaddress" id="streetaddress" />
            </div>
            <div class="input-container">
              <label for="city">City</label>
              <input type="text" name="city" id="city" />
            </div>
            <div class="select-container">
              <label for="state">State</label>
              <select id="state">
                <option disabled>Select One</option>
                <option value="AL">AL</option>
                <option value="AK">AK</option>
                <option value="AR">AR</option>
                <option value="AZ">AZ</option>
                <option value="CA">CA</option>
                <option value="CO">CO</option>
                <option value="CT">CT</option>
                <option value="DC">DC</option>
                <option value="DE">DE</option>
                <option value="FL">FL</option>
                <option value="GA">GA</option>
                <option value="HI">HI</option>
                <option value="IA">IA</option>
                <option value="ID">ID</option>
                <option value="IL">IL</option>
                <option value="IN">IN</option>
                <option value="KS">KS</option>
                <option value="KY">KY</option>
                <option value="LA">LA</option>
                <option value="MA">MA</option>
                <option value="MD">MD</option>
                <option value="ME">ME</option>
                <option value="MI">MI</option>
                <option value="MN">MN</option>
                <option value="MO">MO</option>
                <option value="MS">MS</option>
                <option value="MT">MT</option>
                <option value="NC">NC</option>
                <option value="NE">NE</option>
                <option value="NH">NH</option>
                <option value="NJ">NJ</option>
                <option value="NM">NM</option>
                <option value="NV">NV</option>
                <option value="NY">NY</option>
                <option value="ND">ND</option>
                <option value="OH">OH</option>
                <option value="OK">OK</option>
                <option value="OR">OR</option>
                <option value="PA">PA</option>
                <option value="RI">RI</option>
                <option value="SC">SC</option>
                <option value="SD">SD</option>
                <option value="TN">TN</option>
                <option value="TX">TX</option>
                <option value="UT">UT</option>
                <option value="VT">VT</option>
                <option value="VA">VA</option>
                <option value="WA">WA</option>
                <option value="WI">WI</option>
                <option value="WV">WV</option>
                <option value="WY">WY</option>
              </select>
            </div>
            <div class="input-container zip">
              <label for="zip">Zip</label>
              <input type="text" name="zip" id="zip" />
            </div>
            <div class="select-container mb-5">
              <label for="manufacturer">Manufacturer</label>
              <select id="manufacturer">
                <option disabled>Select One</option>
                <option>Manufacturer 1</option>
                <option>Manufacturer 2</option>
                <option>Manufacturer 3</option>
              </select>
            </div>
            <div class="button-container">
              <button
                type="button"
                onclick="location.href='/smartbuild-credentials.html';"
                class="mr-2"
              >
                Submit
              </button>
              <button
                type="button"
                aria-label="Close"
                class="text close-dialog"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
        <div class="dialog-overlay" tabindex="-1" />
        <CodeContainer text={modal} />
      </div>
    );
  }
}

export default Modal;
