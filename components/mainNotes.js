import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';
// components
// import Home from './home'
// utils
import saveNote from '../utils/saveNote'

const MainNotes = (props) => {
  const [value, onChangeText] = useState(`Get to Notin'`);
  const {navigation} = props
  // console.log(value)
  return (
    <View>
      <Text>Title</Text>
      <TextInput style={styles.textInput}/>
      <Text>Note</Text>
      <TextInput style={styles.textInput} onChangeText={(text) => onChangeText(text)} value={value} multiline={true} />
      <Button title='Save Note' onPress={() => saveNote(value)}/>
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
  },
  button: {

  }
})

export default MainNotes;
