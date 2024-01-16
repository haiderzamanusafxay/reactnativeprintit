import {TextInput, StyleSheet} from 'react-native';
import React from 'react';

const TextInputSign = props => {
  return (
    <TextInput
      placeholder={props.placeholder}
      style={SignInCSS.TextInput}
      placeholderTextColor={'#C1C1C1'}
    />
  );
};

const SignInCSS = StyleSheet.create({
  TextInput: {
    width: '90%',
    height: 60,
    marginTop: 20,
    backgroundColor: '#F6F6F6',
    borderRadius: 8,
    paddingLeft: 15,
  },
});

export default TextInputSign;
