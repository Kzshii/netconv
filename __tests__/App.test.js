import 'react-native';
import React from 'react';
import App from '../App.tsx';
import { shallow } from 'enzyme';

describe('<App />', () => {
  test('renders correctly App', () => {
    expect(shallow(<App />)).toMatchSnapshot();
  });
});
