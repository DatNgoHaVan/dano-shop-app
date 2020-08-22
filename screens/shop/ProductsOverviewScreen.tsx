import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { StoreRootState } from '../../redux-store/root/root-reducer';
import ProductItem from '../../components/shop/ProductItem';

interface IOwnProps {

}

const ProductsOverviewScreen = () => {
  const products = useSelector((state: StoreRootState) => state.products.availableProducts);

  return (
    <FlatList
      data={products}
      keyExtractor={item => item.id}
      renderItem={itemData => (
        <ProductItem
          image={itemData.item.imageUrl}
          title={itemData.item.title}
          price={itemData.item.price}
          onViewDetail={() => { console.log('a'); }}
          onAddToCart={() => { }}
        />
      )}
    />
  );
};

export default ProductsOverviewScreen;

const styles = StyleSheet.create({});
