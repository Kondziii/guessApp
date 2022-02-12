import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
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

  return (
    <View style={styles.gameContainer}>
      <Text style={{ fontSize: 16 }}>Oponent's guess</Text>
      <NumberOutput value={guess}></NumberOutput>
      <Card style={styles.buttonsContainer}>
        <Button title='lower'></Button>
        <Button title='greater'></Button>
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
