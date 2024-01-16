import {View, Text, Image, Pressable} from 'react-native';
import React from 'react';
import {StyleSheet} from 'react-native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const ToolElement = props => {
  const image = `../../assests/images/${props?.image}`;
  return (
    <View style={styles.ToolElement}>
      <View style={styles.imageArea}>
        <Image source={image} style={styles.image} />
      </View>
      <View style={styles.infoArea}>
        <Text style={styles.infoHead}>{props.title}</Text>
        <Text style={styles.infoSubHead}>{props.subTitle}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ToolElement: {
    margin: RFValue(10),
    height: RFValue(75),
    width: wp('80%'),
    backgroundColor: 'white',
    borderRadius: RFValue(8),
    bottom: RFValue(5),
    padding: RFValue(10),
    flexDirection: 'row',
    alignItems: 'center',
  },

  imageArea: {
    width: wp('20%'),
    height: RFValue(40),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  image: {
    width: RFValue(40),
    height: RFValue(40),
  },
  infoHead: {
    fontSize: RFValue(20),
    fontWeight: 'bold',
  },
  infoSubHead: {
    fontSize: RFValue(10),
  },
});

export default ToolElement;
