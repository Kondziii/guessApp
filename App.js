import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Header from './components/Header';

export default function App() {
  return (
    <View style={styles.root}>
      <Header title={'guessApp'}></Header>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
