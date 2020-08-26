import React from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity, Platform, TouchableNativeFeedback } from 'react-native';
import Colors from '../../constants/Colors';

interface IOwnProps {
  image: string,
  title: string,
  price: number,
  onViewDetail: () => void;
  onAddToCart: () => void;
}

const ProductItem = (props: IOwnProps) => {
  let TouchableCmp: any = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }

  return (
    <View style={styles.product}>
      <View style={styles.touchable}>
        <TouchableCmp onPress={props.onViewDetail}>
          <View>
            <View style={styles.imageContainer}>
              <Image
                source={{ uri: props.image }}
                style={styles.image}
              />
            </View>
            <View style={styles.details}>
              <Text style={styles.title}>
                {props.title}
              </Text>
              <Text style={styles.price}>
                ${props.price.toFixed(2)}
              </Text>
            </View>
            <View style={styles.actions}>
              <Button
                title="View Details"
                color={Colors.primary}
                onPress={props.onViewDetail}
              />
              <Button
                title="To Cart"
                color={Colors.primary}
                onPress={props.onAddToCart}
              />
            </View>
          </View>
        </TouchableCmp>
      </View>
    </View>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  product: {
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: 'white',
    height: 300,
    margin: 20
  },
  touchable: {
    borderRadius: 10,
    overflow: 'hidden'
  },
  imageContainer: {
    width: '100%',
    height: '60%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: '60%'
  },
  title: {
    fontSize: 16,
    fontFamily: 'open-sans-bold',
    marginVertical: 2
  },
  price: {
    fontSize: 14,
    fontFamily: 'open-sans',
    color: '#888'
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '25%',
    paddingHorizontal: 20
  },
  details: {
    alignItems: 'center',
    height: '15%',
    padding: 10
  }
});
