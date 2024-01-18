import 'react-native-gesture-handler';
import {enableScreens} from 'react-native-screens';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import 'react-native-reanimated';
import {useNavigation} from '@react-navigation/native';
import CustomDrawer from './src/components/CustomDrawer';
import React from 'react';
import Home from './src/screens/Home';
import SignIn from './src/screens/SignIn';
import SignUp from './src/screens/SignUp';
import FindPrinters from './src/screens/FindPrinters';
import {useDispatch} from 'react-redux';
import {hide} from './src/store/features/DrawerSlice';

enableScreens();
const Drawer = createDrawerNavigator();

const App = () => {
  const dispatch = useDispatch();

  const handleDrawerClose = () => {
    const navigation = useNavigation();
    navigation.closeDrawer();
    dispatch(hide());
  };

  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{headerShown: false}}
        drawerContent={() => <CustomDrawer />}
        gestureEnabled={true}
        onDrawerClose={handleDrawerClose}>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="SignIn" component={SignIn} />
        <Drawer.Screen name="SignUp" component={SignUp} />
        <Drawer.Screen name="findPrinters" component={FindPrinters} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
export default App;
