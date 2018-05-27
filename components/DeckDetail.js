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

  }

  render() {
    const { deck } = this.props.navigation.state.params;

    return (
      <View style={styles.contentContainer}>
        <Deck stylesTitle={styles.title} stylesCardSum={styles.cardSum} deck={deck} />
        <TextButton style={styles.textButton} onPress={this.addCard}>Add Card</TextButton>
        <TextButton 
          style={[styles.textButton, styles.textButtonBlack, styles.textButtonBottom]} 
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
  textButton: {
    margin: 10,
    fontSize: 20
  },
  textButtonBlack: {
    backgroundColor: lightBlack,
    color: white
  },
  textButtonBottom: {
    marginBottom: 40
  }
});

export default DeckDetail;