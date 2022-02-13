import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';

import Card from '../components/Card';
import colors from '../constants/colors';
import Input from '../components/Input';
import NumberOutput from '../components/NumberOutput';
import TitleText from '../components/TitleText';
import BasicButton from '../components/BasicButton';

const StartGame = (props) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [confirmedValue, setConfirmedValue] = useState(null);

  const handleEnteredValue = (inputText) => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ''));
  };

  const handleResetEvent = () => {
    setEnteredValue('');
    setConfirmed(false);
  };

  const handleConfirmEvent = () => {
    const inputNumber = parseInt(enteredValue);

    if (isNaN(inputNumber) || inputNumber <= 0 || inputNumber > 99) {
      Alert.alert('Wrong value', 'It has to be a number from range 1 to 99.', [
        { style: 'destructive', text: 'Okay', onPress: handleResetEvent },
      ]);
      return;
    }
    setConfirmedValue(inputNumber);
    setConfirmed(true);
    setEnteredValue('');
  };

  let confirmedFeedback;

  if (confirmed) {
    confirmedFeedback = (
      <Card style={styles.feedbackContainer}>
        <Text>You selected</Text>
        <NumberOutput value={confirmedValue} />
        <BasicButton onPress={() => props.onStart(confirmedValue)}>
          Start game
        </BasicButton>
      </Card>
    );
  }
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.screen}>
        <TitleText style={styles.title}>Start the game</TitleText>
        <Card style={styles.cardContainer}>
          <Text>Select a number</Text>
          <Input
            style={styles.input}
            keyboardType='number-pad'
            autoCorrect={false}
            autoCapitalize='none'
            maxLength={2}
            onChangeText={handleEnteredValue}
            value={enteredValue}
          ></Input>
          <View style={styles.actions}>
            <View style={{ width: '35%' }}>
              <Button
                title='reset'
                onPress={handleResetEvent}
                color={colors.primary}
              ></Button>
            </View>
            <View style={{ width: '35%' }}>
              <Button
                title='confirm'
                onPress={handleConfirmEvent}
                color={colors.secondary}
              ></Button>
            </View>
          </View>
        </Card>
        {confirmedFeedback}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
  },

  title: {
    // fontSize: 24,
    marginVertical: 40,
    // fontFamily: 'roboto-bold',
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
    marginTop: 10,
  },

  input: {
    textAlign: 'center',
    width: 60,
  },

  feedbackContainer: {
    marginVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
  },
});

export default StartGame;
