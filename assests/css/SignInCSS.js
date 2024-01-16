import {StyleSheet} from 'react-native';

const SignInCSS = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  LogoArea: {
    width: '100%',
    paddingTop: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  LogoText: {
    fontSize: 29,
    fontWeight: 'bold',
    color: 'black',
  },
  signToContinue: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  SignInToContinueText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
  },
  SignInToContinueSubText: {
    fontSize: 12,
    color: '#9A9A9A',
    marginTop: 5,
    fontWeight: 'bold',
  },
  SSOButtons: {
    marginTop: 40,
    width: '90%',
    flexDirection: 'row',
    height: 66,
    justifyContent: 'space-between',
  },
  GoogleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 166,
    height: 54,
    borderColor: '#9A9A9AD4',
    borderRadius: 7,
    borderWidth: 1,
    marginRight: 3,
  },
  FbButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 166,
    height: 54,
    backgroundColor: '#1773EAE5',
    borderRadius: 7,
    marginLeft: 3,
  },
  TextInsideGBtn: {
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 7,
  },
  TextInsideFBtn: {
    color: 'black',
    fontWeight: 'bold',
    marginLeft: 7,
  },
  signUpWithTextContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  bottomText: {
    marginTop: 20,
    color: '#9A9A9A',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default SignInCSS;
