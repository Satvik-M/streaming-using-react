import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamForm extends React.Component {
  renderError(meta) {
    if (meta.touched && meta.error) {
      return (
        <div className="ui error message">
          <div className="header">{meta.error}</div>
        </div>
      );
    }
  }

  renderInput = (formProps) => {
    return (
      <div className="field">
        <label className="ui label">{formProps.label}</label>
        <input {...formProps.input} />
        {this.renderError(formProps.meta)}
      </div>
    );
  };

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter description"
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const error = {};
  if (!formValues.title) {
    error.title = "You must enter a title";
  }
  if (!formValues.description) {
    error.description = "You must enter a description";
  }
  return error;
};

// export default connect(null, { createStream })(
//   reduxForm({ form: "streamCreate", validate: validate })(StreamForm)
// );

export default reduxForm({ form: "streamForm", validate })(StreamForm);
