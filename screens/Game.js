import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import NumberOutput from '../components/NumberOutput';
import Card from '../components/Card';

const randomNumber = (min, max, exclude) => {
  const minVal = Math.ceil(min);
  const maxVal = Math.floor(max);
  const randomVal = Math.floor(Math.random() * (maxVal - minVal) + minVal);
  if (randomVal === exclude) {
    return randomNumber(min, max, exclude);
  } else {
    return randomVal;
  }
};

const Game = (props) => {
  const [guess, setGuess] = useState(randomNumber(1, 100, props.userNumber));
  const startRange = useRef(1);
  const endRange = useRef(99);
  const [roundsAmount, setRoundsAmount] = useState(0);

  const { userNumber, onEnd } = props;

  useEffect(() => {
    if (guess === userNumber) {
      onEnd(roundsAmount);
    }
  }, [guess, userNumber, onEnd]);

  const handleGivenTip = (tip) => {
    if (
      (tip === 'lower' && guess < props.userNumber) ||
      (tip === 'greater' && guess > props.userNumber)
    ) {
      Alert.alert("That's a lie!", "You know that isnt't true...", [
        { style: 'cancel', text: "I'm sorry" },
      ]);
      return;
    }

    if (tip === 'lower') {
      endRange.current = guess;
    } else {
      startRange.current = guess;
    }

    setGuess(randomNumber(startRange.current, endRange.current, guess));
    setRoundsAmount((currVal) => ++currVal);
  };

  return (
    <View style={styles.gameContainer}>
      <Text style={{ fontSize: 16 }}>Oponent's guess</Text>
      <NumberOutput value={guess}></NumberOutput>
      <Card style={styles.buttonsContainer}>
        <Button
          title='lower'
          onPress={handleGivenTip.bind(this, 'lower')}
        ></Button>
        <Button
          title='greater'
          onPress={handleGivenTip.bind(this, 'greater')}
        ></Button>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  gameContainer: {
    alignItems: 'center',
    paddingTop: 10,
  },

  buttonsContainer: {
    flexDirection: 'row',
    maxWidth: '80%',
    width: 300,
    justifyContent: 'space-around',
    padding: 20,
  },
});

export default Game;
