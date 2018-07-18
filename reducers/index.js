import { combineReducers } from 'redux';
import cities from './cities.js';
import ui from './ui.js';
import form from './form.js';
import weatherOfSelectedCity from './weatherOfSelectedCity.js';

const rootReducer = combineReducers({
  cities,
  ui,
  form,
  weatherOfSelectedCity
});

export default rootReducer;
