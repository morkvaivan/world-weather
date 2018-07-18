import { SELECT_CITY, DESELECT_CITY, SUCCESS_WEATHER, REQUEST_WEATHER, REMOVE_ERROR_MESSAGE, ADD_ERROR_MESSAGE } from '../constants/ui';

export const selectCity = (city) => ({
  type: SELECT_CITY,
  city
});

export const deselectCity = () => ({
  type: DESELECT_CITY
});

export const successWeather = () => ({
  type: SUCCESS_WEATHER
});

export const requestWeather = () => ({
  type: REQUEST_WEATHER
});

export const removeErrorMessage = (errorMessage) => ({
  type: REMOVE_ERROR_MESSAGE,
  errorMessage
});

export const addErrorMessage = (errorMessage) => ({
  type: ADD_ERROR_MESSAGE,
  errorMessage
});