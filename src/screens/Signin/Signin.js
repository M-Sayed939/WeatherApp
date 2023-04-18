/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert,
  Dimensions,
  Image,
  ScrollView,
} from 'react-native';
import Logo from '../../../assets/images/welcome-img.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import auth from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');

  const navigation = useNavigation();

  const onSignInPressed = () => {


    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        // Alert.alert('Signed in successed');
        navigation.navigate('Nav');
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Alert.alert('Wrong E-mail or password please try Again or Signup');
        // ..
      });

  };
  const handleSubmit = () => {
    let isValid = true;
    if (email.trim() === '') {
      setErrorEmail('Please Enter Your Email');
      isValid = false;
    }
    else if (!/\S+@\S+\.\S+/.test(email)) {
      setErrorEmail('Please Enter a valid email address');
      isValid = false;
    }
    if (password.trim() === '') {
      setErrorPassword('Please Enter Your Password');
      isValid = false;
    }
    else if (password.trim().length < 6) {
      setErrorPassword('Password must be at least 6 characters');
      isValid = false;
    }
    if (isValid) {
      onSignInPressed();
    }
  };
  const onForgotPasswordPressed = () => {
    console.warn('Forgot Password');
    navigation.navigate('ForgetPass');
  };



  const onSignInGoogle = () => {
    console.warn('Sign In Google');
  };


  const onSignUpPressed = () => {
    //console.warn('Sign Up Pressed');
    navigation.navigate('SignUp');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image source={Logo} style={styles.logo} resizeMode="contain" />

        <CustomInput placeholder="Email" value={email} setValue={(text) => { setEmail(text); setErrorEmail('');}} />
        {errorEmail ? <Text style={styles.error}>{errorEmail}</Text> : null}

        <CustomInput placeholder="Password" value={password} setValue={(text) => { setPassword(text); setErrorPassword('');}} secureTextEntry={true} />
        {errorPassword ? <Text style={styles.error}>{errorPassword}</Text> : null}

        <CustomButton text="Sign In" onPress={handleSubmit} />

        <CustomButton text="Forgot password?" onPress={onForgotPasswordPressed} type="TERTIARY" />

        <CustomButton text="Sign In with Google" onPress={onSignInGoogle} bgColor="#FAE9EA" fgColor="#DD4D44" />

        <CustomButton text="Don't have an account? Create one ." onPress={onSignUpPressed} type="TERTIARY" />

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 30,
    backgroundColor: '#F9FBFC',
  },
  logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 200,
    margin: 20,
  },
  error: {
    color: 'red',
    marginBottom: 8,
  },
});

export default Signin;
