import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const ProfileScreen = () => {
  const [name, setName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState(null); // Use null to indicate no date selected
  const [sex, setSex] = useState(null); // Use null to indicate no sex selected
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false); // Track form validity

  // Validation function to check if all fields are filled
  const validateForm = () => {
    if (name.trim() !== '' && dateOfBirth && sex && height.trim() !== '' && weight.trim() !== '') {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleDateConfirm = (selectedDate) => {
    hideDatePicker();
    // Format the selected date as needed (e.g., to YYYY-MM-DD format)
    const formattedDate = selectedDate.toISOString().split('T')[0];
    setDateOfBirth(formattedDate);
    validateForm(); // Call validation when date is selected
  };

  const handleSaveProfile = () => {
    // Implement code to save the user's profile data (e.g., to a database)
    // You can perform input validation here before saving the data

    // For demonstration purposes, we'll log the collected data
    console.log('Name:', name);
    console.log('Date of Birth:', dateOfBirth);
    console.log('Sex:', sex);
    console.log('Height:', height);
    console.log('Weight:', weight);
    //navigation.navigate('Home'); 
    // You can also navigate to the next screen or perform any other actions here
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, { backgroundColor: 'white', color:'#528265' }]}
          placeholder="Enter your name"
          value={name}
          onChangeText={(text) => {
            setName(text);
            validateForm(); // Call validation on input change
          }}
        />
      </View>

      <View style={styles.inputContainer}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <Button title="Select Date of birth" onPress={showDatePicker} className='text-s' />
          {dateOfBirth && (
            <Text>{dateOfBirth}</Text>
          )}
        </View>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleDateConfirm}
          onCancel={hideDatePicker}
          textColor="#528265" // Set the text color to make the dates visible
        />
      </View>

      <View style={styles.inputContainer}>
        <RNPickerSelect
          onValueChange={(value) => {
            setSex(value);
            validateForm(); // Call validation on input change
          }}
          items={[
            { label: 'Male', value: 'male' },
            { label: 'Female', value: 'female' },
            { label: 'Other', value: 'other' },
          ]}
          placeholder={{ label: 'Select your sex', value: null }}
          value={sex}
          style={{
            inputIOS: {
              backgroundColor: 'white',
              height: 40, // Set the height to match the text box height
              borderWidth:0.5,
              padding:10
            },
            inputAndroid: {
              backgroundColor: 'white',
              height: 40, // Set the height to match the text box height
            },
          }}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, { backgroundColor: 'white' }]}
          placeholder="Height in cm"
          keyboardType="numeric"
          value={height}
          onChangeText={(text) => {
            setHeight(text);
            validateForm(); // Call validation on input change
          }}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, { backgroundColor: 'white' }]}
          placeholder="Weight in lbs"
          keyboardType="numeric"
          value={weight}
          onChangeText={(text) => {
            setWeight(text);
            validateForm(); // Call validation on input change
          }}
        />
      </View>

      <Button
        title="Save Profile"
        onPress={handleSaveProfile}
        disabled={!isFormValid} // Disable the button if the form is not valid
      />
    </View>
  );
};

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: 'white', margin: 20, shadowColor: 'black', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.2, shadowRadius: 4

    },
    header: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      color: '#528265', // Header text color
    },
    inputContainer: {
      marginBottom: 20,
    },
    input: {
      borderWidth: 1,
      borderColor: 'gray',
      padding: 10,
      color: '#528265', // Text color
      fontSize: 16, // Font size
      backgroundColor: 'white',
    },
    label: {
      fontSize: 16, // Font size
      color: '#528265', // Text color
    },
  });
  
  export default ProfileScreen;
  