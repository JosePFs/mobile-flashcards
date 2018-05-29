import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { white, lightBlack } from '../utils/colors';
import Deck from './Deck';
import TextButton from './TextButton';

class DeckDetail extends Component {
  static navigationOptions = ({ navigation }) => {
    const { deck } = navigation.state.params;
    return { 
      title: deck.title
    }
  }

  state = {
    deck: {
      title: '',
      questions: []
    }
  }

  componentDidMount() {
    this.props.navigation.addListener('didFocus', this.onDidFocus);
    const deck = this.props.navigation.getParam('deck');
    this.setState({deck});
  }

  onDidFocus = () => {
    const deck = this.props.navigation.getParam('deck');
    if (deck) {
      this.setState({deck});
    }
  }

  addCard = () => {
    const { deck } = this.state;
    const { navigate } = this.props.navigation;
    
    navigate('AddCard', {deck});
  }
  
  startQuiz = () => {
    const { deck } = this.state;
    const { navigate } = this.props.navigation;
    
    navigate('Quiz', {deck});
  }

  render() {
    const { deck } = this.state;

    return (
      <View style={styles.contentContainer}>
        <Deck stylesTitle={styles.title} stylesCardSum={styles.cardSum} deck={deck} />
        <View style={styles.textButtonsContainer}>
          <TextButton 
            style={{viewTextButton: styles.viewTextButton, textTextButton: styles.textTextButton}}
            onPress={this.addCard}>Add Card</TextButton
            >
          {deck.questions.length > 0 && <TextButton 
            style={{viewTextButton: [styles.viewTextButton, styles.viewTextButtonBlack], textTextButton: [styles.textTextButton, styles.textButtonBlack]}} 
            onPress={this.startQuiz}>
            Start Quiz
          </TextButton>}
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
  textButtonsContainer: {
    marginBottom: 50
  },
  viewTextButtonBlack: {
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