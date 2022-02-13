import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const GameOver = ({ userNumber, roundsNumber, onRestart }) => {
  return (
    <View style={styles.container}>
      <Text>End of the game!</Text>
      <Text>The number guessed is: {userNumber}</Text>
      <Text>The phone needed {roundsNumber} rounds to guess your number.</Text>
      <Button title='Restart' onPress={onRestart}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});

export default GameOver;
