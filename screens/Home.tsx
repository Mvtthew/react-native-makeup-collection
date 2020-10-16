import React from 'react';
import {StyleSheet, Text} from 'react-native';

const Home: React.FC = () => {
  return <Text style={styles.bigText}>MMC</Text>;
};

const styles = StyleSheet.create({
  bigText: {
    fontSize: 60,
    textAlign: 'center',
    marginTop: 50,
  },
});

export default Home;
