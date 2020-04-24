import React, { FC, useState } from 'react';
import { StyleSheet, View, Text, Button, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from '../hooks/react-hooks';
import { ProductsActions } from '../store/actions/products';
import { Icon } from '../components';
import { Product } from '../types';
import { QuantityItem } from '../components/QuantityItem';

interface Props {
  route: any;
}

export const ProductDescriptionScreen: FC<Props> = ({ route }) => {
  const { product } = route.params;
  const [item, setItem] = useState<Product>(
    new Product({ ...product, quantity: 1 })
  );
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const onAdd = () => {
    dispatch(ProductsActions.setProduct(item));
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Icon style={styles.image} path={{ uri: item.image }} />
        <View style={styles.descriptionContent}>
          <Text style={styles.text}>{item.name}</Text>
          <Text style={styles.price}>
            R$ {item.price.toLocaleString('br-BR')}
          </Text>
        </View>
        <QuantityItem product={item} setItem={setItem} />
      </View>
      <View style={styles.addButton}>
        <Button color="#fff" title="Adicionar produto" onPress={onAdd} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  descriptionContent: {
    marginTop: 32,
    marginBottom: 16,
    paddingLeft: 12,
    paddingRight: 12,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 5,
  },
  text: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
  },
  price: {
    textAlign: 'center',
    fontSize: 30,
    marginTop: 10,
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: '#E24E26',
    justifyContent: 'center',
    height: 60,
    bottom: 0,
  },
});
