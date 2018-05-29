import React, { Component } from 'react';
import { TouchableNativeFeedback, View, Text, StyleSheet, Animated } from 'react-native';

import { gray, lightBlack } from '../utils/colors';

class Deck extends Component {
  state = {
    bounceValue: new Animated.Value(1)
  }

  componentDidMount() {
    const { bounceValue } = this.state;

    Animated.sequence([
      Animated.timing(bounceValue, { duration: 200, toValue: 1.04}),
      Animated.spring(bounceValue, { toValue: 1, friction: 4})
    ]).start();
  }

  getDeck = () => {
    const { deck, stylesTitle, stylesCardSum } = this.props;
    const questionsLength = deck.questions ? deck.questions.length : 0;

    return (
      <View style={styles.center}>
        <Text style={[styles.title, stylesTitle]}>{deck.title}</Text>
        <Text style={[styles.cardsSum, stylesCardSum]}>{questionsLength} cards</Text>
      </View>
  )}

  getDeckWithEffect = () => {
    const { deck, stylesTitle, stylesCardSum } = this.props;
    const { bounceValue } = this.state;

    return (
      <View style={styles.center}>
        <Animated.Text style={[styles.title, stylesTitle, {transform: [{scale: bounceValue}]}]}>{deck.title}</Animated.Text>
        <Animated.Text style={[styles.cardsSum, stylesCardSum, {transform: [{scale: bounceValue}]}]}>{deck.questions.length} cards</Animated.Text>
      </View>
  )}

  render() {
    const { onPress } = this.props;
    
    if (onPress) {
      return (
        <TouchableNativeFeedback onPress={() => onPress()}>
          {this.getDeck()}
        </TouchableNativeFeedback>
      );
    }

    return this.getDeckWithEffect();
  }
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30
  },
  title: {
    color: lightBlack,
    fontSize: 25,
    textAlign: 'center' 
  },
  cardsSum: {
    marginTop: 8,
    color: gray
  }
});


export default Deck;