import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';
import { useState } from 'react';

const Note = () => {
  const [value, onChangeText] = useState(`Get to Notin'`);
  return (
    <View>
      <TextInput onChangeText={(text) => onChangeText(text)} value={value} />
    </View>
  );
};

export default Note;
