import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
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
        <View style={styles.upperContainer}>
          <View
            style={{
              width: RFValue(50),
              height: RFValue(50),
              overflow: 'hidden',
            }}>
            <Image
              source={require('../../assests/images/printer.png')}
              style={styles.image}
            />
          </View>
          <View style={styles.upperText}>
            <Text style={styles.header}>PG2357</Text>
            <View style={styles.address}>
              <Icon
                name="location-sharp"
                size={RFValue(10)}
                color="grey"
                style={styles.locationIcon}
              />
              <Text style={{fontSize: RFValue(8)}}>
                71-75 New Ocford st,london WC1A !DG
              </Text>
            </View>
            <Text style={{fontSize: RFValue(8), color: '#4F51CB'}}>
              <Icon name="time" size={RFValue(10)} color="#4F51CB" />
              8:00 Am - 10:00 Pm
            </Text>
          </View>
        </View>
        <Pressable style={styles.lowerContainer}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>Select</Text>
        </Pressable>
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
    flexDirection: 'column',
    overflow: 'hidden',
    padding: RFValue(10),
  },
  upperContainer: {
    padding: RFValue(10),
    flexDirection: 'row',
    height: RFValue(70),
    width: wp('100%'),
  },
  upperText: {
    flexDirection: 'column',
    overflow: "idden",
  },
  header: {
    fontSize: RFValue(20),
    fontWeight: 'bold',
    paddingBottom: RFValue(3),
  },
  address: {
    flexDirection: 'row',
  },
  image: {
    width: RFValue(40),
    height: RFValue(40),
    padding: RFValue(10),
  },
  lowerContainer: {
    borderRadius: RFValue(5),
    overflow: 'hidden',
    width: wp('70%'),
    height: RFValue(25),
    backgroundColor: '#4F51CB',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SelectionCard;
