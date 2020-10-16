import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import {NativeRouter, Route} from 'react-router-native';
import BottomNav from './components/bottom-nav/BottomNav';
import Add from './screens/Add';
import Collection from './screens/Collection';
import Home from './screens/Home';
import Wishlist from './screens/Wishlist';

const App: React.FC = () => {
  return (
    <>
      <NativeRouter>
        <StatusBar backgroundColor="#80afdd" />
        <View style={styles.root}>
          <SafeAreaView style={styles.main}>
            <ScrollView>
              <Route path="/" exact component={Home} />
              <Route path="/collection" component={Collection} />
              <Route path="/add" component={Add} />
              <Route path="/wishlist" component={Wishlist} />
            </ScrollView>
            <BottomNav />
          </SafeAreaView>
        </View>
      </NativeRouter>
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
