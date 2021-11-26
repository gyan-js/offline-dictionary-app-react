import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
//import from {SafeAreaProvider}

import HomeScreen from './screens/HomeScreen'


export default class App extends Component{
  render(){
    return(
      <SafeAreaProvider>
      <View style={{flex:1}}>
        <HomeScreen />
      </View>
      </SafeAreaProvider>
    )
  }
}
