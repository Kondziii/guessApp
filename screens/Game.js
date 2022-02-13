import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Alert,
  ScrollView,
  FlatList,
} from 'react-native';
import NumberOutput from '../components/NumberOutput';
import Card from '../components/Card';
import TitleText from '../components/TitleText';
import BasicButton from '../components/BasicButton';
import { Ionicons } from '@expo/vector-icons';
import BodyText from '../components/BodyText';

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
  const initialGuess = randomNumber(1, 100, props.userNumber);
  const [guess, setGuess] = useState(initialGuess);
  const startRange = useRef(1);
  const endRange = useRef(100);
  const [guessList, setGuessList] = useState([initialGuess]);

  const { userNumber, onEnd } = props;

  // const renderListItem = (value, numOfRound) => {
  //   return (
  //     <View key={value} style={styles.listItem}>
  //       <BodyText>#{numOfRound}</BodyText>
  //       <BodyText>{value}</BodyText>
  //     </View>
  //   );
  // };

  const renderListItem = (listLength, dataItem) => {
    return (
      <View key={dataItem.item} style={styles.listItem}>
        <BodyText>#{listLength - dataItem.index}</BodyText>
        <BodyText>{dataItem.item}</BodyText>
      </View>
    );
  };

  useEffect(() => {
    if (guess === userNumber) {
      onEnd(guessList.length);
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
      startRange.current = guess + 1;
    }

    const currentGuess = randomNumber(
      startRange.current,
      endRange.current,
      guess
    );

    setGuess(currentGuess);
    setGuessList((prevList) => [currentGuess, ...prevList]);
  };

  return (
    <View style={styles.gameContainer}>
      <TitleText>Oponent's guess</TitleText>
      <NumberOutput value={guess}></NumberOutput>
      <Card style={styles.buttonsContainer}>
        <BasicButton onPress={handleGivenTip.bind(this, 'lower')}>
          <Ionicons name='md-remove' color={'white'} size={26} />
        </BasicButton>
        <BasicButton onPress={handleGivenTip.bind(this, 'greater')}>
          <Ionicons name='md-add' color={'white'} size={26} />
        </BasicButton>
      </Card>
      <View style={styles.list}>
        {/* <ScrollView contentContainerStyle={styles.scrollList}>
          {guessList.map((item, index) =>
            renderListItem(item, guessList.length - index)
          )}
        </ScrollView> */}
        <FlatList
          keyExtractor={(item) => item.toString()}
          data={guessList}
          contentContainerStyle={styles.scrollList}
          renderItem={renderListItem.bind(this, guessList.length)}
        ></FlatList>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  gameContainer: {
    alignItems: 'center',
    paddingTop: 10,
    flex: 1,
  },

  buttonsContainer: {
    flexDirection: 'row',
    maxWidth: '80%',
    width: 300,
    justifyContent: 'space-around',
    padding: 20,
  },

  list: {
    flex: 1,
    width: '60%',
  },

  scrollList: {
    justifyContent: 'flex-end',
    flexGrow: 1,
  },

  listItem: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 15,
    marginVertical: 10,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
});

export default Game;
