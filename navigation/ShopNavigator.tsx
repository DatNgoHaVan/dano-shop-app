import React from 'react';
import { Platform } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, RouteProp } from '@react-navigation/native';

import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen';
import Colors from '../constants/Colors';
import ProductsDetailScreen, { ProductsDetailScreenOptions } from '../screens/shop/ProductsDetailScreen';
import { NavigationRoute } from 'react-navigation';

interface INavigationProps {
  route: RouteProp<Record<string, any | undefined>, "ProductDetail">;
}

const Stack = createStackNavigator();

export default function ProductsNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
          },
          headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
        }}
      >
        <Stack.Screen
          name="ProductsOverview"
          component={ProductsOverviewScreen}
          options={{
            headerTitle: 'All Products',
          }}
        />
        <Stack.Screen
          name="ProductDetail"
          component={ProductsDetailScreen}
          options={ProductsDetailScreenOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}