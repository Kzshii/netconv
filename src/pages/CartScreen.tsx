import React, { FC, useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  Button,
  Text,
  FlatList,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { ProductsActions } from '../store/actions/products';
import { productsSelector } from '../store/selectors';
import { CartItem } from '../components/CartItem';
import { Product } from '../types';

export const CartScreen: FC = () => {
  const [total, setTotal] = useState(0);
  const dispatch = useDispatch();
  const products = useSelector(productsSelector);
  const navigation = useNavigation();

  useEffect(() => {
    const total = products.reduce((acc, curr) => {
      if (curr.quantity) {
        return acc + curr.price * curr.quantity;
      }
      return acc;
    }, 0);
    setTotal(Math.round(total * 100) / 100);
  }, [products]);

  const onFinish = () => {
    dispatch(ProductsActions.wipeList());
    navigation.navigate('Home');
  };
  const onUpdateProduct = (product: Product) => {
    dispatch(ProductsActions.setProduct(product));
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <FlatList
          data={products.sort((a, b) => a.id - b.id)}
          keyExtractor={(item, idx) => item.name + idx}
          renderItem={({ item }) => (
            <CartItem product={item} setItem={onUpdateProduct} />
          )}
        />
      </View>
      <View style={styles.totalContent}>
        <Text style={styles.totalText}>Total:</Text>
        <Text style={styles.totalText}>R$ {total.toLocaleString('br-BR')}</Text>
      </View>
      <View style={styles.finishButton}>
        <Button color="#fff" title="Finalizar pedido" onPress={onFinish} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  totalContent: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  totalText: {
    padding: 12,
    fontWeight: 'bold',
    fontSize: 22,
  },
  finishButton: {
    backgroundColor: '#E24E26',
    justifyContent: 'center',
    height: 60,
    bottom: 0,
  },
});
