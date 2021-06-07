import React, {Component} from 'react';
import {
  StyleSheet,
  Platform,
  TouchableOpacity,
  Image,
  TextInput,
  Text,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import images from '../../assets/images';
import colors from '../../utils/colors/colors';
import {scale, vScale} from '../../utils/scaling/scaling';
import vari from '../../utils/vari/vari';

export const ToolbarImgLeft = props => {
  return (
    <TouchableOpacity style={styles.touch} onPress={props.onPress}>
      <Image style={styles.image} source={props.icon} resizeMode="contain" />
    </TouchableOpacity>
  );
};
export const ToolbarImgRight = props => {
  return (
    <TouchableOpacity
      style={{
        width: scale(50),
        height: vScale(50),
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onPress={props.onPress}>
      <Image
        style={[{tintColor: props.styleImgRight}, styles.image]}
        source={props.icon}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
};
export class ToolBar extends Component {
  leftPress = () => {
    if (this.props.leftPress) {
      this.props.leftPress();
    }
  };
  rightPress = () => {
    if (this.props.rightPress) {
      this.props.rightPress();
    }
  };
  renderContent() {
    return (
      <View style={styles.toolbarContent}>
        <View style={styles.touch}>
          {this.props.iconLeft && (
            <ToolbarImgLeft
              onPress={this.leftPress}
              icon={this.props.iconLeft}
            />
          )}
        </View>
        {this.props.title && (
          <View
            style={styles.title}>
            <Text
              style={{textAlign: 'center', fontSize: 15, color: 'white'}}
              numberOfLines={1}>
              {this.props.title}
            </Text>
          </View>
        )}
        {this.props.search && (
          <View style={[styles.searchBox, {...this.props.containerStyle}]}>
            <TextInput
              autoCapitalize="none"
              returnKeyType="search"
              {...this.props}
              placeholder="Tìm kiếm"
              style={{
                height: scale(40),
                width: '85%',
              }}
              selectionColor={colors.blue3}
            />
          </View>
        )}
        <View style={styles.touch}>
          {this.props.iconRight && (
            <ToolbarImgRight
              cart={this.props.cart}
              onPress={this.rightPress}
              styleImgRight={this.props.styleImgRight}
              icon={this.props.iconRight}
            />
          )}
        </View>
      </View>
    );
  }
  render() {
    return (
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        colors={[colors.sand, colors.brown]}
        style={{height: vari.toolbarHeight}}
        locations={[0, 1]}>
        {this.props.children ? (
          <View style={styles.toolbarContent}>
            {' '}
            {this.props.toolbarContent}
          </View>
        ) : (
          this.renderContent()
        )}
      </LinearGradient>
    );
  }
}

export default ToolBar;
const styles = StyleSheet.create({
  toolbarContent: {
    marginTop: Platform.OS === 'android' ? 0 : vari.ipX ? scale(15) : 0,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    flex: 1,
  },
  touch: {
    width: scale(50),
    height: vScale(50),
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: scale(5),
    padding: 5,
    height: 28,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: 'white',
    justifyContent: 'space-evenly',
    flex: 1,
  },
  title:{
    height: scale(50),
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center',
  }
});
