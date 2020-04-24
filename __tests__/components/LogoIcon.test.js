import 'react-native';
import React from 'react';
import { LogoIcon } from '../../src/components';
import { shallow } from 'enzyme';

describe('<LogoIcon />', () => {
  test('renders correctly LogoIcon', () => {
    expect(shallow(<LogoIcon />)).toMatchSnapshot();
  });
});
