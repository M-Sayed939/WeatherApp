/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image,Platform , TouchableOpacity, TextInput, KeyboardAvoidingView, ScrollView } from 'react-native';
import Logo from '../../../assets/images/welcome-img.png';
import CustomButton from '../../components/CustomButton/CustomButton';
import auth from '../firebase';
// import { db } from '../firebase';
import DateTimePicker from '@react-native-community/datetimepicker';
// import { doc, setDoc ,updateDoc  } from 'firebase/firestore';

const ProfileScreen = () => {

  const [fname, setfname] = useState('John');
  const [lastn, setlastn] = useState('Doe');
  const [age, setAge] = useState('28');
  const [phone, setPhone] = useState('+20 12 345 6789 ');
  const [email, setEmail] = useState(auth.currentUser?.email);
  const [isEditing, setIsEditing] = useState(true);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);


  const handleDateChange = (event, date) => {
    setShowDatePicker(false);
    if (date !== undefined) {
      setSelectedDate(date);
    }
  };
  const showDatePickerModal = () => {
    setShowDatePicker(true);
  };

  const handleEditProfile = () => {
    setIsEditing(true);
  };

  const handleSaveProfile = () => {
    setIsEditing(false);
  };

  // const updateDocm = async () => {
  //   const washingtonRef = doc(db, 'users', auth.currentUser.uid);

  //   // Set the "capital" field of the city 'DC'
  //   await updateDoc(washingtonRef, {
  //     FirtName: fname,
  //     LastName: lastn,
  //     Phone: phone,
  //     Age: age,
  //   });
  //     };
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <TouchableOpacity onPress={handleEditProfile}>
          <View style={styles.profileImageContainer}>
            <Image
              style={styles.profileImage}
              source={Logo} // Replace with your own image source
            />
            {isEditing && (
              <View style={styles.editProfileOverlay}>
                <Text style={styles.editProfileText}>Edit</Text>
              </View>
            )}
          </View>
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          placeholder="fname"
          value={fname}
          onChangeText={setfname}
          editable={isEditing}
        />
        <TextInput
          style={styles.input}
          placeholder="lastn"
          value={lastn}
          onChangeText={setlastn}
          editable={isEditing}
        />
        <TextInput
          style={styles.input}
          placeholder="Age"
          value={age}
          onChangeText={setAge}
          keyboardType="numeric"
          editable={isEditing}
        />
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          value={phone}
          onChangeText={setPhone}
          keyboardType="numeric"
          editable={isEditing}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          editable={false}
        />

      <CustomButton text="Pick Your Birthdate" onPress={showDatePickerModal} bgColor="#FAE9EA" fgColor="#DD4D44" isEditing={!isEditing}/>
      {showDatePicker && (
        <DateTimePicker
          value={selectedDate}
          mode="date"
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          onChange={handleDateChange}
        />
      )}

      <Text>{`${selectedDate.toLocaleDateString()}`}</Text>

      {/* <CustomButton title="Submit" onPress={() => alert(`Selected Date: ${selectedDate}`)} /> */}
        {/* <CustomInput placeholder="Birthdate" value={selectedDate} setValue={setSelectedDate} onPress={showDatePickerModal} /> */}

      {isEditing ? (<CustomButton text="Save" onPress={handleSaveProfile} bgColor="#c4c4c4" fgColor="white"/>) : null}
      {!isEditing ? (<CustomButton text="Edit Profile" onPress={handleEditProfile} bgColor="#c4c4c4" fgColor="white"/>) : null}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  datePicker: {
    width: 200,
    marginBottom: 16,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  profileImageContainer: {
    borderRadius: 75,
    overflow: 'hidden',
    marginBottom: 16,
    position: 'relative',
  },
  profileImage: {
    width: 150,
    height: 150,
  },
  editProfileOverlay: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: 8,
    borderRadius: 15,
  },
  editProfileText: {
    color: 'white',
    fontSize: 14,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 16,
    width: '100%',
    fontSize: 16,
  },
  saveButton
: {
backgroundColor: 'blue',
paddingVertical: 12,
paddingHorizontal: 24,
borderRadius: 5,
alignSelf: 'center',
},
saveButtonText: {
color: 'white',
fontSize: 18,
fontWeight: 'bold',
},
});
export default ProfileScreen;
