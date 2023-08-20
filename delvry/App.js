import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import { NativeWindStyleSheet } from "nativewind";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import CardDetailScreen from './src/screens/CardDetailScreen';
NativeWindStyleSheet.setOutput({
  default: "native",
});

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="CardDetail" component={CardDetailScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}