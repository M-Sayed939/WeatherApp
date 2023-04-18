/* eslint-disable no-unused-vars  */
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert,
  Dimensions,
  Image,
} from 'react-native';
import Signin from './src/screens/Signin';
import SignUpScreen from './src/screens/SignUpScreen';
import Navigation from './src/navigation/index';
import index from './src/screens/HomePage/HomePage';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <Navigation />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC',
  },
});

export default App;
