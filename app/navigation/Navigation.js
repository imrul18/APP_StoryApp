import React from 'react';
import {TouchableOpacity, View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import CategoriesList from '../pages/CategoriesList';
import StoriesList from '../pages/StoriesList';
import Story from '../pages/Story';
import Welcome from '../pages/Welcome';
import AdmobComponent from '../component/AdmobComponent';

const Stack = createNativeStackNavigator();

export default Navigation = () => {
  return (
    <NavigationContainer>
      <View style={{flex: 1}}>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="CategoryList" component={CategoriesList} />
          <Stack.Screen name="StoryList" component={StoriesList} />
          <Stack.Screen name="Story" component={Story} />
        </Stack.Navigator>
        <TouchableOpacity
          style={{
            position: 'absolute',
            bottom: 0,
            alignSelf: 'center',
          }}>
          <AdmobComponent />
        </TouchableOpacity>
      </View>
    </NavigationContainer>
  );
};
