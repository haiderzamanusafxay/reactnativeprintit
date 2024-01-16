import {Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const BlueBtn = props => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={['#6a1ed2', '#01deb6']}
      style={styles.container}>
      <Pressable style={styles.BlueBtn}>
        <Text style={styles.BlueBtnText}>{props.name}</Text>
      </Pressable>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    borderRadius: 8,
    height: 60,
    marginTop: 20,
  },
  BlueBtn: {
    marginTop: 20,
    width: '90%',
    justifyContent: 'center',
    alignContent: 'center',
  },
  BlueBtnText: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default BlueBtn;
