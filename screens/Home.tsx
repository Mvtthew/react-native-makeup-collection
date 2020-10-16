import React from 'react';
import {StyleSheet, Text} from 'react-native';

const Home = () => {
  return (
    <Text style={styles.bigText}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
      dolorum ea officia inventore mollitia temporibus tempora error eum maiores
      magni earum, ipsam reprehenderit, nisi quo deserunt consequuntur
      veritatis. Voluptatibus, nisi?
    </Text>
  );
};

const styles = StyleSheet.create({
  bigText: {
    fontSize: 60,
  },
});

export default Home;
