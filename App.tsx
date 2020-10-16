import React, {useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  StatusBar,
  ScrollView,
  StyleSheet,
  View,
  Appearance,
} from 'react-native';
import {NativeRouter, Route} from 'react-router-native';
import BottomNav from './screens/bottom-nav/BottomNav';
import Home from './screens/Home';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="#80afdd" />
      <View style={styles.root}>
        <SafeAreaView style={styles.main}>
          <ScrollView>
            <NativeRouter>
              <Route path="/" exact component={Home} />
            </NativeRouter>
          </ScrollView>
          <BottomNav />
        </SafeAreaView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  root: {
    display: 'flex',
    width: '100%',
    height: '100%',
  },
});

export default App;
