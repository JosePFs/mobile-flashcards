import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { white, lightBlack, gray } from '../utils/colors';
import TextButton from './TextButton';
import TextInput from './TextInput';
import { addCardToDeck } from '../utils/api';

class AddCard extends Component {
  static navigationOptions = () => {
    return {
      title: 'Add Card'
    }
  }

  state = {
    question: null,
    answer: null
  }

  addCard = () => {
    const { question, answer } = this.state;
    const { deck } = this.props.navigation.state.params;

    if (question.length === 0 || answer.length === 0) {
      return;
    }
    addCardToDeck(deck.title, {question, answer})
    .then((deck) => {
      this.setState({question: '', answer: ''});
      const { navigate } = this.props.navigation;
      navigate('DeckDetail', { deck });
    });
  }

  render() {
    const { question, answer } = this.state;
    const { deck } = this.props.navigation.state.params;

    return (
      <View style={styles.contentContainer}>
        <Text style={styles.deck}>{deck.name}</Text>
        <TextInput
          placeholder="Question"
          onChangeText={(question) => this.setState({question})}
          style={styles.textInput}
          value={question}
        >
        </TextInput>
        <TextInput
          placeholder="Answer"
          onChangeText={(answer) => this.setState({answer})}
          style={styles.textInput}
          value={answer}
        >
        </TextInput>
        <View style={styles.bottom}>
          <TextButton
            onPress={this.addCard}
            isDisabled={!question || !answer}
            style={{viewTextButton: styles.viewTextButton, textTextButton: styles.textTextButton}}
            >
            Create Card
          </TextButton>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    backgroundColor: white,
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  deck: {
    fontSize: 20,
    marginTop: 30    
  },
  textInput: {
    borderColor: lightBlack,
    marginTop: 30    
  },
  viewTextButton: {
    backgroundColor: lightBlack,
    marginBottom: 90
  },
  textTextButton: {
    fontSize: 20,
    color: white
  },
  bottom: {
    flex: 2,
    justifyContent: 'flex-end',    
  }
});

export default AddCard;