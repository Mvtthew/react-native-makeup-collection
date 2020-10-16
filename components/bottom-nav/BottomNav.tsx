import React from 'react';
import {StyleSheet, View} from 'react-native';
import BottomNavButton from './BottomNavButton';

const BottomNav: React.FC = () => {
  return (
    <View style={styles.bottomNavView}>
      <BottomNavButton iconFileName="plus" iconTitle="Add" linkTo="/add" />
      <BottomNavButton
        iconFileName="heart"
        iconTitle="Wishlist"
        linkTo="/wishlist"
      />
      <BottomNavButton
        iconFileName="collection"
        iconTitle="Collection"
        linkTo="/collection"
      />
      <BottomNavButton iconFileName="menu" iconTitle="Menu" linkTo="/" />
    </View>
  );
};

const styles = StyleSheet.create({
  bottomNavView: {
    height: 70,
    width: '100%',
    backgroundColor: '#f5f5f5',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingLeft: '4%',
    paddingRight: '4%',
  },
});

export default BottomNav;
