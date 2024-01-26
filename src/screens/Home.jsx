import {View, Text, Pressable, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import {setAuthenticatedFalse} from '../store/features/authSlices';

import HomeCSS from '../../assests/css/HomeCSS';
import {BASEURL} from '../CONSTANTS';
const Home = () => {
  const dispatch = useDispatch();
  const signInURL = BASEURL + 'api/auth/me';
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [accessToken, setAccessToken] = useState('');

  console.log(signInURL);

  useEffect(() => {
    const checkAccessToken = async () => {
      try {
        const accessToken = await AsyncStorage.getItem('authToken');

        if (accessToken == null) {
          navigation.navigate('SignIn');
        } else {
          dispatch(setAuthenticatedFalse);
          navigation.navigate('findPrinters');
        }
      } catch (error) {
        console.error('Error getting access token:', error);
        Alert.alert('Error', 'Failed to get access token');
      } finally {
        setLoading(false);
      }
    };

    checkAccessToken();
  }, [navigation]);

  const fetchUserData = async () => {
    try {
      const response = await fetch(signInURL, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      const userData = await response.json();
      console.log('User data:', userData);
    } catch (error) {
      console.error('Error fetching user data:', error);
      Alert.alert('Error', 'Failed to fetch user data');
    }
  };

  if (loading) {
    return null;
  }
  return (
    <View style={HomeCSS.container}>
      <View style={HomeCSS.logopart}>
        <View style={HomeCSS.LogoArea}>
          <Image source={require('../../assests/images/logo.png')}></Image>
          <Text style={HomeCSS.LogoText}>Print it</Text>
        </View>
      </View>
      <View style={HomeCSS.btnTextPart}>
        <View style={HomeCSS.TextArea}>
          <Text style={HomeCSS.TextHead}>
            Print your {'\n'}
            Documents Anywhere
          </Text>
          <Text style={HomeCSS.TextSubHead}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </View>
        <View style={HomeCSS.ButtonArea}>
          <Pressable
            style={HomeCSS.ButtonLogin}
            onPress={() => navigation.navigate('SignIn')}>
            <Text style={HomeCSS.SignInBtnText}>Sgin In</Text>
          </Pressable>
          <Pressable
            style={HomeCSS.ButtonSignUp}
            onPress={() => navigation.navigate('SignUp')}>
            <Text style={HomeCSS.SignUpBtnText}>Sgin Up</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Home;
