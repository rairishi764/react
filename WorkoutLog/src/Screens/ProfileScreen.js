import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';

const ProfileScreen = () => {
  const [name, setName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [sex, setSex] = useState('');
  const [height, setHeight] = useState('');

  const handleSaveProfile = () => {
    // Implement code to save the user's profile data (e.g., to a database)
    // You can perform input validation here before saving the data

    // For demonstration purposes, we'll log the collected data
    console.log('Name:', name);
    console.log('Date of Birth:', dateOfBirth);
    console.log('Sex:', sex);
    console.log('Height:', height);

    // You can also navigate to the next screen or perform any other actions here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Profile Details</Text>

      <View style={styles.inputContainer}>
        <Text>Name:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          value={name}
          onChangeText={(text) => setName(text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text>Date of Birth:</Text>
        <TextInput
          style={styles.input}
          placeholder="YYYY-MM-DD"
          value={dateOfBirth}
          onChangeText={(text) => setDateOfBirth(text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text>Sex:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your sex"
          value={sex}
          onChangeText={(text) => setSex(text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text>Height (cm):</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your height"
          keyboardType="numeric"
          value={height}
          onChangeText={(text) => setHeight(text)}
        />
      </View>

      <Button title="Save Profile" onPress={handleSaveProfile} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
  },
});

export default ProfileScreen;
