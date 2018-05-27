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
import { getDecks } from '../utils/api';
import Deck from './Deck';

class Decks extends Component {
  
  state = {
    ready: false,
    decks: ''
  }

  componentDidMount() {
    getDecks()
      .then(decks => this.setState({decks}))
      .then(() => this.setState(() => ({ready: true})))
  }

  selectDeck(deck) {
    const { navigate } = this.props.navigation;
    navigate('DeckDetail', { deck });
  }

  render() {
    const { ready, decks } = this.state;

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
        {Object.values(decks).map(deck => (
          <View key={deck.title} style={styles.container}>
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
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    color: gray,
    fontSize: 14
  }
});


export default Decks;