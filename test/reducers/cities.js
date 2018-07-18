import { expect } from 'chai';
import reducer from '../../reducers/cities';

describe('cities Reducer', () => {
  it('handle ADD_CITY', () => {
    const initialState = [
      'Isachsen',
      'Paris',
      'New York',
      'Rome',
      'Yellowknife'
    ];

    const newState = reducer(initialState, { type: 'ADD_CITY', city: 'Kiev' });

    expect(newState).to.eql([
      'Isachsen',
      'Paris',
      'New York',
      'Rome',
      'Yellowknife',
      'Kiev'
    ]);
  });

  it('handle REMOVE_CITY', () => {
    const initialState = [
      'Isachsen',
      'Paris',
      'New York',
      'Rome',
      'Yellowknife'
    ];

    const newState = reducer(initialState, { type: 'REMOVE_CITY', city: 'Paris' });

    expect(newState).to.eql([
      'Isachsen',
      'New York',
      'Rome',
      'Yellowknife'
    ]);
  });

  it('handle incorrect action', () => {
    const initialState = [
      'Isachsen',
      'Paris',
      'New York',
      'Rome',
      'Yellowknife'
    ];

    const newState = reducer(initialState, { type: 'INCORRECT', city: 'someCity' });

    expect(newState).to.eql(initialState);
  });
});
