import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { NativeWindStyleSheet } from "nativewind";
import React from 'react';

NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function App() {
  return (
    <View className="flex-1 items-center justify-center">
    <Text>OpenHome up App.js to start working on your app!</Text>
    <StatusBar style="auto" />
  </View>
  );
}
