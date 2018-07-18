import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import CitiesBar from '../../components/CitiesBar';

describe('<CitiesBar/>', () => {
  it('should render correct children if the prop cities is correct array', () => {
    const cities = ['Paris', 'London', 'Tokyo'];
    const wrapper = shallow(<CitiesBar cities={cities} />);
    wrapper.children().forEach((child) => (
      expect(child.text()).to.equal('<Connect(CityLink) />')
    ));
  });

  it('should render nothing if the prop cities is empty array', () => {
    const cities = [];
    const wrapper = shallow(<CitiesBar cities={cities} />);
    expect(wrapper.children().length).to.equal(0);
  });
});
