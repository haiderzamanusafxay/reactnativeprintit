import {View, Text, Pressable, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
// import {createNavigationContainerRef} from '@react-navigation/native';
import React from 'react';

import HomeCSS from '../../assests/css/HomeCSS';
const Home = () => {
  // const navigationRef = createNavigationContainerRef();
  const navigation = useNavigation();
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
          <Pressable style={HomeCSS.ButtonSignUp}>
            <Text style={HomeCSS.SignUpBtnText}>Sgin Up</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Home;
