import React, { PropTypes } from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.submitSearchValue(this.refs.input.value);
  }

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        className="form"
      >
        <input
          ref="input"
          type="text"
        />
        <input
          type="submit"
          value=""
        />
      </form>
    );
  }
}

Form.propTypes = {
  submitSearchValue: PropTypes.func.isRequired
};

export default Form;
