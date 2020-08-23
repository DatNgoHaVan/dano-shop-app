import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { StoreRootState } from '../../redux-store/root/root-reducer';
import ProductItem from '../../components/shop/ProductItem';
import { NavigationScreenProp, NavigationState, NavigationParams } from "react-navigation";

interface IOwnProps {
}

interface INavigationProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

type Props = IOwnProps & INavigationProps;

const ProductsOverviewScreen = (props: Props) => {
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
          onViewDetail={() => {
            props.navigation.navigate('ProductDetail', {
              productId: itemData.item.id,
              productTitle: itemData.item.title
            });
          }}
          onAddToCart={() => { }}
        />
      )}
    />
  );
};

export default ProductsOverviewScreen;

const styles = StyleSheet.create({});
