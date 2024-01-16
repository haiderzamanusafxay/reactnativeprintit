import {View, Text, StyleSheet, TextInput, Image} from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Feather';
import React from 'react';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const StickySearchBar = () => {
  return (
    <View style={styles.searchContainer}>
      <Icon name="menu" size={30} color="black" style={styles.menuIcon} />
      <TextInput placeholder="Good Everning Ali" style={styles.searchInput} />
      <Image
        source={require('../../assests/images/profile.png')}
        style={styles.profileImage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    position: 'absolute',
    top: RFValue(5),
    flexDirection: 'row',
    width: wp('90%'),
    height: RFValue(50),
    backgroundColor: 'white',
    borderRadius: RFValue(8),
    paddingLeft: RFValue(150),
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuIcon: {
    position: 'absolute',
    left: 10,
  },
  searchInput: {
    width: wp('100%'),
    height: RFValue(60),
  },
  profileImage: {
    width: RFValue(40),
    height: RFValue(40),
    borderRadius: RFValue(20),
    position: 'absolute',
    right: RFValue(10),
  },
});

export default StickySearchBar;
