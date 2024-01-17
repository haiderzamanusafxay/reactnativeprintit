import {StyleSheet} from 'react-native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default FindPointersCSS = StyleSheet.create({
  container: {
    backgroundColor: '#F2F2F2',
    alignItems: 'center',
    width: wp('100%'),
    height: hp('100%'),
  },
  SelectionContainer: {
    width: wp('100%'),
    height: hp('55%'),
    alignItems: 'center',
    position: 'relative',
    top: 0,
  },
  ToolsContainer: {
    width: wp('100%'),
    height: hp('45%'),
    alignItems: 'center',
  },
  absoluteLocationIcon: {
    position: 'absolute',
    top: RFValue(60),
    left: RFValue(100),
  }
});
