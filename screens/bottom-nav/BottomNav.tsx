import React from 'react';
import {StyleSheet, View} from 'react-native';
import BottomNavButton from './BottomNavButton';

const BottomNav: React.FC = () => {
  return (
    <View style={styles.bottomNavView}>
      <BottomNavButton iconFileName="plus" iconTitle="Add" />
      <BottomNavButton iconFileName="heart" iconTitle="Wishlist" />
      <BottomNavButton iconFileName="collection" iconTitle="Collection" />
      <BottomNavButton iconFileName="menu" iconTitle="Menu" />
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
