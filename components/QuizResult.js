import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { white, lightBlack, green, red, lightGray } from '../utils/colors';
import TextButton from './TextButton';

export default function QuizResult ({ deck, correct, incorrect, navigation, onRestart }) {
  const questions = deck.questions.length;
  const percent = Math.ceil((correct/questions) * 100);

  restartQuiz = () => {
    onRestart();
  }

  backToDeck = () => {
    navigation.navigate('DeckDetail', {deck});
  }

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
      <View style={styles.textButtonsContainer}>
        <TextButton 
          style={{viewTextButton: styles.viewTextButton, textTextButton: styles.textTextButton}}
          onPress={this.restartQuiz}>
          Restart Quiz
        </TextButton>
        <TextButton 
          style={{viewTextButton: styles.viewTextButton, textTextButton: styles.textTextButton}} 
          onPress={this.backToDeck}>
          Back to Deck
        </TextButton>
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
    alignItems: 'center',
    margin: 55,
    borderWidth: 1,
    borderColor: lightGray,
    borderRadius: 4,
    elevation: 1
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
  },
  textButtonsContainer: {
    marginBottom: 50,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  viewTextButton: {
    margin: 10,
    width: '50%',
    backgroundColor: lightBlack    
  },
  textTextButton: {
    fontSize: 20,
    color: white
  }
});
