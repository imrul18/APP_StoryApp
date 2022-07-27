import React from 'react';
import {Text, View} from 'react-native';
import 'react-native-gesture-handler';

import {Provider} from 'react-redux';
import Navigation from './app/navigation/Navigation';
import Store from './app/redux/Store';

const App = () => {
  return (
    <Provider store={Store}>
      <Navigation />
    </Provider>
  );
};

export default App;
