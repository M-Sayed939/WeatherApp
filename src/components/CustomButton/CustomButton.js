/* eslint-disable prettier/prettier */
import React from 'react';
// eslint-disable-next-line no-unused-vars
import {StyleSheet, Text,View,Pressable} from 'react-native';

const CustomButton = ({onPress ,text,type = 'PRIMARY', bgColor, fgColor,isEditing}) => {
  return (
    <Pressable disabled={isEditing} onPress={onPress} style={[styles.container,styles[`container_${type}`] , bgColor ? {backgroundColor:bgColor} : {}]}>
      <Text style={[styles.text , styles[`text_${type}`],fgColor ? {color:fgColor} : {}]}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width:'100%',
    padding:15,
    marginVertical:8,
    alignItems:'center',
    borderRadius: 5,
  },
  text: {
    fontWeight: 'bold',
    color:'white',
  },
  container_PRIMARY: {
    backgroundColor:'#3B71F3',
  },
  container_TERTIARY: {
    backgroundColor:'#F9FBFC',

  },
  text_TERTIARY: {
    fontWeight: 'bold',
    color: 'grey',
  },

});

export default CustomButton;
