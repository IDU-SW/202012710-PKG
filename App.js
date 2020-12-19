/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack';

import animals from "./animals";
import AnimalListScreen from "./AnimalListScreen";
import AnimalDetailScreen from './AnimalDetailScreen';

const AnimalsStack = createStackNavigator();

const MoviesNavigator = () => (
  <AnimalsStack.Navigator screenOptions={{
    headerShown:false}}>
    <AnimalsStack.Screen name="AnimalList" component={AnimalListScreen} initialParams={animals}/>
    <AnimalsStack.Screen name="AnimalDetail" component={AnimalDetailScreen}/>
  </AnimalsStack.Navigator>
)
const App = ()  => {
  return (
    <NavigationContainer>
      <MoviesNavigator />
    </NavigationContainer>
  );
};

export default App;
