import { ADD_CITY, REMOVE_CITY } from '../constants/cities';
import fetch from 'isomorphic-fetch';
import { selectCity, deselectCity, requestWeather, successWeather, addErrorMessage } from './ui';

const addCity = (city) => ({
  type: ADD_CITY,
  city
});

export const addCityIfValid = (city) => (dispatch) => {
  dispatch(requestWeather());

  const weatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=1c29a6168f8ee50b6749c0cf123fb156`;

  fetch(weatherUrl)
    .then((response) => response.json())
    .then((data) => {
      dispatch(successWeather());
      dispatch(addCity(data.name));
      dispatch(selectCity(data.name));
    })
    .catch((e) => dispatch(addErrorMessage(`${e}`)));
};

const removeCity = (city) => ({
  type: REMOVE_CITY,
  city
});

export const removeAndDeselectCity = (city) => (dispatch, getState) => {
  if (city !== getState().ui.selectedCity) return dispatch(removeCity(city));
  dispatch(removeCity(city));
  dispatch(deselectCity());
};
