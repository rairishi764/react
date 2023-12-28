import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useAuth } from '@realm/react';
import * as Google from 'expo-auth-session/providers/google';
import colors from '../styles/colors';
import { StatusBar } from 'expo-status-bar';
import { SYNC_CONFIG } from '../../sync.config';
import { Button, Icon } from 'react-native-elements'; // Import Button and Icon from react-native-elements
export const LogInWithGoogle = () => {
  const [accessToken, setAccessToken] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { logInWithGoogle, result } = useAuth();

  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    iosClientId: SYNC_CONFIG.iosClientId,
    expoClientId: SYNC_CONFIG.expoClientId,
    androidClientId:SYNC_CONFIG.androidClientId
  });

  useEffect(() => {
    if (response?.type === 'success') {
      setAccessToken(response.authentication.accessToken);
      logInWithGoogle({idToken: response.authentication.idToken});
      getUserData()
    } else if (response?.type === 'error') {
      setError(response.error);
    }
  }, [response,logInWithGoogle]);



  const getUserData = async () => {
    console.log(accessToken)
    try {
      let userInfoResponse = await fetch('https://www.googleapis.com/userinfo/v2/me', {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      let userData = await userInfoResponse.json();
      setUserInfo(userData);
      global.user=userInfo
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  return (
    <View style={styles.content}>
      {error && <Text style={{ color: 'red' }}>{error}</Text>}
      <Button
        title=" Login with Google"
        icon={<Icon name="google" type="font-awesome" color="white" />} // Add Google icon
        buttonStyle={{ backgroundColor: '#4285F4', borderRadius: 5 , padding:10}} // Customize the button style
        onPress={() => {
          setIsLoading(true);
          accessToken
            ? getUserData()
            : promptAsync({ showInRecents: true }).finally(() => setIsLoading(false));
        }}
      />
      <StatusBar style="auto" />
    </View>
  );
};
const styles = StyleSheet.create({
    content: {
      padding: 10,
      justifyContent: 'center',
      backgroundColor: colors.darkBlue,
    }})