import { REQUEST_WEATHER, SUCCESS_WEATHER, SELECT_CITY, DESELECT_CITY, REMOVE_ERROR_MESSAGE, ADD_ERROR_MESSAGE, SET_SEARCH_FORM_VALUE } from '../constants/ui';

const initialState = {
  isFetching: false,
  errorMessages: [],
  selectedCity: 'Isachsen'
};

const ui = (state = initialState, action) => {
  switch (action.type) {
    case REMOVE_ERROR_MESSAGE:
      return Object.assign({}, state, {
        errorMessages: state.errorMessages.filter(
          (item) => item !== action.errorMessage
        )
      });
    case ADD_ERROR_MESSAGE:
      return Object.assign({}, state, {
        errorMessages: [
          ...state,
          action.errorMessage
        ],
        isFetching: false
      });
    case SELECT_CITY:
      return Object.assign({}, state, {
        selectedCity: action.city
      });
    case DESELECT_CITY:
      return Object.assign({}, state, {
        selectedCity: null
      });
    case REQUEST_WEATHER:
      return Object.assign({}, state, {
        isFetching: true,
        errorMessages: []
      });
    case SUCCESS_WEATHER:
      return Object.assign({}, state, {
        isFetching: false,
        errorMessages: []
      });
    default:
      return state;
  }
};

export default ui;
