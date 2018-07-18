import React, { PropTypes } from 'react';
import CityLink from '../containers/CityLink';

const CitiesBar = (props) => (
  <ul className="cities_bar" >
    {props.cities.map((item) => (
      <CityLink
        key={item}
        item={item}
      />
    ))}
  </ul>
);

CitiesBar.propTypes = {
  cities: PropTypes.array.isRequired
};

export default CitiesBar;
