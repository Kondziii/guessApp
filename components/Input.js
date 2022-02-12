import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const Input = (props) => {
  return (
    <TextInput
      {...props}
      style={{ ...styles.textinput, ...props.style }}
    ></TextInput>
  );
};

const styles = StyleSheet.create({
  textinput: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    padding: 3,
    marginVertical: 10,
  },
});

export default Input;
