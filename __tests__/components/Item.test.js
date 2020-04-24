import 'react-native';
import React from 'react';
import { Item } from '../../src/components';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { TouchableHighlight } from 'react-native';

configure({ adapter: new Adapter() });

describe('<Item />', () => {
  const product = {
    id: 1,
    name: 'Test',
    price: 1.99,
    image: 'https://reactnative.dev/img/tiny_logo.png'
  };

  test('renders correctly Item', () => {
    const wrapper = shallow(
      <Item product={product}/>
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('should call onPress', () => {
    const onPressEvent = jest.fn();
    const wrapper = shallow(<Item
      product={product}
      onPress={onPressEvent}
    />);
    wrapper.find(TouchableHighlight).first().props().onPress();
    expect(onPressEvent.mock.calls.length).toBe(1);
  });
});
