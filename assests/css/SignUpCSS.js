import {StyleSheet} from 'react-native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const SignUpCSS = StyleSheet.create({
  SafeAreaView: {
    height: hp('100%'),
    width: wp('100%'),
  },
  termsAndCondition: {
    flexDirection: 'row',
    marginTop: RFValue(10),
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  bottomText: {
    marginTop: RFValue(20),
    color: '#9A9A9A',
    fontSize: RFValue(14),
    fontWeight: 'bold',
    marginBottom: RFValue(40),
  },
});
