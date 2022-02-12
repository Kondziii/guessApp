import React from 'react';
import { StyleSheet, Text } from 'react-native';
import colors from '../constants/colors';

const NumberOutput = ({ value }) => {
  return <Text style={styles.confirmedValue}>{value}</Text>;
};

const styles = StyleSheet.create({
  confirmedValue: {
    fontSize: 24,
    borderColor: colors.primary,
    borderWidth: 2,
    borderRadius: 5,
    padding: 10,
    color: colors.primary,
    textAlign: 'center',
    marginVertical: 10,
  },
});

export default NumberOutput;
