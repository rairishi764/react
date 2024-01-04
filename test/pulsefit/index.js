// Import the Expo development client for Expo Go
import 'expo-dev-client';

// Import a library for generating random values (used in some cases)
import 'react-native-get-random-values';

// Import React library for building React components
import React from 'react';

// Import the `registerRootComponent` function from Expo for registering the root component of the app
import { registerRootComponent } from 'expo';

// Import the non-sync and sync versions of the AppWrapper component
import { AppWrapperNonSync } from './app/AppWrapperNonSync';
import { AppWrapperSync } from './app/AppWrapperSync';

// Import the configuration for sync settings
import { SYNC_CONFIG } from './sync.config';

// Define a functional component named App
const App = () =>
  console.log(SYNC_CONFIG); 
  // Check if sync is enabled based on the configuration
  SYNC_CONFIG.enabled ? (
    // If sync is enabled, render the AppWrapperSync component with the specified appId
    <AppWrapperSync appId={SYNC_CONFIG.appId} />
  ) : (
    // If sync is not enabled, render the AppWrapperNonSync component
    <AppWrapperNonSync />
  );

// Register the App component as the root component of the app
registerRootComponent(App);
