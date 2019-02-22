import React, { Component } from "react";
import { connect } from 'react-redux';
import { reduxForm, Field } from "redux-form";
import { changeProfile } from '../actions/profile.action';

class MyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editable: true
    };
    this.renderInput = this.renderInput.bind(this);
    this.enableEdit = this.enableEdit.bind(this);
  }

  renderInput({ input, meta, label, ...others }) {
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} {...others} />
      </div>
    );
  }

  enableEdit(evt) {
    evt.preventDefault();
    const {changeProfile: _changeProfile} = this.props;
    // this.setState({
    //   editable: true
    // });
    _changeProfile({
      title: 'Jeremy',
      email: 'Lu'
    });
  }

  // componentDidMount() {
  //   console.log('MyForm componentDidMount');
  //   const { initialize, initialValues } = this.props;
  //   initialize(initialValues);
  // }

  render() {
    const { onSubmit } = this.props;
    const { editable } = this.state;
    return (
      <form onSubmit={onSubmit}>
        <Field
          name="title"
          type="text"
          component={this.renderInput}
          label="Enter Title"
          disabled={!editable}
        />
        <Field
          name="email"
          type="text"
          component={this.renderInput}
          label="Enter Description"
          disabled={!editable}
        />
        <button onClick={this.enableEdit}>Enable Edit</button>
      </form>
    );
  }
}

export default connect(
  state => ({
    initialValues: state.profile.user // pull initial values from account reducer
  }),
  { changeProfile }               // bind account loading action creator
)(reduxForm({
  form: 'myForm',
  enableReinitialize : true
})(MyForm));
