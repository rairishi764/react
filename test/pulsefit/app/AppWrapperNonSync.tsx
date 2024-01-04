// Import React library for building React components
import React from 'react';

// Import necessary components and utilities from React Native
import { SafeAreaView, StyleSheet } from 'react-native';

// Import the color styles from the 'styles/colors' file
import colors from './styles/colors';

// Import the AppNonSync component
import { AppNonSync } from './AppNonSync';

// Import RealmProvider from '@realm/react' and the data models from './models'
import { RealmProvider } from '@realm/react';
import { schemas } from './models';

// Define a functional component named AppWrapperNonSync
export const AppWrapperNonSync = () => {
  // If sync is disabled, setup the app without any sync functionality and return early
  return (
    // Use SafeAreaView for a safe rendering area on devices with notches or other display variations
    <SafeAreaView style={styles.screen}>
      {/* Use RealmProvider to provide a Realm instance to child components without sync configuration */}
      <RealmProvider schema={schemas}>
        {/* Render the AppNonSync component within the RealmProvider */}
        <AppNonSync />
      </RealmProvider>
    </SafeAreaView>
  );
};

// Define styles for the component using StyleSheet
const styles = StyleSheet.create({
  screen: {
    flex: 1, // Take up the entire available space
    backgroundColor: colors.darkBlue, // Set the background color using the colors.darkBlue value
  },
});
