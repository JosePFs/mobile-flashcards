import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { white, lightBlack } from '../utils/colors';
import Deck from './Deck';
import TextButton from './TextButton';

class DeckDetail extends Component {
  static navigationOptions = ({ navigation }) => {
    const { deck } = navigation.state.params;
    
    return {
      title: deck.name
    }
  }

  addCard = () => {
    const { deck } = this.props.navigation.state.params;
    const { navigate } = this.props.navigation;
    navigate('AddCard', {deck});
  }
  
  startQuiz = () => {
    const { deck } = this.props.navigation.state.params;
    const { navigate } = this.props.navigation;
    navigate('Quiz', {deck});
  }

  render() {
    const { deck } = this.props.navigation.state.params;

    return (
      <View style={styles.contentContainer}>
        <Deck stylesTitle={styles.title} stylesCardSum={styles.cardSum} deck={deck} />
        <TextButton 
          style={{viewTextButton: styles.viewTextButton, textTextButton: styles.textTextButton}}
          onPress={this.addCard}>Add Card</TextButton
          >
        <TextButton 
          style={{viewTextButton: [styles.viewTextButton, styles.viewTextButtonBottom], textTextButton: [styles.textTextButton, styles.textButtonBlack]}} 
          onPress={this.startQuiz}>
          Start Quiz
        </TextButton>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    backgroundColor: white,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 35
  },
  cardSum: {
    fontSize: 20
  },
  viewTextButton: {
    margin: 10,
  },
  viewTextButtonBottom: {
    marginBottom: 50,
    backgroundColor: lightBlack    
  },
  textTextButton: {
    fontSize: 20
  },
  textButtonBlack: {
    color: white
  }
});

export default DeckDetail;