import { SET_SEARCH_FORM_VALUE } from '../constants/form';

const initialState = {
  searchValue: ''
};

const form = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_FORM_VALUE:
      return Object.assign({}, state, {
        searchValue: action.value
      });
    default:
      return state;
  }
};

export default form;
