import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { clickProps } from 'react-native-web/dist/cjs/modules/forwardedProps';

const TitleText = (props) => {
  return (
    <Text style={{ ...styles.title, ...props.style }}>{props.children}</Text>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 26,
    fontFamily: 'open-sans-bold',
    color: '#ccc',
  },
});

export default TitleText;
