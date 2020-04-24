import React, { FC } from 'react';
import { StyleSheet, View, Button } from 'react-native';

interface Props {
  onPress: () => void;
  title: string;
}

export const CircularButton: FC<Props> = ({ onPress, title }) => (
  <View style={styles.buttonContainer}>
    <Button color="#000" onPress={onPress} title={title} />
  </View>
);

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 26,
    paddingLeft: 5,
    paddingRight: 5,
    marginLeft: 10,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#bab5b5',
  },
});
