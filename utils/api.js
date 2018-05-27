import { AsyncStorage } from 'react-native';

import { formatResults } from './helpers';
import { defaultDecks } from './mocks';

const DECKS_STORAGE_KEY = 'Flashcards:decks';
const CALENDAR_STORAGE_KEY = 'Flashcards:calendar';

export function getDecks () {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then(results => (formatResults(results, defaultDecks)))
}

export function getDeck (deckId) {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then(results => (formatResults(results, {})))
}

export function saveDeckTitle (title) {
  return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
    [title]: {
      title: title
    }
  })).then(results => (formatResults(results, {})));
}

export function addCardToDeck (title, card) {
  return AsyncStorage.getItem(CALENDAR_STORAGE_KEY)
    .then((results) => {
      const deck = JSON.parse(results)[title];
      const questions = deck[questions] || [];
      questions.push(card);
      return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
        [title]: {
          questions 
        }
      }));
    }).then(results => (formatResults(results, {})));
}