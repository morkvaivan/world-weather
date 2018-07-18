import { connect } from 'react-redux';
import CitiesBar from '../components/CitiesBar.js';

function mapStateToProps(state) {
  const { cities } = state;

  return {
    cities
  };
}

export default connect(mapStateToProps)(CitiesBar);
