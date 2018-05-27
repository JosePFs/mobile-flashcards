import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { white, lightBlack, gray } from '../utils/colors';
import TextButton from './TextButton';
import TextInput from './TextInput';

class AddCard extends Component {
  static navigationOptions = () => {
    return {
      title: 'Add Card'
    }
  }

  state = {
    question: '',
    answer: ''
  }

  render() {
    const { deck } = this.props.navigation.state.params;

    return (
      <View style={styles.contentContainer}>
        <Text style={styles.deck}>{deck.name}</Text>
        <TextInput
          placeholder="Question"
          onChangeText={(question) => this.setState({question})}
          style={styles.textInput}
        >
        </TextInput>
        <TextInput
          placeholder="Answer"
          onChangeText={(answer) => this.setState({answer})}
          style={styles.textInput}
        >
        </TextInput>
        <View style={styles.bottom}>
          <TextButton style={styles.textButton}>
            Submit
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
  textButton: {
    fontSize: 20,
    backgroundColor: lightBlack,
    color: white,
    marginBottom: 30
  },
  bottom: {
    flex: 2,
    justifyContent: 'flex-end',    
  }
});

export default AddCard;