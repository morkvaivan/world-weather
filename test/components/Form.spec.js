import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { spy } from 'sinon';
import Form from '../../components/Form';

describe('<Form/>', () => {
  let wrapper;
  const submitSearchValueSpy = spy();

  before(() => {
    wrapper = mount(
      <Form submitSearchValue={submitSearchValueSpy} />
    );
  });

  it('should render text and submit inputs', () => {
    expect(wrapper.find('input[type="submit"]').length).to.equal(1);
    expect(wrapper.find('input[type="text"]').length).to.equal(1);
    expect(wrapper.children().length).to.equal(2);
  });

  it('should call submitSearchValue on submit', () => {
    wrapper.simulate('submit');

    expect(submitSearchValueSpy.calledOnce).to.equal(true);
  });

  it('should call submitSearchValue on submit with correct value', () => {
    const inputNode = wrapper.find('input[type="text"]').get(0);
    inputNode.value = 'someValue';

    wrapper.simulate('submit');

    expect(submitSearchValueSpy.calledWith('someValue')).to.equal(true);
  });
});
