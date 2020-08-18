import React from 'react';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';

import productsReducer from './redux-store/products/products-reducer';
import ShopNavigator from './navigation/ShopNavigator';

const rootReducer = combineReducers({
  products: productsReducer
});

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store} >
      <ShopNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({

});
