/* eslint-disable prettier/prettier */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
import { View, Text , StyleSheet, Alert, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import WeatherInfo from '../NavScreens/weatherInfo';
// import auth from '../firebase';
// import CustomButton from '../../components/CustomButton';
// import {useNavigation} from '@react-navigation/native';
// import { signOut } from 'firebase/auth';


const API_KEY = '420c369df2007b358882c11113a16ad3'

const HomePage = () => {

const [ weatherData ,setWeatherData] = useState(null);
const [ loaded ,setLoaded] = useState(false);

  // const navigation = useNavigation();

  // const onSignOutPressed = () =>{
  //   signOut(auth).then(()=>{
  //     console.warn('SignOut Pressed');
  //     navigation.navigate('SignIn');

  //   }).catch((error)=>{
  //     console.warn('failed');
  //   });
  // };
const fetchWeather = async (cityName) =>{
  try {
    setLoaded(false);
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`);
    if (response.status === 200){
      const data = await response.json();
      setWeatherData(data);
    }
    else {
      setWeatherData(null);
    }
    setLoaded(true  );

  } catch (error) {
    Alert.alert('errrror',error.message)
  }
}

useEffect(()=>{
  fetchWeather('London');
},[]);

if (!loaded){
  return (
    <View style={styles.container}>
        <ActivityIndicator style={styles.cir} size="large" color="red" />
    </View>
  )
}
else if (weatherData === null){
  return (
    <View style={styles.container}>
        <Text style={styles.text}>City Not Found</Text>
    </View>
  )
}
  return (
    // // <View style={styles.root}>
    //   {/* <Text style={styles.title}>Home , sweet home</Text> */}
    //   {/* <Text style={styles.title}>Welcome: {auth.currentUser?.email}</Text> */}
    //   {/* <CustomButton text="Signout" onPress={onSignOutPressed} bgColor="#e3e3e3" fgColor="#363636"/> */}
    // // </View>
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Weather App</Text>
      </View>
      <WeatherInfo weatherData={weatherData} fetchWeather={fetchWeather}/>
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
  container: {
    flex:1,
    backgroundColor:'#FCF5DB',
  },
  header:{
    alignItems:'center',
    backgroundColor:'#C5D2EF',
    height:80,
    justifyContent:'center',
  },
  headerTitle:{
    fontSize:29,
    fontWeight:'bold',
  },
  cir:{
    flex:1,
  },
});
export default HomePage
