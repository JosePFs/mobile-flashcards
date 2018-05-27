import React from 'react';
import { StyleSheet, TextInput as TextInputComponent } from 'react-native';

import { gray } from '../utils/colors';

export default function TextInput ({ placeholder, onChangeText, style = {} }) {
  return (
    <TextInputComponent
    style={[styles.textInput, style]}
    placeholder={placeholder}
    onChangeText={(text) => onChangeText(text)}
    >
    </TextInputComponent>
  )
}

const styles = StyleSheet.create({
  textInput: {
    width: '90%',
    height: 50,
    padding: 10,
    fontSize: 25,
    borderColor: gray,
    borderWidth: 1,
    borderRadius: 4
  }
})