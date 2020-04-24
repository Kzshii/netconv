import 'react-native';
import React from 'react';
import { HomeScreen } from '../src/pages/HomeScreen';
import { shallow } from 'enzyme';

jest.mock('@react-navigation/native');

describe('<HomeScreen />', () => {
  test('renders correctly HomeScreen', () => {
    expect(shallow(<HomeScreen />)).toMatchSnapshot();
  });
});
