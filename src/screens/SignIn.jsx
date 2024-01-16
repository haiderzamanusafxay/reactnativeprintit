import {View, Text, Image, Pressable, ScrollView} from 'react-native';
import React from 'react';
import SignInCSS from '../../assests/css/SignInCSS';
import {SafeAreaView} from 'react-native-safe-area-context';
import TextInputSign from '../components/TextInputSign';
import BlueBtn from '../components/BlueBtn';
const SignIn = () => {
  return (
    <SafeAreaView style={{height: '100%', backgroundColor: '#fff'}}>
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
              <Text style={SignInCSS.TextInsideFBtn}>Google</Text>
            </Pressable>
            <Pressable style={SignInCSS.FbButton}>
              <Text style={SignInCSS.TextInsideGBtn}>Facebook</Text>
            </Pressable>
          </View>
          <View style={SignInCSS.signUpWithTextContainer}>
            <View style={SignInCSS.SignUpWithText}>
              <Text>
                <View style={{background: '#black', padding: '0 10px'}}></View>
                Sign Up With
                <View style={{background: '#black', padding: '0 10px'}}></View>
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
    </SafeAreaView>
  );
};

export default SignIn;
