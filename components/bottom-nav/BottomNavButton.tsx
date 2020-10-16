import React, {useEffect} from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {Link, useLocation} from 'react-router-native';

interface Props {
  iconFileName: 'plus' | 'heart' | 'collection' | 'menu';
  iconTitle: string;
  linkTo: string;
}

const BottomNavButton: React.FC<Props> = ({
  iconFileName,
  iconTitle,
  linkTo,
}) => {
  const location = useLocation();

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

  const createButtonStyles = () => {
    let buttonStyles = {...styles.button};
    if (location.pathname === linkTo) {
      buttonStyles = {...styles.button, ...styles.buttonActive};
    }
    return buttonStyles;
  };

  const createIconStyles = () => {
    let iconStyles = {...styles.icon};
    if (location.pathname === linkTo) {
      switch (linkTo) {
        case '/wishlist':
          return {...styles.icon, ...styles.iconActiveWishlist};
        case '/collection':
          return {...styles.icon, ...styles.iconActiveCollection};
        case '/add':
          return {...styles.icon, ...styles.iconActiveAdd};
      }
    }
    return iconStyles;
  };

  return (
    <Link to={linkTo} underlayColor="#e3e3e3" style={styles.link}>
      <View style={createButtonStyles()}>
        <Image source={getIconSource()} style={createIconStyles()} />
        <Text style={styles.iconTitle}>{iconTitle}</Text>
      </View>
    </Link>
  );
};

const styles = StyleSheet.create({
  link: {
    borderRadius: 15,
  },
  button: {
    width: 60,
    height: 60,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonActive: {
    backgroundColor: '#e3e3e3',
    borderRadius: 15,
  },
  icon: {
    width: 28,
    height: 28,
    tintColor: 'black',
  },
  iconActiveCollection: {
    tintColor: '#476dd6',
  },
  iconActiveWishlist: {
    tintColor: '#5151c3',
  },
  iconActiveAdd: {
    tintColor: '#19b9b9',
  },
  iconTitle: {
    fontSize: 9,
  },
});

export default BottomNavButton;
