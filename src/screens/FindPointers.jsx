import {View, Text, TextInput, ImageBackground} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import FindPointersCSS from '../../assests/css/FindPointersCSS';
import Icon from 'react-native-vector-icons/FontAwesome';
import StickySearchBar from '../components/StickySearchBar';
import DetailCard from '../components/DetailCard';
import ToolElement from '../components/ToolElement';

const FindPointers = () => {
  return (
    <>
      <SafeAreaView style={FindPointersCSS.container}>
        <ImageBackground
          source={require('../../assests/images/map.png')}
          style={FindPointersCSS.SelectionContainer}>
          <StickySearchBar />
          <DetailCard />
        </ImageBackground>
        <View style={FindPointersCSS.ToolsContainer}>
          <ToolElement
            title="Print Document"
            subTitle="Select a file from your phone to print"
            image="qrcode.png"
          />
          <ToolElement
            title="Print Document"
            subTitle="Select a file from your phone to print"
            image="qrcode.png"
          />
          <ToolElement
            title="Print Document"
            subTitle="Select a file from your phone to print"
            image="qrcode.png"
          />
        </View>
      </SafeAreaView>
    </>
  );
};

export default FindPointers;
