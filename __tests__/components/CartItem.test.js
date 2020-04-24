import 'react-native';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import React from 'react';
import { CartItem } from '../../src/components';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import { TouchableHighlight } from 'react-native';

jest.mock('@react-navigation/native');

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('<CartItem />', () => {
  const product = {
    id: 1,
    name: 'Test',
    price: 1.99,
    image: 'https://reactnative.dev/img/tiny_logo.png'
  };

  test('renders correctly CartItem', () => {
    const wrapper = shallow(
      <Provider store={mockStore()}>
        <CartItem product={product} />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot()

  });
  test('should call onPress', () => {
    const onPressEvent = jest.fn(); 
    const wrapper = shallow(<CartItem
      product={product}
      onPress={onPressEvent}   
    />);
    wrapper.find(TouchableHighlight).first().props().onPress();
    expect(onPressEvent.mock.calls.length).toBe(0);
  });
});
