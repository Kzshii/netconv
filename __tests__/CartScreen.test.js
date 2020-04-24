import 'react-native';
import React from 'react';
import configureMockStore from 'redux-mock-store';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { CartScreen } from '../src/pages/CartScreen';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import * as ReactHooks from '../src/hooks/react-hooks';

jest.mock('@react-navigation/native');

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('<CartScreen />', () => {
  let wrapper;
  let store;

  beforeEach(() => {
    store = configureStore([thunk])({
      products: [],
      isLoading: false,
      error: null,
    });

    jest
      .spyOn(ReactHooks, 'useDispatch')
      .mockImplementation(() => store.dispatch);

    wrapper = shallow(
      <Provider store={mockStore()}>
        <CartScreen store={store} />
      </Provider>,
    );
  });

  test('renders correctly CartScreen', () => {
    const wrapper = shallow(
      <Provider store={mockStore()}>
        <CartScreen />
      </Provider>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('should call onFinish', () => {
    const onFinish = jest.fn();
    const wrapper = shallow(<CartScreen />);
    wrapper.find(Button).first().props().onPress();
    expect(onFinish.mock.calls.length).toBe(1);
  });
});
