import 'react-native';
import React from 'react';
import { Icon } from '../../src/components';
import { shallow } from 'enzyme';

describe('<Icon />', () => {
  test('renders correctly Icon', () => {
    expect(shallow(<Icon path={{ uri: "https://reactnative.dev/img/tiny_logo.png" }} />)).toMatchSnapshot();
  });
});
