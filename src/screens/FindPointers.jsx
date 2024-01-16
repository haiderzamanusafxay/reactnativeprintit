import {View, Text, TextInput} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import FindPointersCSS from '../../assests/css/FindPointersCSS';
import Icon from 'react-native-vector-icons/FontAwesome';
import StickySearchBar from '../components/StickySearchBar';

const FindPointers = () => {
  return (
    <>
      <SafeAreaView style={FindPointersCSS.container}>
        <View style={FindPointersCSS.SelectionContainer}> 
          <StickySearchBar />
        </View>
        <View style={FindPointersCSS.ToolsContainer}> 

        </View>
      </SafeAreaView>
    </>
  );
};

export default FindPointers;
