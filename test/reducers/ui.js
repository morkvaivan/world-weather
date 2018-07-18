import { expect } from 'chai';
import reducer from '../../reducers/ui';

describe('ui Reducer', () => {
  it('handle REMOVE_ERROR_MESSAGE', () => {
    const state = {
      isFetching: false,
      errorMessages: ['Something is wrong', 'Something is strange'],
      selectedCity: 'Isachsen'
    };

    const newState = reducer(state, { type: 'REMOVE_ERROR_MESSAGE', errorMessage: 'Something is wrong' });

    expect(newState).to.eql({
      isFetching: false,
      errorMessages: ['Something is strange'],
      selectedCity: 'Isachsen'
    });
  });

  it('handle ADD_ERROR_MESSAGE', () => {
    const initialState = {
      isFetching: false,
      errorMessages: [],
      selectedCity: 'Isachsen'
    };

    const newState = reducer(initialState, { type: 'ADD_ERROR_MESSAGE', errorMessage: 'Something is wrong' });

    expect(newState).to.eql({
      isFetching: false,
      errorMessages: ['Something is wrong'],
      selectedCity: 'Isachsen'
    });
  });

  it('handle SELECT_CITY', () => {
    const initialState = {
      isFetching: false,
      errorMessages: [],
      selectedCity: 'Isachsen'
    };

    const newState = reducer(initialState, { type: 'SELECT_CITY', city: 'Kiev' });

    expect(newState).to.eql({
      isFetching: false,
      errorMessages: [],
      selectedCity: 'Kiev'
    });
  });

  it('handle DESELECT_CITY', () => {
    const initialState = {
      isFetching: false,
      errorMessages: [],
      selectedCity: 'Isachsen'
    };

    const newState = reducer(initialState, { type: 'DESELECT_CITY' });

    expect(newState).to.eql({
      isFetching: false,
      errorMessages: [],
      selectedCity: null
    });
  });

  it('handle REQUEST_WEATHER', () => {
    const state = {
      isFetching: false,
      errorMessages: ['something is wrong'],
      selectedCity: 'Isachsen'
    };

    const newState = reducer(state, { type: 'REQUEST_WEATHER' });

    expect(newState).to.eql({
      isFetching: true,
      errorMessages: [],
      selectedCity: 'Isachsen'
    });
  });

  it('handle SUCCESS_WEATHER', () => {
    const state = {
      isFetching: true,
      errorMessages: [],
      selectedCity: 'Isachsen'
    };

    const newState = reducer(state, { type: 'SUCCESS_WEATHER' });

    expect(newState).to.eql({
      isFetching: false,
      errorMessages: [],
      selectedCity: 'Isachsen'
    });
  });

  it('handle incorrect action', () => {
    const initialState = {
      isFetching: false,
      errorMessages: [],
      selectedCity: 'Isachsen'
    };
    const newState = reducer(initialState, { type: 'INCORRECT', city: 'someCity' });

    expect(newState).to.eql(initialState);
  });

});
