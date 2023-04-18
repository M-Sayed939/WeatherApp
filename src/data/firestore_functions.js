/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
import firestore from 'firebase/firestore';

// Add data to Firestore

export const addDataToFirestore = async() => {
  try {
    const collectionRef = firestore().collection('User'); // Replace 'users' with the name of your collection

    // Data to be added
    const data = {
      first_name: 'John',
      last_name: 'Due',
      age: 30,
      phone_number:'01287128932',
      date:'08/12/2001',
      email: 'john@example.com',
    };

    // Add data to Firestore
    await collectionRef.add(data);
    console.log('Data added successfully!');
  } catch (error) {
    console.error('Error adding data to Firestore: ', error);
  }
}

