import {StyleSheet} from 'react-native';

const HomeCSS = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logopart: {
    width: '100%',
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  LogoArea: {
    width: 120,
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
  },
  LogoText: {
    fontSize: 29,
    fontWeight: 'bold',
    color: 'black',
  },
  btnTextPart: {
    width: '100%',
    height: '50%',
  },
  TextHead: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingLeft: 20,
    color: 'black',
  },
  TextSubHead: {
    fontSize: 15,
    paddingLeft: 20,
    color: 'black',
    paddingTop: 10,
    fontWeight: 'bold',
  },
  ButtonArea: {
    flexDirection: 'row',
    width: '100%',
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  ButtonLogin: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    height: 66,
    borderBlockColor: '#4F51CB',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'black',
    marginRight: 3,
  },
  ButtonSignUp: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    height: 66,
    backgroundColor: '#4F51CB',
    borderRadius: 10,
    marginLeft: 3,
  },
  SignUpBtnText: {
    color: 'white',
    fontWeight: 'bold',
  },
  SignInBtnText: {
    color: 'black',
    fontWeight: 'bold',
  },
});

export default HomeCSS;
