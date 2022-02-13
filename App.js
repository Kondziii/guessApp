import { StyleSheet, Text, View } from 'react-native';

import Header from './components/Header';
import StartGame from './screens/StartGame';
import Game from './screens/Game';
import GameOver from './screens/GameOver';

import { useState } from 'react';

export default function App() {
  const [userInput, setUserInput] = useState(null);
  const [roundsNumber, setRoundsNumber] = useState(0);

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
