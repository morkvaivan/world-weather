import React, { PropTypes } from 'react';

class CityLink extends React.Component {
  constructor(props) {
    super(props);

    this.selectCity = this.selectCity.bind(this);
    this.removeAndDeselectCity = this.removeAndDeselectCity.bind(this);
  }

  selectCity() {
    this.props.selectCity(this.props.item);
  }

  removeAndDeselectCity() {
    this.props.removeAndDeselectCity(this.props.item);
  }

  render() {
    const { item, selectedCity } = this.props;
    const activeClass = (selectedCity === item ? 'active' : '');

    return (
      <li key={item} >
        <a
          href="#"
          onClick={this.selectCity}
          className={activeClass}
        >
          {item}
        </a>
        <button onClick={this.removeAndDeselectCity} >&times;</button>
      </li>
    );
  }
}

CityLink.propTypes = {
  selectedCity: PropTypes.string.isRequired,
  item: PropTypes.string.isRequired,
  selectCity: PropTypes.func.isRequired,
  removeAndDeselectCity: PropTypes.func.isRequired
};

export default CityLink;
