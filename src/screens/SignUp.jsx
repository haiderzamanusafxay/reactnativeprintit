import {View, Text, ScrollView, Image, Pressable} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {SafeAreaView} from 'react-native-safe-area-context';
import {SignUpCSS} from '../../assests/css/SignUpCSS';
import SignInCSS from '../../assests/css/SignInCSS';
import TextInputSign from '../components/TextInputSign';
import BlueBtn from '../components/BlueBtn';
const SignUp = () => {
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
              Create new account
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
              <Icon name="google" size={20} color="black" />
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
            <TextInputSign placeholder="Name" />
            <TextInputSign placeholder="Email" />
            <TextInputSign placeholder="Password" />
            <TextInputSign placeholder="Confirm Password" />
            <View style={SignUpCSS.termsAndCondition}>
              <Text>I agree to the terms and conditions</Text>
            </View>
            <BlueBtn name="Sign Up" />
            <Text style={SignUpCSS.bottomText}>
              Already have an account?{' '}
              <Text style={{color: '#00917C'}}>Sign In</Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
