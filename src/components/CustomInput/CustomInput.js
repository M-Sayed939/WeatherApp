/* eslint-disable prettier/prettier */
import React from 'react';
// eslint-disable-next-line no-unused-vars
import {StyleSheet, Text,View,TextInput} from 'react-native';

const CustomInput = ({value , setValue , placeholder,secureTextEntry,onChangeText,onBlur}) => {
  return (
    <View style={styles.container}>
      <TextInput value={value} onChangeText={setValue} placeholder={placeholder} style={styles.input} secureTextEntry={secureTextEntry}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width:'100%',

    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 5,

    paddingHorizontal: 10,
    marginVertical: 7,
  },
  input:{

  },
});

export default CustomInput;
