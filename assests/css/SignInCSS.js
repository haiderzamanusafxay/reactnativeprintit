import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
const SignInCSS = StyleSheet.create({
  SafeAreaView: {
    backgroundColor: '#fff',
  },
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: wp('100%'),
  },
  LogoArea: {
    width: wp('100%'),
    paddingTop: RFValue(70),
    alignItems: 'center',
    justifyContent: 'center',
  },
  LogoText: {
    fontSize: RFValue(29),
    fontWeight: 'bold',
    color: 'black',
  },
  signToContinue: {
    width: wp('100%'),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: RFValue(20),
  },
  SignInToContinueText: {
    fontSize: RFValue(25),
    fontWeight: 'bold',
    color: 'black',
  },
  SignInToContinueSubText: {
    fontSize: RFValue(12),
    color: '#9A9A9A',
    marginTop: RFValue(5),
    fontWeight: 'bold',
  },
  SSOButtons: {
    marginTop: RFValue(40),
    width: wp('90%'),
    flexDirection: 'row',
    height: RFValue(66),
    justifyContent: 'space-between',
  },
  GoogleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: RFValue(150),
    height: RFValue(50),
    borderColor: '#9A9A9AD4',
    borderRadius: RFValue(7),
    borderWidth: RFValue(1),
    marginRight: RFValue(3),
  },
  FbButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: RFValue(150),
    height: RFValue(50),
    backgroundColor: '#1773EAE5',
    borderRadius: RFValue(7),
    marginLeft: RFValue(3),
  },
  TextInsideGBtn: {
    color: 'white',
    fontWeight: 'bold',
    marginLeft: RFValue(7),
  },
  TextInsideFBtn: {
    color: 'black',
    fontWeight: 'bold',
    marginLeft: RFValue(7),
  },
  signUpWithTextContainer: {
    width: wp('100%'),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: RFValue(20),
  },
  bottomText: {
    marginTop: RFValue(20),
    color: '#9A9A9A',
    fontSize: RFValue(14),
    fontWeight: 'bold',
  },
});

export default SignInCSS;
