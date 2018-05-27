import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { white, lightBlack } from '../utils/colors';

export default function QuizStatus ({ card, deck }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>2/2</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    marginRight: 'auto',
    marginLeft: 15
  },
  title: {
    fontSize: 20
  }
})