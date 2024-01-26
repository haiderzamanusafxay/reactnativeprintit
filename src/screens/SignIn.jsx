// import React, {useEffect, useState} from 'react';
// import {
//   View,
//   Text,
//   Image,
//   Pressable,
//   ScrollView,
//   ImageBackground,
//   Alert,
// } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import {SafeAreaView} from 'react-native-safe-area-context';
// import {useDispatch, useSelector} from 'react-redux';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import {useNavigation} from '@react-navigation/native';
// import {setUser, setToken} from '../store/features/authSlices';

// import SignInCSS from '../../assests/css/SignInCSS';
// import TextInputSign from '../components/TextInputSign';
// import BlueBtn from '../components/BlueBtn';
// import {BASEURL} from '../CONSTANTS';

// const SignIn = () => {
//   const navigation = useNavigation();
//   const dispatch = useDispatch();
//   const [emailOrUsername, setEmailOrUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
//   const user = useSelector(state => state.auth.user);
//   const handleLogin = async () => {
//     try {
//       const response = await fetch(BASEURL + '/api/auth/sign-in', {
//         method: 'POST',
//         headers: {'Content-Type': 'application/json'},
//         body: JSON.stringify({emailOrUsername, password}),
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         console.error('Error response from server:', errorData);
//         throw new Error('Invalid emailOrUsername or password');
//       }

//       const responseData = await response.json();
//       dispatch(setUser(responseData.accessToken));
//       dispatch(setUser(responseData.isAuthenticated));
//       await AsyncStorage.setItem('authToken', responseData.accessToken);
//       console.log('Response from server:', responseData);

//       navigation.navigate('findPrinters');
//     } catch (error) {
//       console.log('Error during login:', error);
//       Alert.alert('Error', 'Invalid emailOrUsername or password');
//     }
//   };

//   return (
//     <SafeAreaView style={SignInCSS.SafeAreaView}>
//       <ImageBackground source={require('../../assests/images/background.png')}>
//         <ScrollView showsVerticalScrollIndicator={false}>
//           <View style={SignInCSS.container}>
//             <View style={SignInCSS.LogoArea}>
//               <Image source={require('../../assests/images/logo.png')} />
//               <Text style={SignInCSS.LogoText}>Print it</Text>
//             </View>
//             <View style={SignInCSS.signToContinue}>
//               <Text style={SignInCSS.SignInToContinueText}>
//                 Sign in to continue
//               </Text>
//               <Text style={SignInCSS.SignInToContinueSubText}>
//                 Please fill in the form to continue
//               </Text>
//             </View>
//             <View style={SignInCSS.SSOButtons}>
//               <Pressable style={SignInCSS.GoogleButton}>
//                 <Icon name="google" size={20} color="black" />
//                 <Text style={SignInCSS.TextInsideFBtn}>Google</Text>
//               </Pressable>
//               <Pressable style={SignInCSS.FbButton}>
//                 <Icon name="facebook" size={20} color="white" />
//                 <Text style={SignInCSS.TextInsideGBtn}>Facebook</Text>
//               </Pressable>
//             </View>
//             <View style={SignInCSS.signUpWithTextContainer}>
//               <View style={SignInCSS.SignUpWithText}>
//                 <Text>
//                   <View style={{background: '#black', padding: '0 10px'}} />
//                   Sign In With
//                   <View style={{background: '#black', padding: '0 10px'}} />
//                 </Text>
//               </View>
//             </View>
//             <TextInputSign
//               placeholder="Email"
//               value={emailOrUsername}
//               onChangeText={setEmailOrUsername}
//             />
//             <TextInputSign
//               placeholder="Password"
//               value={password}
//               onChangeText={setPassword}
//             />
//             <BlueBtn name="Login" handle={handleLogin} />
//             <Text style={SignInCSS.bottomText}>
//               Don’t have an account?{' '}
//               <Text style={{color: '#00917C'}}>SignUp</Text>
//             </Text>
//           </View>
//         </ScrollView>
//       </ImageBackground>
//     </SafeAreaView>
//   );
// };

// export default SignIn;

import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  Pressable,
  ScrollView,
  ImageBackground,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {setUser} from '../store/features/authSlices';
import {setAuthenticated} from '../store/features/authSlices';

import SignInCSS from '../../assests/css/SignInCSS';
import TextInputSign from '../components/TextInputSign';
import BlueBtn from '../components/BlueBtn';
import {BASEURL} from '../CONSTANTS';

const SignIn = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [emailOrUsername, setEmailOrUsername] = useState('');
  const [password, setPassword] = useState('');
  const [tokenValue, setTokenValue] = useState('');
  const handleLogin = async () => {
    try {
      const response = await fetch(BASEURL + '/api/auth/sign-in', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({emailOrUsername, password}),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Error response from server:', errorData);
        throw new Error('Invalid emailOrUsername or password');
      }

      const responseData = await response.json();
      dispatch(setUser(responseData.accessToken));
      dispatch(setAuthenticated(true));
      console.log('logged in');
      await AsyncStorage.setItem('authToken', responseData.accessToken);
      console.log('Response from server:', responseData);

      navigation.navigate('findPrinters');
    } catch (error) {
      console.log('Error during login:', error);
      Alert.alert('Error', 'Invalid emailOrUsername or password');
    }
  };

  return (
    <SafeAreaView style={SignInCSS.SafeAreaView}>
      <ImageBackground source={require('../../assests/images/background.png')}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={SignInCSS.container}>
            <View style={SignInCSS.LogoArea}>
              <Image source={require('../../assests/images/logo.png')} />
              <Text style={SignInCSS.LogoText}>Print it</Text>
            </View>
            <View style={SignInCSS.signToContinue}>
              <Text style={SignInCSS.SignInToContinueText}>
                Sign in to continue
              </Text>
              <Text style={SignInCSS.SignInToContinueSubText}>
                Please fill in the form to continue
              </Text>
            </View>
            <View style={SignInCSS.SSOButtons}>
              <Pressable style={SignInCSS.GoogleButton}>
                <Icon name="google" size={20} color="black" />
                <Text style={SignInCSS.TextInsideFBtn}>Google</Text>
              </Pressable>
              <Pressable style={SignInCSS.FbButton}>
                <Icon name="facebook" size={20} color="white" />
                <Text style={SignInCSS.TextInsideGBtn}>Facebook</Text>
              </Pressable>
            </View>
            <View style={SignInCSS.signUpWithTextContainer}>
              <View style={SignInCSS.SignUpWithText}>
                <Text>
                  <View style={{background: '#black', padding: '0 10px'}} />
                  Sign In With
                  <View style={{background: '#black', padding: '0 10px'}} />
                </Text>
              </View>
            </View>
            <TextInputSign
              placeholder="Email"
              value={emailOrUsername}
              onChangeText={setEmailOrUsername}
            />
            <TextInputSign
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
            />
            <BlueBtn name="Login" handle={handleLogin} />
            <Text style={SignInCSS.bottomText}>
              Don’t have an account?{' '}
              <Text style={{color: '#00917C'}}>SignUp</Text>
            </Text>
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default SignIn;
