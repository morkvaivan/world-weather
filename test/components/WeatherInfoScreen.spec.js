import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import { spy } from 'sinon';
import WeatherInfoScreen from '../../components/WeatherInfoScreen';

describe('<WeatherInfoScreen/>', () => {
  it('should render empty div with "weather_hot" className', () => {
    const weatherOfSelectedCity = { weatherImage: 'weather_hot' };
    const ui = { isFetching: false };

    const wrapper = shallow(
      <WeatherInfoScreen
        ui={ui}
        weatherOfSelectedCity={weatherOfSelectedCity}
        fetchWeather={() => true}
        removeWeather={() => true}
      />
    );

    expect(wrapper.find('.weather_hot').text()).to.equal('');
  });

  it('should render empty div with "weather_cold" className', () => {
    const weatherOfSelectedCity = { weatherImage: 'weather_cold' };
    const ui = { isFetching: false };

    const wrapper = shallow(
      <WeatherInfoScreen
        ui={ui}
        weatherOfSelectedCity={weatherOfSelectedCity}
        fetchWeather={() => true}
        removeWeather={() => true}
      />
    );

    expect(wrapper.find('.weather_cold').text()).to.equal('');
  });

  it('should render correct weather data ', () => {
    const weatherOfSelectedCity = {
      city: ` Kiev, UA.`,
      temp: ` 274 degrees Kelvin.`,
      windSpeed: ` 3.42 meter/sec.`,
      weatherDescription: ` light rain.`,
      windDirection: ` 165.001  degrees (meteorological).`
    };
    const ui = { isFetching: false };

    const wrapper = shallow(
      <WeatherInfoScreen
        ui={ui}
        weatherOfSelectedCity={weatherOfSelectedCity}
        fetchWeather={() => true}
        removeWeather={() => true}
      />
    );

    expect(wrapper.find('.info_city').text()).to.equal('City: Kiev, UA.');
    expect(wrapper.find('.info_weather').text()).to.equal('Weather: light rain.');
    expect(wrapper.find('.info_temperature').text()).to.equal('Temperature: 274 degrees Kelvin.');
    expect(wrapper.find('.info_windSpeed').text()).to.equal('Wind speed: 3.42 meter/sec.');
    expect(wrapper.find('.info_windDirection').text()).to.equal('Wind direction: 165.001  degrees (meteorological).');
  });

  it('should render spinner "Loading..." ', () => {
    const weatherOfSelectedCity = {};
    const ui = { isFetching: true };

    const wrapper = shallow(
      <WeatherInfoScreen
        ui={ui}
        weatherOfSelectedCity={weatherOfSelectedCity}
        fetchWeather={() => true}
        removeWeather={() => true}
      />
    );

    expect(wrapper.text()).to.equal('Loading...');
  });

  it('should calls fetchWeather when componentDidMount', () => {
    const fetchWeatherSpy = spy();

    const ui = { selectedCity: 'Isachsen' };
    const weatherOfSelectedCity = {};

    const wrapper = mount(
      <WeatherInfoScreen
        ui={ui}
        weatherOfSelectedCity={weatherOfSelectedCity}
        fetchWeather={fetchWeatherSpy}
        removeWeather={() => true}
      />
    );

    expect(fetchWeatherSpy.calledOnce).to.equal(true);
  });

  it('calls removeWeather when next props is nothing', () => {
    const removeWeatherSpy = spy();

    const ui = { selectedCity: 'Isachsen' };
    const weatherOfSelectedCity = {};

    const wrapper = mount(
      <WeatherInfoScreen
        ui={ui}
        weatherOfSelectedCity={weatherOfSelectedCity}
        fetchWeather={() => true}
        removeWeather={removeWeatherSpy}
      />
    );

    wrapper.setProps({ ui: {} });
    expect(removeWeatherSpy.calledOnce).to.equal(true);
  });

  it('calls fetchWeather when next props is new', () => {
    const fetchWeatherSpy = spy();

    const ui = { selectedCity: 'Isachsen' };
    const weatherOfSelectedCity = {};

    const wrapper = mount(
      <WeatherInfoScreen
        ui={ui}
        weatherOfSelectedCity={weatherOfSelectedCity}
        fetchWeather={fetchWeatherSpy}
        removeWeather={() => true}
      />
    );

    wrapper.setProps({ ui: { selectedCity: 'Kiev' } });
    expect(fetchWeatherSpy.calledTwice).to.equal(true);
  });

  it('calls nothing  when next props is equal this.props', () => {
    const fetchWeatherSpy = spy();
    const removeWeatherSpy = spy();

    const ui = { selectedCity: 'Isachsen' };
    const weatherOfSelectedCity = {};

    const wrapper = mount(
      <WeatherInfoScreen
        ui={ui}
        weatherOfSelectedCity={weatherOfSelectedCity}
        fetchWeather={fetchWeatherSpy}
        removeWeather={removeWeatherSpy}
      />
    );

    wrapper.setProps({ ui: { selectedCity: 'Isachsen' } });
    expect(fetchWeatherSpy.calledOnce).to.equal(true);
    expect(removeWeatherSpy.calledOnce).to.equal(false);
  });

  
});


