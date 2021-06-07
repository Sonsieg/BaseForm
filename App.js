import React, {useState} from 'react';
import {Text, View} from 'react-native';
import images from './src/assets/images';
import ButtonAnother from './src/components/ButtonAnother';
import TextInputAnother from './src/components/TextInputAnother';
import ToolBar from './src/components/ToolBar';
import colors from './src/utils/colors/colors';

export const App = () => {
  const [email, setEmail] = useState('');
  return (
    <View>
      <ToolBar
        title={'Xin chào'}
        // search
        iconLeft={images.icongoBack}
        leftPress={() => this.props.navigation.goBack()}
      />
      <View style={{paddingHorizontal: 20}}>
        <TextInputAnother
          maxLength={34}
          iconImg={images.icongoBack}
          label="Email đăng nhập "
          value={email}
          onChangeText={text => setEmail(text)}
          pass
        />
        <ButtonAnother text="Hello" containerStyle={{}} />
      </View>
    </View>
  );
};
