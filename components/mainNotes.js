import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';

import Home from './home'

const MainNotes = (props) => {
  const [value, onChangeText] = useState(`Get to Notin'`);
  const {navigation} = props
  
  return (
    <View>
      <Text>Hello you didnt break it</Text>
      <TextInput onChangeText={(text) => onChangeText(text)} value={value} />
      <Button title='Go to home' onPress={() => navigation.navigate(Home)}/>
    </View>
  );
};

export default MainNotes;
