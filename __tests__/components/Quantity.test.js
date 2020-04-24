import 'react-native';
import React from 'react';
import { QuantityItem, CircularButton } from '../../src/components';
import { shallow } from 'enzyme';

describe('<QuantityItem />', () => {
  const product = {
    id: 1,
    name: 'Test',
    price: 1.99,
    image: 'https://reactnative.dev/img/tiny_logo.png',
    quantity: 1
  };

  test('renders correctly QuantityItem', () => {
    const wrapper = shallow(
      <QuantityItem product={product} />
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('should increment', () => {
    const setItem = jest.fn();
    const wrapper = shallow(
      <QuantityItem product={product} setItem={setItem}/>
    );
    wrapper.find(CircularButton).last().props().onPress();
    expect(wrapper).toMatchSnapshot();
  })

  test('should decrement', () => {
    const setItem = jest.fn();
    const wrapper = shallow(
      <QuantityItem product={product} setItem={setItem}/>
    );
    wrapper.find(CircularButton).first().props().onPress();
    expect(wrapper).toMatchSnapshot();
  })
});
