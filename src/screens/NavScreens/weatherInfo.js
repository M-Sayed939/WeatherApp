/* eslint-disable prettier/prettier */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
import { View, Text,StyleSheet,Image,Dimensions,ScrollView } from 'react-native'
import React from 'react'
import tempr from '../../../assets/images/i.png'
import smallhu from '../../../assets/images/humid-icon-10.png'
import eye from '../../../assets/images/s.png'
import windy from '../../../assets/images/hy.png'
import sunr from '../../../assets/images/OIP.png'
import suns from '../../../assets/images/st.png'
import WeatherSearch from './searchBar'

const weatherInfo = ({weatherData,fetchWeather}) => {
    const {
        name,
        visibility,
        weather:[{main,icon,description}],
        main:{temp,humidity,feels_like},
        wind:{speed},
        sys:{sunrise,sunset},
    } = weatherData;

    return (
      <ScrollView showsVerticalScrollIndicator={false}>
      <WeatherSearch fetchWeather={fetchWeather}/>
      <View>
        <Text style={styles.title}>{name}</Text>
      </View>
      <View style={styles.logo}>
        <Image style ={styles.largeIcon} source={{uri:`https://openweathermap.org/img/wn/${icon}.png`}} />
        <Text style ={styles.currentTemp}>{temp}°C</Text>
      </View>
      <Text style ={styles.title}>{main}</Text>
      <Text style ={styles.description}>{description}</Text>

      <View style={styles.extraInfo}>
          <View style={styles.info}>
            <Image style ={styles.smallIcon} source={tempr} />
            <Text style ={styles.infoText}>{feels_like}°C</Text>
            <Text style ={styles.infoText}>Feels Like</Text>
          </View>
          <View style={styles.info}>
            <Image style ={styles.smallIcon} source={smallhu} />
            <Text style ={styles.infoText}>{humidity} %</Text>
            <Text style ={styles.infoText}>Humidity</Text>
          </View>
        </View>

        <View style={styles.extraInfo}>
          <View style={styles.info}>
          <Image style ={styles.smallIcon} source={eye} />
          <Text style ={styles.infoText}>{visibility}</Text>
          <Text style ={styles.infoText}>Visibiltiy</Text>
          </View>
          <View style={styles.info}>
          <Image style ={styles.smallIcon} source={windy} />
          <Text style ={styles.infoText}>{speed} m/s</Text>
          <Text style ={styles.infoText}>Wind Speed</Text>
          </View>
        </View>

        <View style={styles.extraInfo}>
          <View style={styles.info}>
          <Image style ={styles.smallIcon} source={sunr} />
          <Text style ={styles.infoText}>{new Date(sunrise * 1000).toLocaleString()}</Text>
          <Text style ={styles.infoText}>Sunrise</Text>
          </View>
          <View style={styles.info}>
          <Image style ={styles.smallIcon} source={suns} />
          <Text style ={styles.infoText}>{new Date(sunset * 1000).toLocaleString()}</Text>
          <Text style ={styles.infoText}>Sunset</Text>
          </View>
        </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
    container: {
      flex:1,
      marginTop:15,
    },
    title:{
        width:'100%',
        textAlign:'center',
        fontSize:26,
        fontWeight:'bold',
        color:'#e96e50',
        marginTop:10,
    },
    logo:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
    },
    largeIcon:{
        width:100,
        height:100,
    },
    currentTemp:{
        fontSize:30,
        fontWeight:'bold',
        textAlign:'center',
    },
    description:{
        fontWeight:'bold',
        textAlign:'center',
        fontSize:30,
        marginBottom:10,
    },
    extraInfo:{
        flexDirection:'row',
        justifyContent:'space-around',
        padding:7,
    },
    info:{
        width:Dimensions.get('screen').width / 2.5,
        backgroundColor:'#D0EAFA',
        padding:10,
        borderRadius:15,
        justifyContent:'center',
    },
    smallIcon:{
        height:42,
        width:42,
        borderRadius:40 / 2,
        marginLeft:50,
    },
    infoText:{
      fontSize:18,
      textAlign:'center',
    },
  });
export default weatherInfo
