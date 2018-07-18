import { SET_SEARCH_FORM_VALUE } from '../constants/form.js';
import { addErrorMessage } from './ui';
import { addCityIfValid } from './cities';

const setSearchValue = (value) => ({
  type: SET_SEARCH_FORM_VALUE,
  value
});

export const submitSearchValue = (value) => (dispatch, getState) => {
  dispatch(setSearchValue(value));

  const { cities, form } = getState();

  const isCityPresent = cities.some((item) => item === (form.searchValue));

  if (isCityPresent) return dispatch(addErrorMessage('You have this city. Try another name.'));

  dispatch(addCityIfValid(form.searchValue));
};
