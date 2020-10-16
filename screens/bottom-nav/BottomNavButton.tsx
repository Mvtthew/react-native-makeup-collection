import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';

interface Props {
  iconFileName: 'plus' | 'heart' | 'collection' | 'menu';
  iconTitle: string;
}

const BottomNavButton: React.FC<Props> = ({iconFileName, iconTitle}) => {
  const getIconSource = () => {
    switch (iconFileName) {
      case 'plus':
        return require('../../assets/icons/plus-regular-240.png');
      case 'heart':
        return require('../../assets/icons/heart-regular-240.png');
      case 'collection':
        return require('../../assets/icons/collection-regular-240.png');
      case 'menu':
        return require('../../assets/icons/menu-regular-240.png');
      default:
        return;
    }
  };

  return (
    <Pressable>
      <View style={styles.button}>
        <Image source={getIconSource()} style={styles.icon} />
        <Text style={styles.iconTitle}>{iconTitle}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 60,
    height: 60,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 32,
    height: 32,
  },
  iconTitle: {
    fontSize: 10,
  },
});

export default BottomNavButton;
