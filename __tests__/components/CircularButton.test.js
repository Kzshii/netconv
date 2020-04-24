import 'react-native';
import React from 'react';
import { Button } from 'react-native';
import { CircularButton } from '../../src/components';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<CircularButton />', () => {
  test('renders correctly CircularButton', () => {
    const wrapper = shallow(
      <CircularButton title="+" />
    );
    expect(wrapper).toMatchSnapshot();
    wrapper.setProps({ title: '-' });
    expect(wrapper).toMatchSnapshot();
  });

  test('should call onPress', () => {
    const onPressEvent = jest.fn();
    const wrapper = shallow(<CircularButton
      title='+'
      onPress={onPressEvent}
    />);
    wrapper.find(Button).first().props().onPress();
    expect(onPressEvent.mock.calls.length).toBe(1);
  })
});
