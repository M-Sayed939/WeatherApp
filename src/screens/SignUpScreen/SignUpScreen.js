/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from 'react';
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
import Navigation from '../../navigation';
import { useNavigation } from '@react-navigation/native';
import auth from '../firebase';
import { db } from '../firebase';
import { addDataToFirestore } from '../../data/firestore_functions';
import provider from '../firebase';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';

const SignUpScreen = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPhone, setErrorPhone] = useState('');
  const [errorUserName, setErrorUserName] = useState('');

  const [errorPassword, setErrorPassword] = useState('');
  const navigation = useNavigation();

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
    if (username.trim() === '') {
      setErrorUserName('Please Enter Your UserName');
      isValid = false;
    }
    if (phone.trim() === '') {
      setErrorPhone('Please Enter Your Phone Number');
      isValid = false;
    }
    else if (phone.trim().length < 11) {
      setErrorPhone('Phone Number must be at least 11 characters');
      isValid = false;
    }
    if (isValid) {
      onRegisterPressed();
    }
  };
  const onSigninPressed = () => {
    //console.warn('Signin');
    navigation.navigate('SignIn');
  };

  const addUserToDb = async () => {

    await setDoc(doc(db, 'Users', auth.currentUser.uid), {
      Username: username,
      Email: email,
      Phone: phone,
    });
  };

  const onRegisterPressed = () => {

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        // Alert.alert('Registeration Succssed');
        navigation.navigate('SignIn');
        const user = userCredential.user;
        // console.log(auth.currentUser.uid);
        addUserToDb();

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Alert.alert('Registeration failed');

        // ..
      });

  };

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '1088490926479-jglov2vl63j40l0bkn6m2aha8ktgap80.apps.googleusercontent.com',
    });
  }, []);


  async function onSignInGoogle() {
    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  }

  const onTermsOfUsePressed = () => {
    console.warn('onTermsOfUsePressed');
  };

  const onPrivacyPressed = () => {
    console.warn('onPrivacyPressed');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Create an account</Text>

        <CustomInput placeholder="Username" value={username} setValue={(text) => { setUsername(text); setErrorUserName(''); }} />
        {errorUserName ? <Text style={styles.error}>{errorUserName}</Text> : null}

        <CustomInput placeholder="Email" value={email} setValue={(text) => { setEmail(text); setErrorEmail(''); }} />
        {errorEmail ? <Text style={styles.error}>{errorEmail}</Text> : null}

        <CustomInput placeholder="Password" value={password} setValue={(text) => { setPassword(text); setErrorPassword(''); }} secureTextEntry={true} />
        {errorPassword ? <Text style={styles.error}>{errorPassword}</Text> : null}

        <CustomInput placeholder="Phone Number" value={phone} setValue={(text) => { setPhone(text); setErrorPhone(''); }}  />
        {errorPhone ? <Text style={styles.error}>{errorPhone}</Text> : null}

        <CustomButton text="Register" onPress={handleSubmit} />
        <Text style={styles.text}>By registering , you confirm that you accept our {' '}
          <Text style={styles.link} onPress={onTermsOfUsePressed}>Terms of Use</Text> and {' '}
          <Text style={styles.link} onPress={onPrivacyPressed}>Privacy Policy</Text>
        </Text>

        <CustomButton text="Sign In with Google" onPress={onSignInGoogle} bgColor="#FAE9EA" fgColor="#DD4D44" />
        <CustomButton text="Have an account? Sign in." onPress={onSigninPressed} type="TERTIARY" />

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
  error: {
    color: 'red',
    marginBottom: 10,
  },
  logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 200,
    margin: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 10,
  },
  text: {
    color: 'grey',
    marginVertical: 10,
  },
  link: {
    color: '#FDB075',
  },
});

export default SignUpScreen;
