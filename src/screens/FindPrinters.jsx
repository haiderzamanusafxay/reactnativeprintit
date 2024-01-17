import {
  View,
  Text,
  TextInput,
  ImageBackground,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';

import {SafeAreaView} from 'react-native-safe-area-context';
import {StyleSheet} from 'react-native';
import FindPointersCSS from '../../assests/css/FindPointersCSS';
import StickySearchBar from '../components/StickySearchBar';
import DetailCard from '../components/DetailCard';
import SelectionCard from '../components/SelectionCard';

const FindPointers = () => {
  const image1 = '../../assests/images/9doc.png';
  const image2 = '../../assests/images/9imageGallery.png';
  const image3 = '../../assests/images/9scannerIcon.png';

  return (
    <>
      <SafeAreaView style={FindPointersCSS.container}>
        <ScrollView>
          <ImageBackground
            source={require('../../assests/images/map.png')}
            style={FindPointersCSS.SelectionContainer}>
            <Icon
              name="location-sharp"
              size={RFValue(50)}
              color="#4F51CB"
              style={styles.locationIcon}
            />
            <Icon
              name="location-sharp"
              size={RFValue(50)}
              color="#4F51CB"
              style={FindPointersCSS.absoluteLocationIcon}
            />
            <StickySearchBar />
            <SelectionCard />
            <DetailCard />
          </ImageBackground>
          <View style={{alignItems: 'center'}}>
            <View style={styles.ToolElement}>
              <View style={styles.imageArea}>
                <Image source={require(image1)} style={styles.image} />
              </View>
              <View style={styles.infoArea}>
                <Text style={styles.infoHead}>Print Document</Text>
                <Text style={styles.infoSubHead}>
                  Select a file from your phone to print
                </Text>
              </View>
            </View>
            <View style={styles.ToolElement}>
              <View style={styles.imageArea}>
                <Image source={require(image2)} style={styles.image} />
              </View>
              <View style={styles.infoArea}>
                <Text style={styles.infoHead}>Photocopy</Text>
                <Text style={styles.infoSubHead}>
                  Select an image from your gallery to print
                </Text>
              </View>
            </View>
            <View style={styles.ToolElement}>
              <View style={styles.imageArea}>
                <Image source={require(image3)} style={styles.image} />
              </View>
              <View style={styles.infoArea}>
                <Text style={styles.infoHead}>Print Photo</Text>
                <Text style={styles.infoSubHead}>
                  Select a photo from your gallery
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
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
    width: RFValue(35),
    height: RFValue(45),
  },
  infoHead: {
    fontSize: RFValue(20),
    fontWeight: 'bold',
  },
  infoSubHead: {
    fontSize: RFValue(10),
  },
});

export default FindPointers;
export {styles};