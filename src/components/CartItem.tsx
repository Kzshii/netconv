import React, { FC } from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Product } from '../types';
import { QuantityItem } from './QuantityItem';
import { Icon } from './Icon';
import { DeleteButton } from './DeleteButton';

interface Props {
  product: Product;
  setItem: (product: Product) => void;
}

export const CartItem: FC<Props> = ({ product, setItem }) => {
  const navigation = useNavigation();
  const onItemClick = (product: Product) => {
    navigation.navigate('Description', { product });
  };
  return (
    <View style={styles.container}>
      <TouchableHighlight
        activeOpacity={0.6}
        underlayColor="transparent"
        onPress={() => onItemClick(product)}
      >
        <View style={styles.descriptionContainer}>
          <Icon style={styles.image} path={{ uri: product.image }} />
          <Text numberOfLines={2} style={styles.title}>
            {product.name}
          </Text>
        </View>
      </TouchableHighlight>
      <View style={styles.descriptionContainer}>
        <DeleteButton product={product} />
        <View style={styles.quantityContainer}>
          <QuantityItem setItem={setItem} product={product} />
          <Text style={styles.price}>
            R$ {product.price.toLocaleString('br-BR')}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  descriptionContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  quantityContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: 14,
    maxWidth: 150,
  },
  price: {
    marginTop: 12,
    fontSize: 16,
    fontWeight: 'bold',
  },
  image: {
    borderWidth: 1,
    borderColor: '#9ea0a3',
    borderRadius: 12,
    width: 60,
    height: 60,
    marginRight: 15,
  },
});
