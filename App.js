//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import First from './Screens/First';
import Second from './Screens/Second';
import Third from './Screens/Third';
import Fourth from './Screens/Fourth';
import Fifth from './Screens/Fifth';
import Six from './Screens/Six';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
const Drawer=createDrawerNavigator();
// create a component
const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="First">
        <Drawer.Screen  name="English Stories" component={First}/>
        <Drawer.Screen  name="Moral Story" component={Second} />
        <Drawer.Screen  name="Bedtime Story" component={Third} />
        <Drawer.Screen  name="Panchatara Story" component={Fourth} />
        <Drawer.Screen name="Arabian Night Story" component={Fifth}/>
        <Drawer.Screen name="Akbar Birbal Story" component={Six}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
};


export default App;
