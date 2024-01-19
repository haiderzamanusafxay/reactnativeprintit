import {View, Text, Image, Pressable} from 'react-native';
import React from 'react';
import {StyleSheet} from 'react-native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const DetailCardSelected = () => {
  return (
    <View style={styles.DetailCard}>
        <View style={styles.leftImage}>
            <Image
            source={require('../../assests/images/printer.png')}
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

  
});

export default DetailCardSelected;
