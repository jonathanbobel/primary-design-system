import React, { Component } from "react";

/* Import Components */
// import CheckBox from "../components/CheckBox";
import Input from "../Atoms/Input";
import Select from "../Atoms/Select";
import Button from "../Atoms/Button";
// import TextArea from "../components/TextArea";

class FormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formLabel: {
        formInput: "",
        select: ""
      },

      selectOptions: ["Option 1", "Option 2", "Option 3"]
    };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
  }

  /* This life cycle hook gets executed when the component mounts */

  handleFormSubmit() {
    // Form submission logic
  }
  handleClearForm() {
    // Logic for resetting the form
  }

  render() {
    return (
      <form className="my-5" onSubmit={this.handleFormSubmit}>
        <Input className={"form-control"} name={"Label 1"} title={"Label 1"} />{" "}
        <Input />
        {/* Name of the user */}
        <div className="">
          <Select
            title={"Options"}
            name={"options"}
            options={this.state.selectOptions}
            value={this.state.formLabel.options}
            placeholder={"Select One"}
            handleChange={this.handleInput}
          />
        </div>
        <div className="row mt-5 d-flex justify-content-center">
          <Button className="mr-3" label={"Submit"} title={"Submit"} />
          <Button className="disabled" title={"Cancel"} />
        </div>
      </form>
    );
  }
}
export default FormContainer;
