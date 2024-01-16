import {View, Text, Image, Pressable} from 'react-native';
import React from 'react';
import {StyleSheet} from 'react-native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const DetailCard = () => {
  return (
    <View style={styles.DetailCard}>
      <View style={styles.infoArea}>
        <Text style={{color: '#01DEB6'}}>No Printer selected</Text>
        <Text style={{color: "#4C4C4C", fontWeight: 'bold', fontSize: RFValue(16)}}>Please Select a Printer</Text>
      </View>
      <View style={styles.imageArea}>
        <Image
          source={require('../../assests/images/qrcode.png')}
          style={styles.image}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  DetailCard: {
    overflow: 'hidden',
    position: 'absolute',
    height: RFValue(80),
    width: wp('80%'),
    backgroundColor: 'white',
    borderRadius: RFValue(8),
    bottom: RFValue(5),
    padding: RFValue(20),
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoArea: {
    width: wp('60%'),
    flexDirection: 'column',
  },
  imageArea: {
    width: RFValue(40),
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
    width: RFValue(35),
    height: RFValue(35),
  },
});

export default DetailCard;
