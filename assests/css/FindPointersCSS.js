import { StyleSheet } from "react-native";
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default FindPointersCSS = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        alignItems: 'center',
        width: wp('100%'),
        height: hp('100%'),
        position: 'relative',
    },
    SelectionContainer: {
        width: wp('100%'),
        height: hp('60%'),
        alignItems: 'center',
        position: 'absolute',
        top: hp('15%'),
    },
    ToolsContainer: {
        width: wp('100%'),
        height: hp('40%'),
        alignItems: 'center',
        justifyContent: 'center',
    }
    
})