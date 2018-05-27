import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { white, lightBlack, gray } from '../utils/colors';
import TextButton from './TextButton';
import TextInput from './TextInput';

class AddDeck extends Component {

  state = {
    title: ''
  }

  render() {
    return (
      <View style={styles.contentContainer}>
        <Text style={styles.title}>What is the title of your new deck?</Text>
        <TextInput
          placeholder="Deck Title"
          onChangeText={(title) => this.setState({title})}
        >
        </TextInput>
        <TextButton style={{viewTextButton: styles.viewTextButton, textTextButton: styles.textTextButton}}>
          Submit
        </TextButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    backgroundColor: white,
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: -90
  },
  viewTextButton: {
    backgroundColor: lightBlack
  },
  textTextButton: {
    fontSize: 20,
    color: white    
  }
});

export default AddDeck;