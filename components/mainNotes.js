import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';

import Home from './home'

const MainNotes = (props) => {
  const [value, onChangeText] = useState(`Get to Notin'`);
  const {navigation} = props
  
  return (
    <View>
      <Text>Title</Text>
      <TextInput/>
      <Text>Note</Text>
      <TextInput style={styles.textInput} onChangeText={(text) => onChangeText(text)} value={value} multiline={true} />
      <Button title='Go to home' onPress={() => navigation.navigate(Home)}/>
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    margin: 5,
    padding: 2,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10
  }
})

export default MainNotes;
