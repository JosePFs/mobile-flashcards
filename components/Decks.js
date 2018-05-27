import React, { Component } from 'react';
import { 
  ScrollView,
  View,
  Text,
  StyleSheet,
  Animated
} from 'react-native';

import { AppLoading } from 'expo';

import { white, lightGray, lightBlack, gray } from '../utils/colors';
import Deck from './Deck';

const decks = [
  { name: 'nombre 1', cards: [{ question: '?', response: '!' }, { question: '?', response: '!' }, { question: '?', response: '!' }]},
  { name: 'nombre 2', cards: [{ question: '?', response: '!' }, { question: '?', response: '!' }]},
  { name: 'nombre 3', cards: [{ question: '?', response: '!' }] },
  { name: 'nombre 4', cards: [{ question: '?', response: '!' }] },
  { name: 'nombre 5', cards: [{ question: '?', response: '!' }] },
  { name: 'nombre 6', cards: [{ question: '?', response: '!' }] },
  { name: 'nombre 7', cards: [{ question: '?', response: '!' }] }
];

class Decks extends Component {
  
  state = {
    ready: true
  }

  selectDeck(deck) {
    const { navigate } = this.props.navigation;
    navigate('DeckDetail', { deck });
  }

  render() {
    const { ready } = this.state;

    if (ready === false) {
      return <AppLoading />
    }

    if (decks.length === 0) {
      return (
        <View style={styles.center}>
          <Text style={styles.message}>No desk found! Add deck in main menu</Text>
        </View>
      );
    }

    return (
      <ScrollView style={styles.contentContainer}>
        {decks.map(deck => (
          <View key={deck.name} style={styles.container}>
            <View>
              <Deck deck={deck} onPress={() => this.selectDeck(deck)} />
            </View>
          </View>
        ))}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    backgroundColor: white
  },
  container: {
    borderBottomColor: lightGray,
    borderBottomWidth: 1
  },
  message: {
    color: gray,
    fontSize: 14
  }
});


export default Decks;