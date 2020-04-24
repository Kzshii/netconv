import React, { FC } from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import { Icon } from './Icon';
import { Product } from '../types';

interface Props {
  product: Product;
  onPress: (item: Product) => void;
}

export const Item: FC<Props> = ({ product, onPress }) => (
  <TouchableHighlight
    style={styles.touchable}
    activeOpacity={0.6}
    underlayColor="transparent"
    onPress={() => onPress(product)}
  >
    <View style={styles.container}>
      <View style={styles.descriptionContent}>
        <Icon style={styles.image} path={{ uri: product.image }} />
        <Text numberOfLines={2} style={styles.title}>
          {product.name}
        </Text>
      </View>
      <Text style={styles.price}>
        R$ {product.price.toLocaleString('br-BR')}
      </Text>
    </View>
  </TouchableHighlight>
);

const styles = StyleSheet.create({
  container: {
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  descriptionContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 14,
    maxWidth: 150,
    marginBottom: 3,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  image: {
    borderWidth: 1,
    borderColor: '#9ea0a3',
    borderRadius: 12,
    width: 100,
    height: 100,
    marginBottom: 5,
  },
  touchable: {
    flexBasis: 0,
    flexGrow: 1,
  },
});
