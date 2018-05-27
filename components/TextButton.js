import React from 'react';
import { View, Text, TouchableNativeFeedback, StyleSheet } from 'react-native';

import { white, lightBlack } from '../utils/colors';

export default function TextButton ({ children, onPress, style = {viewTextButton, textTextButton}}) {
  return (
    <TouchableNativeFeedback onPress={onPress}>
      <View style={[styles.container, style.viewTextButton]}>
        <Text style={[styles.text, style.textTextButton]}>{children}</Text>
      </View>
    </TouchableNativeFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 4,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 40,
    paddingRight: 40,
    backgroundColor: white
  },
  text: {
    color: lightBlack,
    textAlign: 'center'    
  }
})