import {
  View,
  Text,
  Image,
  Pressable,
  ScrollView,
  ImageBackground,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import SignInCSS from '../../assests/css/SignInCSS';
import {SafeAreaView} from 'react-native-safe-area-context';
import TextInputSign from '../components/TextInputSign';
import BlueBtn from '../components/BlueBtn';
const SignIn = () => {
  return (
    <SafeAreaView style={SignInCSS.SafeAreaView}>
      <ImageBackground source={require('../../assests/images/background.png')}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={SignInCSS.container}>
            <View style={SignInCSS.LogoArea}>
              <Image source={require('../../assests/images/logo.png')}></Image>
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
                <Icon name="google" size={20} color="black"/>
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
                  <View
                    style={{background: '#black', padding: '0 10px'}}></View>
                  Sign In With
                  <View
                    style={{background: '#black', padding: '0 10px'}}></View>
                </Text>
              </View>
            </View>
            <TextInputSign placeholder="Email" />
            <TextInputSign placeholder="Password" />
            <BlueBtn name="Login" />
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
