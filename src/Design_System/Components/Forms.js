import React, { Component } from "react";
import CodeContainer from "../../Atomic_Elements/Molecules/CodeContainer";

const input = `<div class="input-container">
    <label for="inputtext">Input Text:</label>
    <input type="text" name="inputtext" id="inputtext" />
</div>`;
const input_error = ` <div class="input-container">
  <label for="inputtext">* Input Text:</label>
  <input class="error" type="text" name="inputtext" id="inputtext"/>
  <span>* This field is required</span>
</div>`;
const select = `<div class="select-container">
    <label for="select">Select Text:</label>
    <select id="select" name="select">
    <option value="0" disabled>
        Select One
    </option>
    <option value="1">Selection 1</option>
    <option value="2">Selection 2</option>
    <option value="3">Selection 3</option>
    <option value="4">Selection 4</option>
    <option value="5">Selection 5</option>
    <option value="6">Selection 6</option>
    <option value="7">Selection 7</option>
    <option value="8">Selection 8</option>
    <option value="9">Selection 9</option>
    <option value="10">Selection 10</option>
    </select>
</div>`;
const checkbox = `<div class="checkbox-container">
    <label>
    One
        <input type="checkbox" />
        <span class="checkmark"></span>
    </label>
    <label>
    Two
        <input type="checkbox" />
        <span class="checkmark"></span>
    </label>
    <label>
    Three
        <input type="checkbox" />
        <span class="checkmark"></span>
    </label>
</div>`;
const radio = `<div class="radio-container">
    <label class="container">
    One
        <input type="radio" name="radio" />
        <span class="checkmark"></span>
    </label>
    <label class="container">
    Two
        <input type="radio" name="radio" />
        <span class="checkmark"></span>
    </label>
    <label class="container">
    Three
        <input type="radio" name="radio" />
        <span class="checkmark"></span>
    </label>
</div>`;

class Forms extends Component {
  render() {
    return (
      <div>
        <h1 className="title">Forms</h1>
        <p>
          Forms provide a way for users to easily input and submit information.
          Form input fields must always have a label and be accessible to
          technology such as screen readers.{" "}
        </p>
        <h3>Input Fields</h3>
        <div className="form">
          <div className="input-container">
            <label htmlFor="inputtext">Input Text:</label>
            <input type="text" name="inputtext" id="inputtext" />
          </div>
          <CodeContainer text={input} />
          <div className="input-container">
            <label htmlFor="inputtext">* Input Text:</label>
            <input
              className="error"
              type="text"
              name="inputtext"
              id="inputtext"
            />
            <span>* This field is required</span>
          </div>
          <CodeContainer text={input_error} />
        </div>
        <h3>Dropdown</h3>
        <div className="form">
          <div className="select-container">
            <label htmlFor="select">Select Text:</label>
            <select id="select" name="select">
              <option value="0" disabled>
                Select One
              </option>
              <option value="1">Selection 1</option>
              <option value="2">Selection 2</option>
              <option value="3">Selection 3</option>
              <option value="4">Selection 4</option>
              <option value="5">Selection 5</option>
              <option value="6">Selection 6</option>
              <option value="7">Selection 7</option>
              <option value="8">Selection 8</option>
              <option value="9">Selection 9</option>
              <option value="10">Selection 10</option>
            </select>
          </div>
        </div>
        <CodeContainer text={select} />
        <h3>Checkbox</h3>
        <div className="form">
          <div className="checkbox-container">
            <label>
              One
              <input type="checkbox" />
              <span className="checkmark" />
            </label>
            <label>
              Two
              <input type="checkbox" />
              <span className="checkmark" />
            </label>
            <label>
              Three
              <input type="checkbox" />
              <span className="checkmark" />
            </label>
          </div>
        </div>
        <CodeContainer text={checkbox} />
        <h3>Radio</h3>
        <div className="form">
          <div className="radio-container">
            <label>
              One
              <input type="radio" name="radio" />
              <span className="checkmark" />
            </label>
            <label>
              Two
              <input type="radio" name="radio" />
              <span className="checkmark" />
            </label>
            <label>
              Three
              <input type="radio" name="radio" />
              <span className="checkmark" />
            </label>
          </div>
        </div>
        <CodeContainer text={radio} />
        <h3>Sample Form</h3>
        <p>
          Here is a sample address form for use combining various input items
          from above
        </p>
        <form>
          <div class="input-container">
            <label for="firstname">First Name</label>
            <input type="text" name="firstname" id="firstname" required />
          </div>
          <div class="input-container">
            <label for="lastname">Last Name</label>
            <input type="text" name="lastname" id="lastame" />
          </div>
          <div class="input-container">
            <label for="company">Company</label>
            <input type="text" name="company" id="company" />
          </div>
          <div class="input-container">
            <label for="streetaddress">Street Address</label>
            <input type="text" name="streetaddress" id="streetaddress" />
          </div>
          <div class="input-container">
            <label for="streetaddress-2">Street Address 2</label>
            <input type="text" name="streetaddres-2" id="streetaddress-2" />
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
          <p class="notification">Account Notifications</p>
          <div class="checkbox-container mb-3">
            <label>
              Please send me notifcations regarding my account.
              <input type="checkbox" />
              <span class="checkmark" />
            </label>
          </div>
          <div
            role="group"
            aria-labelledby="pick_option"
            className="radio-container mb-5"
          >
            <p class="notification" id="pick_option">
              Pick an Option
            </p>
            <label>
              Option 1
              <input type="radio" name="radio" />
              <span className="checkmark" />
            </label>
            <label>
              Option 2
              <input type="radio" name="radio" />
              <span className="checkmark" />
            </label>
          </div>
          <button>Submit Form</button>
        </form>
      </div>
    );
  }
}

export default Forms;
