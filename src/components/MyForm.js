import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";

class MyForm extends Component {
  constructor(props) {
    super(props);
    this.renderInput = this.renderInput.bind(this);
  }

  renderInput({ input, meta, label, ...others }) {
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} {...others} />
      </div>
    );
  }

  render() {
    const { onSubmit } = this.props;

    return (
      <form onSubmit={onSubmit}>
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field
          name="email"
          component={this.renderInput}
          label="Enter Description"
        />
      </form>
    );
  }
}

export default reduxForm({
  form: "myForm"
})(MyForm);
