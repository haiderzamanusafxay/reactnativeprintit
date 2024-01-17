import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
// import Icon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Ionicons';

const SelectionCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.locationIconContainer}>
        <Icon
          name="location-sharp"
          size={RFValue(50)}
          color="#4F51CB"
          style={styles.locationIcon}
        />
      </View>
      <View style={styles.main}>
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: wp('70%'),
    height: RFValue(120),
    position: 'absolute',
    flexDirection: 'row',
    left: RFValue(4),
    top: RFValue(122),
  },
  locationIconContainer: {
    height: RFValue(120),
    width: RFValue(45),
    alignItems: 'center',
    justifyContent: 'center',
  },
  locationIcon: {
    padding: RFValue(0),
    margin: RFValue(0),
  },
  main: {
    width: wp('75%'),
    height: RFValue(110),
    borderRadius: RFValue(10),
    backgroundColor: 'white',
  },
});

export default SelectionCard;
