import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useAuth, AuthOperationName } from '@realm/react';
import * as Google from 'expo-auth-session/providers/google';
import colors from '../styles/colors';
import { StatusBar } from 'expo-status-bar';
import { SYNC_CONFIG } from '../../sync.config';
import { Button, Icon } from 'react-native-elements';

// Define the component for Google login
export const LogInWithGoogle = () => {
  // State variables to manage authentication and user information
  const [accessToken, setAccessToken] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Use the useAuth hook to access authentication functions
  const { logInWithGoogle, result } = useAuth();

  // Configure Google authentication request
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    iosClientId: SYNC_CONFIG.iosClientId,
    expoClientId: SYNC_CONFIG.expoClientId,
    androidClientId: SYNC_CONFIG.androidClientId
  });

  // Handle the response from the Google authentication request

  //useEffect(() => {
  //  if (result.success && result.operation === AuthOperationName.Register) {
  //    logInWithEmailPassword({email, password});
  //  }
  //}, [result, logInWithEmailPassword, email, password]);


  useEffect(() => {
    if (response?.type === 'success') {
      // Extract access token, log in with Google, and fetch user data
      setAccessToken(response.authentication.accessToken);
      logInWithGoogle({ idToken: response.authentication.idToken });
      getUserData();
    } else if (response?.type === 'error') {
      // Handle authentication error
      setError(response.error);
    }
  }, [response, logInWithGoogle]);

  // Fetch user data from Google API
  const getUserData = async () => {
    try {
      // Make a request to the Google API to get user information
      let userInfoResponse = await fetch('https://www.googleapis.com/userinfo/v2/me', {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      // Parse the response as JSON
      let userData = await userInfoResponse.json();
      // Update user information in state and global variable
      setUserInfo(userData);
      global.user = userData;
    } catch (error) {
      // Handle errors during user data fetching
      console.error('Error fetching user data:', error);
    }
  };

  // Render the component
  return (
    <View style={styles.content}>
      {/* Display an error message if there is an authentication error */}
      {error && <Text style={{ color: 'red' }}>{error}</Text>}
      
      {/* Button for Google login */}
      <Button
        title="Login with Google"
        icon={<Icon name="google" type="font-awesome" color="white" />}
        buttonStyle={{ backgroundColor: '#4285F4', borderRadius: 5, padding: 10 }}
        onPress={() => {
          setIsLoading(true);
          // If access token exists, fetch user data; otherwise, initiate Google prompt
          accessToken
            ? getUserData()
            : promptAsync({ showInRecents: true }).finally(() => setIsLoading(false));
        }}
        disabled={isLoading} // Disable the button when loading
      />
      
      {/* Display the status bar */}
      <StatusBar style="auto" />
    </View>
  );
};

// Define styles for the component
const styles = StyleSheet.create({
  content: {
    padding: 10,
    justifyContent: 'center',
    backgroundColor: colors.darkBlue,
  }
});
