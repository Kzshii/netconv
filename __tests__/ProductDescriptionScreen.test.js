import 'react-native';
import React from 'react';
import { ProductDescriptionScreen } from '../src/pages/ProductDescriptionScreen';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Button } from 'react-native';
import * as ReactHooks from '../src/hooks/react-hooks';

configure({ adapter: new Adapter() });

const createTestProps = props => ({
  navigation: {
    navigate: {
      useNavigation: jest.fn(() => {
        goBack = jest.fn();
      }),
    },
  },
  ...props,
});

describe('<ProductDescriptionScreen />', () => {
  let wrapper;
  let store;

  const product = {
    id: 1,
    name: 'Test',
    price: 1.99,
    image: 'https://reactnative.dev/img/tiny_logo.png',
  };

  const route = {
    params: {
      product,
    },
  };

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
      <ProductDescriptionScreen
        store={store}
        route={route}
        props={createTestProps({})}
      />,
    );
  });

  test('renders correctly ProductDescriptionScreen', () => {
    const wrapper = shallow(<ProductDescriptionScreen route={route} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('should call onPress', () => {
    const wrapper = shallow(<ProductDescriptionScreen route={route} />);
    wrapper.find(Button).last().props().onPress();
    expect(ReactHooks.useDispatch).toHaveBeenCalledTimes(1);
    expect(ReactHooks.useDispatch).toHaveBeenCalledWith({
      type: 'SET_PRODUCT',
      payload: product,
    });
  });
});
