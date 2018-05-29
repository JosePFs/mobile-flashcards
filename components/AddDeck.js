import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { white, lightBlack, gray } from '../utils/colors';
import TextButton from './TextButton';
import TextInput from './TextInput';
import { saveDeckTitle } from '../utils/api';

class AddDeck extends Component {

  state = {
    title: ''
  }

  addDeck = () => {
    const { title } = this.state;
    if (title.length === 0) {
      return;
    }
    saveDeckTitle(title)
    .then((deck) => {
      this.setState({title: ''});
      const { navigate } = this.props.navigation;
      navigate('Decks', { deck });
    });
  }

  render() {
    const { title } = this.state;

    return (
      <View style={styles.contentContainer}>
        <Text style={styles.title}>What is the title of your new deck?</Text>
        <TextInput
          placeholder="Deck Title"
          onChangeText={(title) => this.setState({title})}
          value={title}
        >
        </TextInput>
        <TextButton onPress={() => this.addDeck()} style={{viewTextButton: styles.viewTextButton, textTextButton: styles.textTextButton}}>
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