import { expect } from 'chai';
import reducer from '../../reducers/form';

describe('form Reducer', () => {
  it('handle SET_SEARCH_FORM_VALUE', () => {
    const initialState = {
      searchValue: ''
    };

    const newState = reducer(initialState, { type: 'SET_SEARCH_FORM_VALUE', value: 'Kiev' });

    expect(newState).to.eql({
      searchValue: 'Kiev'
    });
  });
  
  it('handle incorrect action', () => {
    const initialState = {
      searchValue: ''
    };

    const newState = reducer(initialState, { type: 'INCORRECT', city: 'someCity' });

    expect(newState).to.eql(initialState);
  });
});
