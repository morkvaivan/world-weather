import { RECEIVE_WEATHER, REMOVE_WEATHER, BORDER_TEMPERATURE } from '../constants/weatherOfSelectedCity';

const initialState = {
  city: '',
  temp: '',
  windDirection: '',
  country: '',
  windSpeed: '',
  weatherDescription: '',
  weatherImage: ''
};

const weatherOfSelectedCity = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_WEATHER:
      return {
        city: ` ${action.data.name}, ${action.data.sys.country}.`,
        temp: ` ${action.data.main.temp} degrees Kelvin.`,
        windSpeed: ` ${action.data.wind.speed} meter/sec.`,
        weatherDescription: ` ${action.data.weather[0].description}.`,
        windDirection: ` ${action.data.wind.deg}  degrees (meteorological).`,
        weatherImage: (Number(action.data.main.temp) > BORDER_TEMPERATURE ? 'weather_hot' : 'weather_cold')
      };
    case REMOVE_WEATHER:
      return initialState;
    default:
      return state;
  }
};

export default weatherOfSelectedCity;
