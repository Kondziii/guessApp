import React from 'react';
import { View, StyleSheet, Text, TextInput, Button } from 'react-native';

import Card from '../components/Card';

const StartGame = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start the game</Text>
      <Card style={styles.cardContainer}>
        <Text>Select a number</Text>
        <TextInput placeholder='your guess'></TextInput>
        <View style={styles.actions}>
          <Button title='reset' onPress={() => {}}></Button>
          <Button title='confirm' onPress={() => {}}></Button>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
  },

  title: {
    fontSize: 24,
    marginVertical: 15,
  },

  cardContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
  },

  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 15,
  },
});

export default StartGame;
