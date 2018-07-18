import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { spy } from 'sinon';
import ErrorMessages from '../../components/ErrorMessages';

describe('<ErrorMessages/>', () => {
  let wrapper;
  let errorMessages = ['something is wrong'];
  const removeErrorMessageSpy = spy();

  before(() => {
    wrapper = shallow(
      <ErrorMessages
        errorMessages={errorMessages}
        removeErrorMessage={removeErrorMessageSpy}
      />);
  });

  it('should render an error message within button for removing error message ', () => {
    expect(wrapper.find('.error_popUp').find('button')).to.have.length(1);
  });

  it('should render a correct error message', () => {
    expect(wrapper.find('.error_popUp').text()).to.equal('something is wrong×');
  });

  it('should call removeErrorMessage once if remove button clicked', () => {
    const button = wrapper.find('button');
    button.simulate('click');

    expect(removeErrorMessageSpy.calledOnce).to.equal(true);
  });

  it('should call removeErrorMessage with correct text if remove button clicked', () => {
    expect(removeErrorMessageSpy.calledWith('something is wrong')).to.equal(true);
  });

  it('should render a correct length of errors', () => {
    errorMessages = ['something is wrong', 'something is strange'];
    wrapper = shallow(
      <ErrorMessages
        errorMessages={errorMessages}
        removeErrorMessage={() => true}
      />);

    expect(wrapper.find('.error_popUp')).to.have.length(2);
  });
});
