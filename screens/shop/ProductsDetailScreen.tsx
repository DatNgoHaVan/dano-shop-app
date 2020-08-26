import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { useSelector } from 'react-redux';
import { StoreRootState } from '../../redux-store/root/root-reducer';
import { NavigationScreenProp, NavigationParams, NavigationState, NavigationRoute, NavigationScreenComponent } from 'react-navigation';
import { RouteProp } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import Colors from '../../constants/Colors';

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
    <ScrollView>
      <Image
        style={styles.image}
        source={{ uri: selectedProduct?.imageUrl }}
      />
      <View style={styles.actions}>
        <Button
          title='Add to Cart'
          color={Colors.primary}
          onPress={() => { }}
        />
      </View>
      <Text style={styles.price}>
        ${selectedProduct?.price.toFixed(2)}
      </Text>
      <Text style={styles.description}>
        {selectedProduct?.description}
      </Text>
    </ScrollView>
  );
};

export const ProductsDetailScreenOptions = ({ route }: INavigationProps) => {
  return {
    headerTitle: route.params?.productTitle
  };
};

export default ProductsDetailScreen;
const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300
  },
  actions: {
    marginVertical: 10,
    alignItems: 'center'
  },
  price: {
    fontSize: 20,
    color: '#888',
    textAlign: 'center',
    marginVertical: 20
  },
  description: {
    fontSize: 24,
    textAlign: 'center',
    marginHorizontal: 20
  }
});
