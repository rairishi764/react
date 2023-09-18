import { NativeWindStyleSheet } from "nativewind";
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
import HomeScreen from "./src/screens/HomeScreen";
import CardDetailScreen from "./src/screens/CardDetailScreen";
import ProgressScreen from "./src/screens/ProgressScreen";
import StartupScreen from "./src/screens/StartupScreen";
NativeWindStyleSheet.setOutput({
  default: "native",
});

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Startup">
        {/* Define your screens */}
        <Stack.Screen name="Startup" component={StartupScreen} options={{ headerShown: false }} />
       
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="CardDetail" component={CardDetailScreen} />
      <Stack.Screen name="ProgressScreen" component={ProgressScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}
