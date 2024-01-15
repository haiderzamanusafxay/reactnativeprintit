import React from 'react';
import {SafeAreaView} from 'react-native';
import Home from './screens/Home';
import {NavigationContainer} from '@react-navigation/native';


const App = () => {
  return (
    <SafeAreaView>
      <NavigationContainer>
      <Home />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
