import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { IProductState } from '../../redux-store/products/products-reducer';
import { StoreRootState } from '../../redux-store/root/root-reducer';

interface IOwnProps {

}

const ProductsOverviewScreen = () => {
  const products = useSelector((state: StoreRootState) => state.products.availableProducts);

  console.log(products);
  return (
    <FlatList
      data={products}
      keyExtractor={item => item.id}
      renderItem={itemData => <Text>{itemData.item.title}</Text>}
    />
  );
};

export default ProductsOverviewScreen;

const styles = StyleSheet.create({});
