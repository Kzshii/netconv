import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { productsSelector } from '../store/selectors';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import { Icon } from './Icon';
import { useNavigation } from '@react-navigation/native';

export const CartIcon: FC = () => {
  const products = useSelector(productsSelector);
  const navigation = useNavigation();
  return (
    <TouchableHighlight
      activeOpacity={0.6}
      underlayColor="transparent"
      onPress={() => navigation.navigate('Cart')}
    >
      <View style={styles.cart}>
        <Icon
          style={styles.cartIcon}
          path={require('../../assets/images/cart.png')}
        />
        <View style={styles.cartContent}>
          <Text style={styles.cartCount}>{products.length}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  cart: {
    alignItems: 'center',
    flexDirection: 'row',
    right: 18,
  },
  cartIcon: {
    width: 30,
    height: 30,
    right: 12,
  },
  cartContent: {
    position: 'absolute',
    top: -8,
    right: 0,
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingLeft: 5,
    paddingRight: 5,
  },
  cartCount: {
    right: 0,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
