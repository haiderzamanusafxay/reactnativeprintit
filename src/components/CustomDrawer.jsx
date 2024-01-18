import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  StyleSheet,
  Switch,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import LinearGradient from 'react-native-linear-gradient';
import {RFValue} from 'react-native-responsive-fontsize';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const CustomDrawer = () => {
  return (
    <View style={{flex: 1, width: RFValue(300)}}>
      <LinearGradient colors={['#6a1ed2', '#01deb6']} style={{flex: 2}}>
        <DrawerContentScrollView>
          <View style={styles.imageArea}>
            <Image
              source={require('../../assests/images/profile.png')}
              style={styles.image}
            />
          </View>
          <Text style={styles.greet}>Hello!</Text>
          <Text style={styles.name}>Jenifer Wilsom</Text>
          <View style={styles.lineContainer}>
            <View style={styles.line}></View>
          </View>
          <View style={styles.list}>
            <View style={styles.listItem}>
              <Ionicons name="home" size={RFValue(25)} color="white" />
              <Text style={styles.listItemText}>Home</Text>
            </View>
            <View style={styles.listItem}>
              <Ionicons name="document-text" size={RFValue(25)} color="white" />
              <Text style={styles.listItemText}>Print History</Text>
            </View>
            <View style={styles.listItem}>
              <Ionicons
                name="settings-sharp"
                size={RFValue(25)}
                color="white"
              />
              <Text style={styles.listItemText}>Account Settings</Text>
            </View>
            <View style={styles.listItem}>
              <MaterialCommunityIcons name="logout" size={RFValue(25)} color="white" />
              <Text style={styles.listItemText}>Logout</Text>
            </View>
          </View>
          <View style={styles.refferalCard}> 
              <View style={styles.refferalCardMain}>

              </View>
          </View>
        </DrawerContentScrollView>
      </LinearGradient>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  imageArea: {
    width: '100%',
    height: heightPercentageToDP('20%'),
    justifyContent: 'center',
  },
  image: {
    width: RFValue(60),
    height: RFValue(60),
    marginLeft: RFValue(20),
    marginTop: RFValue(41),
  },
  greet: {
    marginLeft: RFValue(25),
    color: 'white',
    fontSize: RFValue(13),
  },
  name: {
    marginLeft: RFValue(25),
    color: 'white',
    fontSize: RFValue(24),
    fontWeight: 'bold',
  },
  lineContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: RFValue(30),
  },
  line: {
    width: widthPercentageToDP('70%'),
    height: RFValue(2),
    backgroundColor: 'white',
  },
  list: {
    paddingLeft: RFValue(30),
    flex: 1,
    height: heightPercentageToDP('35%'),
    width: widthPercentageToDP('100%'),
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: RFValue(10),
  },
  listItemText: {
    color: 'white',
    marginLeft: RFValue(20),
    fontSize: RFValue(15),
  },
  refferalCard: {
    height: heightPercentageToDP('35%'),
    width: widthPercentageToDP('100%'),
    alignItems: 'center',
  },
  refferalCardMain: {
    borderRadius: RFValue(10),
    width: RFValue(250),
    height: RFValue(150),
    backgroundColor: 'white',
  }
});
