import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { white, lightBlack } from '../utils/colors';

export default function Card ({ card }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Does React Native work with Android sure sure sure?</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 16
  },
  title: {
    fontSize: 30,
    textAlign: 'center'
  }
})