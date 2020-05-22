import React from 'react';
import { Animated, Button, StyleSheet, Text, View, Alert } from 'react-native';

import {useNavigation} from '@react-navigation/native'
import MainNotes from './mainNotes'

const instructions = Platform.select({
    ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
    android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`,
  });
  
  export default function Home(props) {
    // const navigation = useNavigation()
    const {navigation} = props
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Notes!</Text>
        <Button title='New Note' onPress={()=> navigation.navigate(MainNotes)} ></Button>
      </View>
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