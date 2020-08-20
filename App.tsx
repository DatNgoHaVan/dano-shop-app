import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

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