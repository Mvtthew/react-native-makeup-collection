import React from 'react';
import {SafeAreaView, Text, StatusBar} from 'react-native';
import {NativeRouter, Route} from 'react-router-native';
import Home from './screens/Home';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="#80afdd" />
      <SafeAreaView>
        <NativeRouter>
          <Route path="/" exact component={Home} />
        </NativeRouter>
      </SafeAreaView>
    </>
  );
};

export default App;
