import React, { PropTypes } from 'react';

class ErrorMessages extends React.Component {
  constructor(props) {
    super(props);

    this.removeErrorMessage = this.removeErrorMessage.bind(this);
  }

  removeErrorMessage(item) {
    this.props.removeErrorMessage(item);
  }

  render() {
    return (
      <div>
        {this.props.errorMessages.map((item) => (
          <div
            key={item}
            className="error_popUp"
          >
            {item}
            <button onClick={() => this.removeErrorMessage(item)} >&times;</button>
          </div>
        ))}
      </div>
    );
  }
}

ErrorMessages.propTypes = {
  removeErrorMessage: PropTypes.func.isRequired,
  errorMessages: PropTypes.array.isRequired
};

export default ErrorMessages;
