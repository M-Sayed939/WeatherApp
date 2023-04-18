/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
import { View, Text,StyleSheet } from 'react-native';
import * as React from 'react';

export default function settings({navigation}) {
  return (
    <View style={styles.root}>
      <Text style={styles.title} onPress={() => navigation.navigate('Settings')}>settings</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    root: {
      alignItems:'center',
      flex:1,
      justifyContent:'center',
    },
    title:{
        fontSize:26,
        fontWeight:'bold',
      },
  });

