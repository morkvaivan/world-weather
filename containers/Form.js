import { submitSearchValue } from '../actions/form';
import { connect } from 'react-redux';
import Form from '../components/Form.js';

function mapStateToProps(state) {
  const { form } = state;

  return {
    form
  };
}

const actionMap = {
  submitSearchValue
};

export default connect(mapStateToProps, actionMap)(Form);
