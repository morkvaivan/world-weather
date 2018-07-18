import { ADD_CITY, REMOVE_CITY } from '../constants/cities';

const initialState = [
  'Isachsen',
  'Paris',
  'New York',
  'Rome',
  'Yellowknife'
];

const cities = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CITY:
      return [
        ...state,
        action.city
      ];
    case REMOVE_CITY:
      return state.filter(
        (city) => city !== action.city
      );
    default:
      return state;
  }
};

export default cities;
