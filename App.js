import React from 'react';
import {Text, View} from 'react-native';
import images from './src/assets/images';
import ButtonAnother from './src/components/ButtonAnother';
import ToolBar from './src/components/ToolBar';
import colors from './src/utils/colors/colors';

export const App = () => {
  return (
    <View>
      <ToolBar
        title={'Mua hàng'}
        // search
        iconLeft={images.icongoBack}
        leftPress={() => this.props.navigation.goBack()}
      />
      <View style={{paddingHorizontal: 20}}>
        <Text>Xin chào</Text>
        <ButtonAnother text="Hello" containerStyle={{width: "50%"}}/>
      </View>
    </View>
  );
};
