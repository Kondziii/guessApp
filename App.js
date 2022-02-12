import { StyleSheet, Text, View } from 'react-native';

import Header from './components/Header';
import StartGame from './screens/StartGame';
import Game from './screens/Game';

import { useState } from 'react';

export default function App() {
  const [userInput, setUserInput] = useState(null);

  const handleStartGame = (selectedNum) => {
    setUserInput(selectedNum);
  };

  return (
    <View style={styles.root}>
      <Header title={'guessApp'}></Header>
      {!userInput && <StartGame onStart={handleStartGame} />}
      {userInput && <Game userNumber={userInput} />}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
