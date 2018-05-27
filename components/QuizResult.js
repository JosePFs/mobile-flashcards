import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { white, lightBlack, green, red } from '../utils/colors';

export default function QuizResult ({ questions, correct, incorrect }) {
  const percent = Math.ceil((correct/questions) * 100);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{questions} questions</Text>
      <View style={styles.content}>
        <Text style={[styles.text, styles.result]}>{correct} correct</Text>
        <Text style={[styles.text, styles.result]}>{incorrect} incorrect</Text>
        <Text style={[styles.text, styles.result, (percent >= 50) ? styles.ok : styles.ko ]}>
          {percent}%
        </Text>
      </View>
    </View>    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,    
    backgroundColor: white
  },
  content: {
    flex: 1,
    flexDirection: 'column',    
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: lightBlack,
    fontSize: 20, 
    margin: 15
  },
  result: {
    fontSize: 30
  },
  ok: {
    color: green
  },
  ko: {
    color: red
  }
});
