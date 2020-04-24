import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { TouchableHighlight } from 'react-native';
import { Icon } from './Icon';
import { ProductsActions } from '../store/actions/products';
import { useDispatch } from 'react-redux';
import { Product } from '../types';

interface Props {
  product: Product;
}

export const DeleteButton: FC<Props> = ({ product }) => {
  const dispatch = useDispatch();
  const onDelete = () => {
    dispatch(ProductsActions.deleteProduct(product));
  };
  return (
    <TouchableHighlight
      activeOpacity={0.6}
      underlayColor="transparent"
      onPress={onDelete}
    >
      <View style={styles.container}>
        <Icon
          style={{ width: 20, height: 20 }}
          path={require('./../../assets/images/trash.png')}
        />
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
  },
  text: {
    color: '#fff',
  },
  quantityContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    maxWidth: 150,
  },
  price: {
    marginTop: 12,
    fontSize: 16,
    fontWeight: 'bold',
  },
  image: {
    borderRadius: 12,
    width: 100,
    height: 100,
    marginRight: 15,
  },
});
