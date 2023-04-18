/* eslint-disable prettier/prettier */
import React from 'react';
// eslint-disable-next-line no-unused-vars
import {StyleSheet, Text,View,TextInput} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signin from '../screens/Signin/Signin';
import SignUpScreen from '../screens/SignUpScreen/SignUpScreen';
import index from '../screens/HomePage/HomePage';
import forgotPasswordScreen from '../screens/ForgotPasswordSreen/forgotPasswordScreen';
import SplashScreen from '../screens/SplashScreen/SplashScreen';
import search from '../screens/NavScreens/search';
import { settings } from 'firebase/analytics';
import profile from '../screens/NavScreens/profile';
import BottomNavScreens from '../screens/NavScreens/BottomNavScreens';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="SignIn" component={Signin} />
        <Stack.Screen name="Search" component={search} />
        <Stack.Screen name="Settings" component={settings} />
        <Stack.Screen name="Profile" component={profile} />
        <Stack.Screen name="Nav" component={BottomNavScreens} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Index" component={index} />
        <Stack.Screen name="ForgetPass" component={forgotPasswordScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  );
};



export default Navigation;
