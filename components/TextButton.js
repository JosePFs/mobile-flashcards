import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

import { white, lightBlack } from '../utils/colors';

export default function TextButton ({ children, onPress, style = {} }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={[styles.reset, style]}>{children}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  reset: {
    borderWidth: 1,
    borderRadius: 4,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 40,
    paddingRight: 40,
    textAlign: 'center',
    color: lightBlack,
    backgroundColor: white
  }
})