import React, { FC } from 'react';
import { StyleSheet, SafeAreaView, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Item } from '../components';
import { Product } from '../types';
import { Data } from '../constants';

export const HomeScreen: FC = () => {
  const navigation = useNavigation();
  const onItemClick = (product: Product) => {
    navigation.navigate('Description', { product });
  };
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={Data}
        numColumns={3}
        keyExtractor={(item, idx) => item.name + idx}
        renderItem={({ item }) => <Item onPress={onItemClick} product={item} />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
