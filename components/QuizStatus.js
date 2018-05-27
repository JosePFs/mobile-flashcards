import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function QuizStatus ({ deckCardIndex, deckTotalCards }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{deckCardIndex+1}/{deckTotalCards}</Text>
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