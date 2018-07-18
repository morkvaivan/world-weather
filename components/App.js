import React from 'react';
import Form from '../containers/Form';
import CitiesBar from '../containers/CitiesBar';
import WeatherInfoScreen from '../containers/WeatherInfoScreen';
import ErrorMessages from '../containers/ErrorMessages';

const App = () => (
  <div>
    <Form />
    <CitiesBar />
    <WeatherInfoScreen />
    <ErrorMessages />
  </div>
);

export default App;
