import React from 'react';
import { Animated, Button, StyleSheet, Text, View, Alert } from 'react-native';
import 'react-native-gesture-handler';
// import { NavigationContainer } from '@react-navigation/native'
// import { createStackNavigator } from '@react-navigation/stack'
import MainStackNavigator from './src/MainStackNavigator'

const instructions = Platform.select({
  ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
  android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`,
});

// const Stack = createStackNavigator()

export default function App() {
  return (
    <MainStackNavigator/>


    // <View style={styles.container}>
    //   <Text style={styles.welcome}>Notes!</Text>
    //   <Button title='Press this to be insulted' onPress={()=> Alert.alert(`You're ugly`)} ></Button>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
