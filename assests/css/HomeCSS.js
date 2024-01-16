import {StyleSheet} from 'react-native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const HomeCSS = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: wp('100%'),
    height: hp('100%'),
  },
  logopart: {
    width: wp('100%'),
    height: hp('40%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  LogoArea: {
    width: RFValue(120),
    height: RFValue(120),
    alignItems: 'center',
    justifyContent: 'center',
  },
  LogoText: {
    fontSize: RFValue(29),
    fontWeight: 'bold',
    color: 'black',
  },
  btnTextPart: {
    width: wp('100%'),
    height: hp('50%'),
  },
  TextHead: {
    fontSize: RFValue(30),
    fontWeight: 'bold',
    paddingLeft: RFValue(20),
    color: 'black',
  },
  TextSubHead: {
    fontSize: RFValue(15),
    paddingLeft: RFValue(20),
    color: 'black',
    paddingTop: RFValue(10),
    fontWeight: 'bold',
  },
  ButtonArea: {
    flexDirection: 'row',
    width: wp('100%'),
    height: hp('50%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  ButtonLogin: {
    justifyContent: 'center',
    alignItems: 'center',
    width: RFValue(150),
    height: RFValue(50),
    borderBlockColor: '#4F51CB',
    borderRadius: RFValue(8),
    borderWidth: RFValue(2),
    borderColor: 'black',
    marginRight: RFValue(3),
  },
  ButtonSignUp: {
    justifyContent: 'center',
    alignItems: 'center',
    width: RFValue(150),
    height: RFValue(50),
    backgroundColor: '#4F51CB',
    borderRadius: RFValue(8),
    marginLeft: RFValue(3),
  },
  SignUpBtnText: {
    color: 'white',
    fontWeight: 'bold',
  },
  SignInBtnText: {
    color: 'black',
    fontWeight: 'bold',
  },
});

export default HomeCSS;
