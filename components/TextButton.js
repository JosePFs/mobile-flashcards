import React from 'react';
import {
  View,
  Text,
  TouchableNativeFeedback,
  TouchableHighlight,
  StyleSheet,
  Platform
} from 'react-native';

import { white, lightBlack, lightGray, gray } from '../utils/colors';

export default function TextButton ({ children, isDisabled = false, onPress, style = {viewTextButton, textTextButton}}) {
  if (Platform.OS === 'ios') {
    return (
      <TouchableHighlight disabled={isDisabled} onPress={onPress}>
        {getButton(children, isDisabled, style)}
      </TouchableHighlight>  
    );
  }
  return (
    <TouchableNativeFeedback disabled={isDisabled} onPress={onPress}>
      {getButton(children, isDisabled, style)}
    </TouchableNativeFeedback>
  )
}

function getButton(children, isDisabled, style) {
  return (
    <View style={[styles.container, style.viewTextButton, isDisabled && {opacity: .7}]}>
      <Text style={[styles.text, style.textTextButton]}>{children}</Text>
    </View>
  );
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