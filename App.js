import React from 'react';
import { Animated, Button, StyleSheet, Text, View, Alert } from 'react-native';
import 'react-native-gesture-handler';
import MainStackNavigator from './src/MainStackNavigator';

// These are new
import { AppRegistry } from 'react-native';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from '@apollo/react-hooks';
// new
const client = new ApolloClient();

// to go back only need to remove the wrappings
export default function App() {
  return (
    <ApolloProvider client={client}>
      <MainStackNavigator />
    </ApolloProvider>
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
