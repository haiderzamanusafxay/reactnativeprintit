import {View, Text, TextInput, ImageBackground} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import FindPointersCSS from '../../assests/css/FindPointersCSS';
import Icon from 'react-native-vector-icons/FontAwesome';
import StickySearchBar from '../components/StickySearchBar';
import DetailCard from '../components/DetailCard';
import ToolElement from '../components/ToolElement';

const image1= '../../assests/images/9doc.png';
const image2= '../../assests/images/9imageGallery.png';
const image3= '../../assests/images/9scannerIcon.png'; 
const FindPointers = () => {
  const imagesArray = [
    {
      path: image1,
      title: 'Print Document',
      subTitle: 'Select a file from your phone to print',
    },
    {
      path: image2,
      title: 'Photocopy',
      subTitle: 'Select an image from your gallery to print',
    },
    {
      path: image3,
      title: 'Print Photo',
      subTitle: 'Select a photo from your gallery',
    },
  ];
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
          {imagesArray.map((item, index) => (
            <ToolElement
              key={index}
              image={item.path}
              title={item.title}
              subTitle={item.subTitle}
            />
          ))}
          {/* <ToolElement
            title="Print Document"
            subTitle="Select a file from your phone to print"
            image="qrcode.png"
          />
          <ToolElement
            title="Print Document"
            subTitle="Select a file from your phone to print"
            image={'qrcode.png'}
          />
          <ToolElement
            title="Print Document"
            subTitle="Select a file from your phone to print"
            image="qrcode.png"
          /> */}
        </View>
      </SafeAreaView>
    </>
  );
};

export default FindPointers;
