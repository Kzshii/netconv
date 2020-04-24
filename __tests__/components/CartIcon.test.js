import 'react-native';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import React from 'react';
import { CartIcon } from '../../src/components';
import { Provider } from 'react-redux';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { TouchableHighlight } from 'react-native';

configure({ adapter: new Adapter() });
jest.mock('@react-navigation/native');

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('<CartIcon />', () => {
  test('renders correctly CartIcon', () => {
    const wrapper = shallow(
      <Provider store={mockStore()}>
        <CartIcon />
      </Provider>
    );

    expect(wrapper).toMatchSnapshot();
  });

  test('should call onPress', () => {
    const onPress = jest.fn();    
    const wrapper = shallow(<CartIcon 
      onPress={onPress}           
    />);
    wrapper.find(TouchableHighlight).first().props().onPress();
    expect(onPress.mock.calls.length).toBe(1);
  });
});
