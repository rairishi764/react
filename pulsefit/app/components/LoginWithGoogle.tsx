import React, { useEffect, useState } from 'react';
import { View, Text, Button, Image } from 'react-native';
import { useAuth } from '@realm/react';
import * as Google from 'expo-auth-session/providers/google';
import colors from '../styles/colors';
import { AuthOperationName } from '@realm/react';
import { StatusBar } from 'expo-status-bar';

export const LogInWithGoogle = () => {
  const [accessToken, setAccessToken] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { logInWithGoogle, result } = useAuth();

  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: 'YOUR_ANDROID_CLIENT_ID',
    iosClientId: '412918610887-k1j69i0v9a3l8o26p11bfded7ncm0qq6.apps.googleusercontent.com',
    expoClientId: '412918610887-m41emha1f8v7smdmpaf31484b8mubpav.apps.googleusercontent.com',
  });

  useEffect(() => {
    if (response?.type === 'success') {
      setAccessToken(response.authentication.accessToken);
      logInWithGoogle({idToken: response.authentication.idToken});
      
    } else if (response?.type === 'error') {
      setError(response.error);
    }
  }, [response]);

  const getUserData = async () => {
    try {
      let userInfoResponse = await fetch('https://www.googleapis.com/userinfo/v2/me', {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      let userData = await userInfoResponse.json();
      setUserInfo(userData);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const showUserData = () => {
    if (userInfo) {
      return (
        <View>
          <Image source={{ uri: userInfo.picture }} style={{ width: 50, height: 50 }} />
          <Text>{userInfo.name}</Text>
          {/* Add more user data fields as needed */}
        </View>
      );
    }
  };

  return (
    <View>
      {isLoading && <Text>Loading...</Text>}
      {error && <Text style={{ color: 'red' }}>{error}</Text>}
      {showUserData()}
      <Button
        title={accessToken ? 'Get User Data' : 'Login'}
        onPress={() => {
          setIsLoading(true);
          accessToken ? getUserData() : promptAsync({ showInRecents: true }).finally(() => setIsLoading(false));
        }}
      />
      <StatusBar style="auto" />
    </View>
  );
};
