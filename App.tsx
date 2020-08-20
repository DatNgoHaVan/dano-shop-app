import React from 'react';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';

import productsReducer from './redux-store/products/products-reducer';
import ShopNavigator from './navigation/ShopNavigator';
import { RootReducer } from './redux-store/root/root-reducer';

const store = createStore(RootReducer);

export default function App() {
  return (
    <Provider store={store} >
      <ShopNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({

});
