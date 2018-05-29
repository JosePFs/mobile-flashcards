import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import FlipCard from 'react-native-flip-card';

import { white, green, red, lightBlack } from '../utils/colors';
import Deck from './Deck';
import TextButton from './TextButton';
import QuizStatus from './QuizStatus';
import QuizResult from './QuizResult';
import Card from './Card';

class Quiz extends Component {
  static navigationOptions = () => {    
    return {
      title: 'Quiz'
    }
  }

  state = {
    currentCardIndex: 0,
    correctResponses: 0,
    incorrectResponses: 0
  }

  step = () => {
    this.setState({currentCardIndex: this.state.currentCardIndex + 1});
  }

  correct = () => {
    this.step();
    this.setState({correctResponses: this.state.correctResponses + 1});
  }
  
  incorrect = () => {
    this.step();    
    this.setState({incorrectResponses: this.state.incorrectResponses + 1});    
  }

  restart = () => {
    this.setState({
      currentCardIndex: 0,
      correctResponses: 0,
      incorrectResponses: 0
    });
  }

  getCard(side) {
    const { deck } = this.props.navigation.state.params;
    const { currentCardIndex } = this.state;
    const currentCard = deck.questions[currentCardIndex];
    const cardText = side === 'answer'
                    ? currentCard.question
                    : currentCard.answer;

    return (
      <View style={styles.contentContainer}>
        <QuizStatus deckCardIndex={currentCardIndex} deckTotalCards={deck.questions.length} />
        <Card text={cardText} />
        <View style={styles.flip}><Text style={styles.flipText}>{side}</Text></View>
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

  render() {
    const { deck } = this.props.navigation.state.params;    
    const { currentCardIndex, correctResponses, incorrectResponses } = this.state;    

    if (deck.questions.length > 0 && 
        deck.questions.length === (correctResponses + incorrectResponses)) {
      return (
        <QuizResult
          navigation={this.props.navigation}
          deck={deck}
          correct={correctResponses}
          incorrect={incorrectResponses}
          onRestart={this.restart}
        />
      )
    }

    return (
      <View style={styles.cardContainer}>
        <FlipCard
          perspective={1000}
          clickable={true}
          flipHorizontal={true}
          flipVertical={false}
          alignWidth={true}
        >
          {this.getCard('answer')}
          {this.getCard('question')}
        </FlipCard>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  contentContainer: {
    backgroundColor: white,
    flex: 1,
    flexDirection: 'column',    
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 50,
    minWidth: '100%'
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