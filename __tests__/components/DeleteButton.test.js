import 'react-native';
import React from 'react';
import configureMockStore from 'redux-mock-store';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { DeleteButton } from '../../src/components';
import { TouchableHighlight } from 'react-native';
import { Provider } from 'react-redux';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as ReactHooks from '../../src/hooks/react-hooks';

configure({ adapter: new Adapter() });

jest.mock('@react-navigation/native');

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('<DeleteButton />', () => {
  let wrapper;
  let store;

  const product = {
    id: 1,
    name: 'Test',
    price: 1.99,
    image: 'https://reactnative.dev/img/tiny_logo.png'
  };

  beforeEach(() => {
    store = configureStore([thunk])({
      products: [],
      isLoading: false,
      error: null
    });

    jest
      .spyOn(ReactHooks, "useDispatch")
      .mockImplementation(() => store.dispatch);
    
    wrapper = shallow(<DeleteButton store={store} product={product}/>);
  });

  test('renders correctly DeleteButton', () => {
    const wrapper = shallow(
      <Provider store={mockStore()}>
        <DeleteButton product={product} />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('should call onPress', () => {
      const onPress = jest.fn();
      const wrapper = shallow(<DeleteButton 
        onPress={onPress}           
      />);
      wrapper.find(TouchableHighlight).first().props().onPress();
      expect(onPress.mock.calls.length).toMatchSnapshot();
  });
});
