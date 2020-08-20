import React from 'react';
import { Platform } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen';
import Colors from '../constants/Colors';

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
            headerTitle: 'All Products'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}