import React, {Component} from 'react';
import {TextInput, Animated, Image, View, TouchableOpacity} from 'react-native';
import {scale} from '../../utils/scaling/scaling';
import colors from '../../utils/colors/colors';
import vari from '../../utils/vari/vari';
import images from '../../assets/images';

export class TextInputAnother extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFocused: false,
      security: true,
    };
    this._animatedIsFocused = new Animated.Value(
      this.props.value === '' ? 0 : 1,
    );
  }

  handleFocus = () => this.setState({isFocused: true});
  handleBlur = () => this.setState({isFocused: false});

  componentDidUpdate() {
    Animated.timing(this._animatedIsFocused, {
      useNativeDriver: false,
      toValue: this.state.isFocused || this.props.value !== '' ? 1 : 0,
      duration: 200,
    }).start();
  }
  render() {
    const {label, iconImg, pass, ...props} = this.props;
    const {isFocused} = this.state;

    const labelStyle = {
      position: 'absolute',

      left: scale(17),

      top: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [scale(50 / 2) - 10, -25],
      }),
      fontSize: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [16, 14],
      }),
      color: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [colors.sand, colors.brown],
      }),
    };
    return (
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: 'white',
          borderRadius: 7,
          borderColor: isFocused ? '' : 'white',
          borderWidth: isFocused ? 1 : 0,
          height: scale(50),
          marginTop: scale(25),
          paddingHorizontal: scale(20),
        }}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image
            source={iconImg}
            style={{
              justifyContent: 'center',
              tintColor: colors.sand,
              height: scale(20),
              width: scale(20),
            }}
            resizeMode="contain"
          />
        </View>

        <View
          style={{
            width: '80%',
            paddingHorizontal: scale(20),
          }}>
          <Animated.Text style={labelStyle}>{label}</Animated.Text>
          <TextInput
            autoCapitalize="none"
            selectionColor={colors.sand}
            {...props}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            blurOnSubmit
            style={{
              width: '100%',
              height: scale(50),
              color: colors.sand,
              fontSize: 18,
            }}
            secureTextEntry={pass && this.state.security}
          />
        </View>
        {pass ? (
          <TouchableOpacity
            style={{
              width: '20%',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => this.setState({security: !this.state.security})}>
            <Image
              source={this.state.security ? images.eye : images.noeye}
              style={{width: 20, height: 20, tintColor: colors.sand}}
              resizeMode="contain"
            />
          </TouchableOpacity>
        ) : null}
      </View>
    );
  }
}

export default TextInputAnother;
