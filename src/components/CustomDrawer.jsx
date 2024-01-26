import {View, Text, Image, StyleSheet, Pressable} from 'react-native';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import LinearGradient from 'react-native-linear-gradient';
import {RFValue} from 'react-native-responsive-fontsize';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useDispatch} from 'react-redux';
import {logout} from '../store/features/authSlices';
import {useNavigation} from '@react-navigation/native';

const CustomDrawer = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logout());
    console.log('logged out');
    navigation.navigate('SignIn');
  };
  return (
    <View style={{flex: 1}}>
      <LinearGradient colors={['#6a1ed2', '#01deb6']} style={{flex: 1}}>
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
            <Pressable style={styles.listItem} onPress={handleLogOut}>
              <MaterialCommunityIcons
                name="logout"
                size={RFValue(25)}
                color="white"
              />
              <Text style={styles.listItemText}>Logout</Text>
            </Pressable>
          </View>
          <View style={styles.refferalCard}>
            <View style={styles.refferalCardMain}>
              <View style={styles.refferalCardHeader}>
                <Text style={{color: 'black', fontSize: RFValue(23)}}>Get</Text>
                <Text
                  style={{
                    color: '#FFBF00',
                    fontSize: RFValue(15),
                    fontWeight: 'bold',
                    lineHeight: 37,
                  }}>
                  {' '}
                  $
                </Text>
                <Text
                  style={{
                    color: '#FFBF00',
                    fontSize: RFValue(23),
                    fontWeight: 'bold',
                  }}>
                  5{' '}
                </Text>
                <Text style={{color: 'black', fontSize: RFValue(23)}}>
                  Free
                </Text>
              </View>
              <Text style={styles.refferalCardSubTitle}>
                Invite your friends and get $5 worth of discounts
              </Text>
              <View style={styles.refferalCardFooter}>
                <View style={styles.icon}>
                  <FontAwesome
                    name="envelope"
                    size={RFValue(10)}
                    color="white"
                  />
                </View>
                <View style={styles.icon}>
                  <FontAwesome
                    name="facebook"
                    size={RFValue(10)}
                    color="white"
                  />
                </View>
                <View style={styles.icon}>
                  <FontAwesome
                    name="whatsapp"
                    size={RFValue(10)}
                    color="white"
                  />
                </View>
                <View style={styles.icon}>
                  <FontAwesome
                    name="twitter"
                    size={RFValue(10)}
                    color="white"
                  />
                </View>
              </View>
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
    opacity: 0.3,
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
    height: heightPercentageToDP('25%'),
    width: widthPercentageToDP('85%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  refferalCardMain: {
    borderRadius: RFValue(10),
    width: RFValue(250),
    height: RFValue(150),
    backgroundColor: 'white',
  },
  refferalCardHeader: {
    paddingVertical: RFValue(10),
    height: RFValue(50),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  refferalCardSubTitle: {
    fontSize: RFValue(13),
    paddingHorizontal: RFValue(20),
    textAlign: 'center',
  },
  refferalCardFooter: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    backgroundColor: '#00917C',
    width: RFValue(20),
    height: RFValue(20),
    borderRadius: widthPercentageToDP('50%'),
    marginVertical: RFValue(10),
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: RFValue(2),
  },
});
