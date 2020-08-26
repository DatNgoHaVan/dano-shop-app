import React, { useState } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import ShopNavigator from './navigation/ShopNavigator';
import { RootReducer } from './redux-store/root/root-reducer';

const store = createStore(RootReducer);

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => { setFontLoaded(true); }}
      />
    );
  }

  return (
    <Provider store={store} >
      <ShopNavigator />
    </Provider>
  );
}