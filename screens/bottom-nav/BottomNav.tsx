import React from 'react';
import {StyleSheet, View} from 'react-native';

const BottomNav = () => {
  return <View style={styles.bottomNavView}></View>;
};

const styles = StyleSheet.create({
  bottomNavView: {
    height: 70,
    width: '100%',
    backgroundColor: '#f5f5f5',
    display: 'flex',
  },
});

export default BottomNav;
