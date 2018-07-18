import { removeErrorMessage } from '../actions/ui';
import { connect } from 'react-redux';
import ErrorMessages from '../components/ErrorMessages.js';

function mapStateToProps(state) {
  const { ui } = state;

  return {
    errorMessages: ui.errorMessages
  };
}

export default connect(mapStateToProps, { removeErrorMessage })(ErrorMessages);
