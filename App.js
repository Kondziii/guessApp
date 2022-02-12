import { StyleSheet, Text, View } from 'react-native';

import Header from './components/Header';
import StartGame from './screens/StartGame';

export default function App() {
  return (
    <View style={styles.root}>
      <Header title={'guessApp'}></Header>
      <StartGame />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
