import React, { Component } from 'react';
import { TouchableWithoutFeedback, View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { white, green, red } from '../utils/colors';
import Deck from './Deck';
import TextButton from './TextButton';
import QuizStatus from './QuizStatus';
import Card from './Card';

class Quiz extends Component {
  static navigationOptions = () => {    
    return {
      title: 'Quiz'
    }
  }

  state = {
    currentCard: ''
  }

  flip = () => {
    alert('flip');
  }

  correct = () => {
  }
  
  incorrect = () => {

  }

  render() {
    const { deck } = this.props.navigation.state.params;
    const { currentCard } = this.state;

    return (
      <View style={styles.contentContainer}>
        <QuizStatus card={currentCard} deck={deck} />
        <Card card={currentCard} />
        <TouchableWithoutFeedback
          onPress={this.flip}
          style={styles.flip}
        >
          <View><Text style={styles.flipText}>Flip</Text></View>
        </TouchableWithoutFeedback>
        <View>
          <TextButton 
            style={{
              viewTextButton: [styles.viewTextButtonCommon, styles.viewTextButtonGreen],
              textTextButton: styles.textTextButton
            }}
            onPress={this.correct}>
            Correct
          </TextButton>
          <TextButton 
            style={{
              viewTextButton: [styles.viewTextButtonCommon, styles.viewTextButtonRed],
              textTextButton: styles.textTextButton
            }}
            onPress={this.incorrect}>
            Incorrect
          </TextButton>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    backgroundColor: white,
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 50
  },
  title: {
    fontSize: 35
  },
  cardSum: {
    fontSize: 20
  },
  textTextButton: {
    fontSize: 20,
    color: white
  },
  viewTextButtonCommon: {
    margin: 10,
    minWidth: '50%'
  },
  viewTextButtonGreen: {
    backgroundColor: green    
  },
  viewTextButtonRed: {
    backgroundColor: red
  },
  flip: {
    backgroundColor: white
  },
  flipText: {
    color: red,
    fontSize: 20,
    fontWeight: "bold"
  }
});

export default Quiz;