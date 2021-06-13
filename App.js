/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {Provider} from 'react-redux'
import store from './src/store'
import MainStackNavigation from './src/navigator/navigator';
const App = () => {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainStackNavigation/>
      </NavigationContainer>
    </Provider>
  );
};



export default App;
