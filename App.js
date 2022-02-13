import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import StartGame from './screens/StartGame';
import Game from './screens/Game';
import GameOver from './screens/GameOver';
import { useState } from 'react';

import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf'),
  });
};

export default function App() {
  const [userInput, setUserInput] = useState(null);
  const [roundsNumber, setRoundsNumber] = useState(0);
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  if (!isDataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setIsDataLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  const handleStartGame = (selectedNum) => {
    setUserInput(selectedNum);
  };

  const handleRestart = () => {
    setUserInput(null);
    setRoundsNumber(0);
  };

  const handleGameEnd = (roundsNum) => {
    setRoundsNumber(roundsNum);
  };

  return (
    <View style={styles.root}>
      <Header title={'guessApp'}></Header>
      {!userInput && <StartGame onStart={handleStartGame} />}
      {userInput && roundsNumber <= 0 && (
        <Game userNumber={userInput} onEnd={handleGameEnd} />
      )}
      {roundsNumber > 0 && (
        <GameOver
          userNumber={userInput}
          roundsNumber={roundsNumber}
          onRestart={handleRestart}
        ></GameOver>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
