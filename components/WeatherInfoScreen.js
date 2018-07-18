import React, { PropTypes } from 'react';

class WeatherInfoScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchWeather(this.props.ui.selectedCity);
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.ui.selectedCity) return this.props.removeWeather();

    if (nextProps.ui.selectedCity !== this.props.ui.selectedCity) {
      this.props.fetchWeather(nextProps.ui.selectedCity);
    }
  }

  render() {
    const { city, temp, windSpeed, windDirection,
            weatherDescription, weatherImage } = this.props.weatherOfSelectedCity;

    if (this.props.ui.isFetching) return <div>Loading...</div>;

    return (
      <div className="weather_info_screen" >
        <div className={weatherImage} ></div>
        <p className="info_city" >City:
          <span>
            {city}
          </span>
        </p>
        <p className="info_weather" >Weather:
          <span>
            {weatherDescription}
          </span>
        </p>
        <p className="info_temperature" >Temperature:
          <span>
            {temp}
          </span>
        </p>
        <p className="info_windSpeed" >Wind speed:
          <span>
            {windSpeed}
          </span>
        </p>
        <p className="info_windDirection" >Wind direction:
          <span>
            {windDirection}
          </span>
        </p>
      </div>
    );
  }
}

WeatherInfoScreen.propTypes = {
  ui: PropTypes.object.isRequired,
  weatherOfSelectedCity: PropTypes.object.isRequired,
  fetchWeather: PropTypes.func.isRequired,
  removeWeather: PropTypes.func.isRequired
};

export default WeatherInfoScreen;
