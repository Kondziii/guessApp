import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';

import TitleText from '../components/TitleText';
import BodyText from '../components/BodyText';
import colors from '../constants/colors';
import BasicButton from '../components/BasicButton';

const GameOver = ({ userNumber, roundsNumber, onRestart }) => {
  return (
    <View style={styles.container}>
      <TitleText>End of the game!</TitleText>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://s1.tvp.pl/images2/a/5/2/uid_a520565f4b8bb181d043e9f006a630bb1620647314924_width_1280_play_0_pos_0_gs_0_height_720_w-ostatnim-czasie-z-gory-ewakuowano-ponad-30-zakazonych-alpinistow-fot-shutterstockvixit.jpg',
          }}
        ></Image>
      </View>
      <View style={styles.resultContainer}>
        <BodyText style={{ textAlign: 'center' }}>
          The phone needed <Text style={styles.highlight}>{roundsNumber}</Text>{' '}
          rounds to guess your number{' '}
          <Text style={styles.highlight}>{userNumber}</Text>.
        </BodyText>
      </View>
      <BasicButton onPress={onRestart}>restart</BasicButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },

  imageContainer: {
    width: 300,
    height: 300,
    marginVertical: 15,
    borderRadius: 150,
    borderColor: 'black',
    borderWidth: 1,
    elevation: 5,
    overflow: 'hidden',
  },

  image: {
    width: '100%',
    height: '100%',
  },

  resultContainer: {
    marginHorizontal: 15,
    marginVertical: 10,
  },

  highlight: {
    fontFamily: 'roboto-bold',
    color: colors.primary,
  },
});

export default GameOver;
