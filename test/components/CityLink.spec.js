import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { spy } from 'sinon';
import CityLink from '../../components/CityLink';

describe('<CityLink/>', () => {
  let wrapper;
  const selectCitySpy = spy();
  const removeAndDeselectCitySpy = spy();

  before(() => {
    wrapper = shallow(
      <CityLink
        item={'Kiev'}
        selectedCity={'Kiev'}
        selectCity={selectCitySpy}
        removeAndDeselectCity={removeAndDeselectCitySpy}
      />
    );
  });

  it('should render link and button', () => {
    expect(wrapper.children().find('a').length).to.equal(1);
    expect(wrapper.children().find('button').length).to.equal(1);
    expect(wrapper.children().length).to.equal(2);
  });

  it('should render link within a correct text', () => {
    expect(wrapper.children().find('a').text()).to.equal('Kiev');
  });

  it('should call selectCity with a correct text when link is clicked once', () => {
    const link = wrapper.find('a');
    link.simulate('click');

    expect(selectCitySpy.calledOnce).to.equal(true);
    expect(selectCitySpy.calledWith('Kiev')).to.equal(true);
  });

  it('should call removeAndDeselectCity with a correct text when button is clicked once', () => {
    const button = wrapper.find('button');
    button.simulate('click');

    expect(removeAndDeselectCitySpy.calledOnce).to.equal(true);
    expect(removeAndDeselectCitySpy.calledWith('Kiev')).to.equal(true);
  });

  it('should set className when item equal selected item', () => {
    expect(wrapper.children().find('a').prop('className')).to.equal('active');
  });

  it('should set className when item not equal selected item', () => {
    wrapper = shallow(
      <CityLink
        item={'Paris'}
        selectedCity={'Kiev'}
        selectCity={() => true}
        removeAndDeselectCity={() => true}
      />
    );

    expect(wrapper.children().find('a').prop('className')).to.equal('');
  });
});
