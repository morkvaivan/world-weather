import { fetchWeather, removeWeather } from '../actions/weatherOfSelectedCity';
import { connect } from 'react-redux';
import WeatherInfoScreen from '../components/WeatherInfoScreen.js';

function mapStateToProps(state) {
  const { ui, weatherOfSelectedCity } = state;

  return {
    ui,
    weatherOfSelectedCity
  };
}

const actionMap = {
  fetchWeather,
  removeWeather
};

export default connect(mapStateToProps, actionMap)(WeatherInfoScreen);
