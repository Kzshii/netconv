import React, { FC } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Product } from '../types';
import { CircularButton } from './CircularButton';

interface Props {
  setItem: (product: Product) => void;
  product: Product;
}

export const QuantityItem: FC<Props> = ({ setItem, product }) => {
  const countItem = (quantity: number) => {
    if (product.quantity === 1 && quantity === -1) {
      return;
    }
    setItem({ ...product, quantity: product.quantity! + quantity });
  };
  return (
    <View style={styles.quantityContainer}>
      <CircularButton onPress={() => countItem(-1)} title="-" />
      <Text style={styles.text}>{product.quantity}</Text>
      <CircularButton onPress={() => countItem(1)} title="+" />
    </View>
  );
};
const styles = StyleSheet.create({
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
