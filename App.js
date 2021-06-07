import React from 'react';
import {Text, View} from 'react-native';
import images from './src/assets/images';
import ToolBar from './src/components/ToolBar';

export const App = () => {
  return (
    <View>
      <ToolBar
        title={'Mua hàng'}
        // search
        iconLeft={images.icongoBack}
        leftPress={() => this.props.navigation.goBack()}
      />
      <Text>Xin chào</Text>
    </View>
  );
};
