import { selectCity } from '../actions/ui';
import { removeAndDeselectCity } from '../actions/cities';
import { connect } from 'react-redux';
import CityLink from '../components/CityLink.js';

function mapStateToProps(state) {
  const { ui } = state;

  return {
    selectedCity: ui.selectedCity
  };
}

const actionMap = {
  removeAndDeselectCity,
  selectCity
};

export default connect(mapStateToProps, actionMap)(CityLink);
