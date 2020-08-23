import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { StoreRootState } from '../../redux-store/root/root-reducer';
import { NavigationScreenProp, NavigationParams, NavigationState, NavigationRoute, NavigationScreenComponent } from 'react-navigation';
import { RouteProp } from '@react-navigation/native';

interface IOwnProps {

}

interface INavigationProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
  route: NavigationRoute;
}

type Props = IOwnProps & INavigationProps;

const ProductsDetailScreen = (props: Props) => {
  const productId = props.route.params?.productId;
  const selectedProduct = useSelector(
    (state: StoreRootState) =>
      state.products.availableProducts.find(prod => prod.id === productId)
  );

  return (
    <View>
      <Text>{selectedProduct?.title}</Text>
    </View>
  );
};

export const ProductsDetailScreenOptions = ({ route }) => {
  return {
    headerTitle: route.params?.productTitle
  };
};

export default ProductsDetailScreen;
const styles = StyleSheet.create({});
