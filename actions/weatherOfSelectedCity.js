import { RECEIVE_WEATHER, REMOVE_WEATHER } from '../constants/weatherOfSelectedCity';

import fetch from 'isomorphic-fetch';
import { addErrorMessage, successWeather, requestWeather } from './ui';

export const receiveWeather = (data) => ({
  type: RECEIVE_WEATHER,
  data
});

export const fetchWeather = (city) => (dispatch) => {
  dispatch(requestWeather());

  const weatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=1c29a6168f8ee50b6749c0cf123fb156`;

  fetch(weatherUrl)
    .then((response) => response.json())
    .then((data) => {
      dispatch(receiveWeather(data));
      dispatch(successWeather());
    })
    .catch((e) => dispatch(addErrorMessage(`${e}`)));
};

export const removeWeather = () => ({
  type: REMOVE_WEATHER
});
