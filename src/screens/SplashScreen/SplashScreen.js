/* eslint-disable prettier/prettier */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
import { View, Text , StyleSheet } from 'react-native'
import React from 'react'
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';




const SplashScreen = () => {


  const navigation = useNavigation();

  const SignInPressed = () =>{
    navigation.navigate('SignIn');

  };
  const SignUpPressed = () =>{
    navigation.navigate('SignUp');
  };
  return (
    <View style={styles.root}>
      <Text style={styles.title}>Choose from below</Text>
      <Text style={styles.title}>Choose</Text>
      <CustomButton text="SignIn" onPress={SignInPressed} bgColor="#e3e3e3" fgColor="#363636"/>
      <CustomButton text="SignUp" onPress={SignUpPressed} bgColor="#e3e3e3" fgColor="#363636"/>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    alignItems:'center',
    padding:30,
    backgroundColor:'#F9FBFC',
  },
  title: {
    alignItems:'center',
    color:'black',
    fontWeight:'bold',
    fontSize:25,
  },
});
export default SplashScreen
