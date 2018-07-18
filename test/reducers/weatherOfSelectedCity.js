import { expect } from 'chai';
import reducer from '../../reducers/weatherOfSelectedCity';

describe('weatherOfSelectedCity Reducer', () => {
  it('handle RECEIVE_WEATHER', () => {
    const initialState = {
      city: '',
      temp: '',
      windDirection: '',
      country: '',
      windSpeed: '',
      weatherDescription: '',
      weatherImage: ''
    };

    const newState = reducer(initialState, { type: 'RECEIVE_WEATHER', data: {
      name: 'Kiev',
      sys: {
        country: 'UA'
      },
      main: {
        temp: '274'
      },
      wind: {
        speed: '3.42',
        deg: '165.001'
      },
      weather: [
        {
          description: 'light rain'
        }
      ]
    } });

    expect(newState).to.eql({
      city: ` Kiev, UA.`,
      temp: ` 274 degrees Kelvin.`,
      windSpeed: ` 3.42 meter/sec.`,
      weatherDescription: ` light rain.`,
      windDirection: ` 165.001  degrees (meteorological).`,
      weatherImage: 'weather_hot'
    });
  });

  it('handle REMOVE_WEATHER', () => {
    const state = {
      city: ` Kiev, UA.`,
      temp: ` 274 degrees Kelvin.`,
      windSpeed: ` 3.42 meter/sec.`,
      weatherDescription: ` light rain.`,
      windDirection: ` 165.001  degrees (meteorological).`,
      weatherImage: 'weather_hot'
    };

    const newState = reducer(state, { type: 'REMOVE_WEATHER' });

    expect(newState).to.eql({
      city: '',
      temp: '',
      windDirection: '',
      country: '',
      windSpeed: '',
      weatherDescription: '',
      weatherImage: ''
    });
  });

  it('handle incorrect action', () => {
    const initialState = {
      city: '',
      temp: '',
      windDirection: '',
      country: '',
      windSpeed: '',
      weatherDescription: '',
      weatherImage: ''
    };

    const newState = reducer(initialState, { type: 'INCORRECT', city: 'someCity' });

    expect(newState).to.eql(initialState);
  });

});
