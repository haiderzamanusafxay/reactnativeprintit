import {View, Text, ScrollView, Image, Pressable, ImageBackground, Alert} from 'react-native';
import React, {  useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';

import {SignUpCSS} from '../../assests/css/SignUpCSS';
import Icon from 'react-native-vector-icons/FontAwesome';
import SignInCSS from '../../assests/css/SignInCSS';
import TextInputSign from '../components/TextInputSign';
import BlueBtn from '../components/BlueBtn';
import { BASEURL } from '../CONSTANTS';
const SignUp = () => {
  const dispatch = useDispatch();

  const [username, setUsername] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [email, setEmail] = useState('');
  const navigation = useNavigation();

  const handleSignup = async () => {
    try {
      const response = await axios.post(BASEURL+'/api/auth/sign-up', { username, password1, password2, email });
      dispatch(setSignupData(response.data));
      navigation.navigate('SignIn');
    } catch (error) {
      Alert.alert('Error', 'The following error occured \n' + error);
    }

  };
  return (
    <SafeAreaView style={SignUpCSS.SafeAreaView}>
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
              <Icon name="facebook" size={20} color="white" />
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
            <TextInputSign placeholder="Name" onTextChange={setUsername} />
            <TextInputSign placeholder="Email" onTextChange={setEmail}/>
            <TextInputSign placeholder="Password" onTextChange={setPassword1}/>
            <TextInputSign placeholder="Confirm Password" onTextChange={setPassword2} />
            <View style={SignUpCSS.termsAndCondition}>
              <Icon name="check-square" size={15} color="blue" />
              <Text style={{marginLeft: 5}}>I agree to the terms and conditions</Text>
            </View>
            <BlueBtn name="Sign Up" />
            <Text style={SignUpCSS.bottomText}>
              Already have an account?{' '}
              
              <Pressable onPress={handleSignup} >
                <Text  style={{color: '#00917C'}}>
                Sign In
                </Text>
                </Pressable>
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
