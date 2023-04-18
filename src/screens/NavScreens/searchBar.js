/* eslint-disable prettier/prettier */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
import { View,StyleSheet,Dimensions ,TextInput} from 'react-native'
import React, { useState } from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/FontAwesome';


const searchBar = ({fetchWeather}) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [ cityName ,setCityName] = useState('');

  return (
    <View style ={styles.searchBar}>
      <TextInput placeholder="Search City" value={cityName} onChangeText={(text)=>setCityName(text)} />
      <MaterialCommunityIcons name="search" color="black" size={20} onPress={()=>fetchWeather(cityName)} />

    </View>
  )
}
const styles = StyleSheet.create({
    searchBar: {
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
      width:Dimensions.get('window').width - 20,
      borderWidth:1.5,
      paddingVertical:10,
      borderRadius:25,
      marginHorizontal:10,
      paddingHorizontal:10,
      backgroundColor:'white',
    },
  });
export default searchBar
