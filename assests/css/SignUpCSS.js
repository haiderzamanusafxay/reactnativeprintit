import {StyleSheet} from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
export const SignUpCSS = StyleSheet.create({
  termsAndCondition: {
    marginTop: RFValue(10),
    alignItems: 'start',
  },
  bottomText: {
    marginTop: RFValue(20),
    color: '#9A9A9A',
    fontSize: RFValue(14),
    fontWeight: 'bold',
    marginBottom: RFValue(40),
  },
});
