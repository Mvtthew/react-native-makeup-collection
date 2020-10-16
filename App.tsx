import React from 'react';
import {SafeAreaView, Text, StatusBar} from 'react-native';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="teal" />
      <SafeAreaView>
        <Text>Hello world</Text>
      </SafeAreaView>
    </>
  );
};

export default App;
