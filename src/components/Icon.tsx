import React, { FC } from 'react';
import {
  StyleSheet,
  Image,
  ImageProps,
  ImageSourcePropType,
} from 'react-native';

interface Props {
  path: ImageProps | ImageSourcePropType;
  style?: Record<string, string | number>;
}

export const Icon: FC<Props> = ({ path, style }) => (
  <Image style={{ ...styles.content, ...style }} source={path} />
);

const styles = StyleSheet.create({
  content: {
    width: 50,
    height: 50,
  },
});
