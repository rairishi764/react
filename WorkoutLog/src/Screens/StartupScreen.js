import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const StartupScreen = ({ navigation }) => {
  // Use the useEffect hook to perform actions on component mount
  useEffect(() => {
    // Simulate some startup tasks or data loading
    setTimeout(() => {
      // After your startup tasks, navigate to the main screen or login screen
      navigation.navigate('Main'); // Replace 'Main' with your main screen's name
    }, 2000); // Simulate a 2-second delay, you can adjust as needed
  }, []);

  // Function to handle button press and navigate to the home screen
  const handleButtonPress = () => {
    navigation.navigate('Home'); // Replace 'Home' with your home screen's name
  };

  return (
    <View style={styles.container}>
      {/* Display your app's logo or any other content */}
      <Image
        source={require('../../assets/logo-color.png')} // Replace with your logo image path
        style={styles.logo}
      />
      
      {/* Add a button to navigate to the home screen */}
      <TouchableOpacity onPress={handleButtonPress} style={styles.button}>
        <Text style={styles.buttonText}>Go to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#528265', // Set your desired background color
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  loadingText: {
    marginTop: 20,
    fontSize: 18,
  },
  button: {
    marginTop: 20,
    backgroundColor: 'white', // Set your desired button background color
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#528265', // Set your desired button text color
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default StartupScreen;
