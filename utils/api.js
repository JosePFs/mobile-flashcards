import { AsyncStorage } from 'react-native';

import { formatResults } from './helpers';

const DECKS_STORAGE_KEY = 'Flashcards:decks';
const CALENDAR_STORAGE_KEY = 'Flashcards:calendar';

export function getDecks () {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then(results => (formatResults(results, null)))
}

export function getDeck (deckId) {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then(results => (formatResults(results, {})))
}

export function saveDeckTitle (title) {
  const deck = {
    [title]: {
      title: title,
      questions: []
    }
  };
  return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify(deck))
    .then(() => (deck));
}

export function addCardToDeck (title, card) {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then((results) => {
      const deck = JSON.parse(results)[title];
      deck.questions.push(card);
      AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
        [title]: deck
      }));
      return deck;
    }).then(deck => (deck));
}

export function clear () {
  return AsyncStorage.removeItem(DECKS_STORAGE_KEY)
    .then(() => ({}));
}