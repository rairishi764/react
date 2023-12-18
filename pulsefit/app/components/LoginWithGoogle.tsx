import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { useAuth } from '@realm/react';
import * as GoogleSignIn from 'expo-google-app-auth';
import colors from '../styles/colors';
import { AuthOperationName } from '@realm/react';

export const LogInWithGoogle = () => {
  const { logInWithGoogle, result } = useAuth();

  const handleGoogleSignIn = async () => {
    try {
      const result = await GoogleSignIn.logInAsync({
        //androidClientId: 'YOUR_ANDROID_CLIENT_ID',
        iosClientId: '412918610887-m41emha1f8v7smdmpaf31484b8mubpav.apps.googleusercontent.com', 
        scopes: ['profile', 'email'],
      });
  
      if (result.type === 'success') {
        logInWithGoogle({ idToken: result.idToken });
      }
    } catch (error) {
      console.error('Google sign-in error:', error);
    }
  };
  

  return (
    <View>
      <Pressable onPress={handleGoogleSignIn}>
        <Text>Login with Google</Text>
      </Pressable>

      {result?.error?.operation === AuthOperationName.LogInWithGoogle && (
  <Text style={{ color: colors.white }}>
    Error logging in with Google, please try again
  </Text>
)}

    </View>
  );
};
