import React, {Component} from 'react';
import {
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  Image,
  Text,
  View,
} from 'react-native';
import colors from '../../utils/colors/colors';
import {scale} from '../../utils/scaling/scaling';

export class ButtonAnother extends Component {
  render() {
    const {onPress, img} = this.props;
    return (
      <TouchableOpacity
        activeOpacity={0.1}
        onPress={onPress}
        style={[styles.container, {...this.props.containerStyle}]}>
        {!this.props.loading ? (
          <View style={{flexDirection: 'row'}}>
            {img ? (
              <Image
                source={img}
                style={{
                  height: scale(20),
                  width: scale(20),
                  marginHorizontal: 10,
                  alignItems: 'center',
                }}
                resizeMode="contain"
              />
            ) : null}
            <Text style={[styles.text, {...this.props.textStyle}]}>
              {this.props.text}
            </Text>
          </View>
        ) : (
          <ActivityIndicator size="small" color="white" />
        )}
      </TouchableOpacity>
    );
  }
}
ButtonAnother.defaultProps = {
  containerStyle: {},
  textStyle: {},
  loading: false,
};
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.sand,
    borderRadius: scale(30),
    padding: scale(15),
    marginTop: 20,
  },
  text: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ButtonAnother;
