import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  Image,
} from 'react-native';
import {useEffect} from 'react';
import Icon from 'react-native-vector-icons/Feather';
import React from 'react';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import {show, hide} from '../store/features/DrawerSlice';

const StickySearchBar = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const drawerState = useSelector(state => state.drawer.value);
  const handleClick = () => {
    drawerState ? dispatch(hide()) : dispatch(show());
    navigation.openDrawer();
  };
  return (
    <View style={styles.searchContainer}>
      <Pressable onPress={handleClick} style={styles.menuIcon}>
        <Icon name="menu" size={30} color="black" />
      </Pressable>
      <TextInput placeholder="Good Evening Ali" style={styles.searchInput} />
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
