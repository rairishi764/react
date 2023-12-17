// Import React library for building React components
import React from 'react';

// Import necessary components and utilities from Realm and React Native
import { AppProvider, UserProvider } from '@realm/react';
import { SafeAreaView, StyleSheet } from 'react-native';

// Import the data models defined in the 'models' file
import { schemas } from './models';

// Import the LoginScreen component
import { LoginScreen } from './components/LoginScreen';

// Import the color styles from the 'styles/colors' file
import colors from './styles/colors';

// Import the AppSync component
import { AppSync } from './AppSync';

// Import RealmProvider from '@realm/react' and OpenRealmBehaviorType, OpenRealmTimeOutBehavior from 'realm'
import { RealmProvider } from '@realm/react';
import { OpenRealmBehaviorType, OpenRealmTimeOutBehavior } from 'realm';

// Define a functional component named AppWrapperSync, which takes an 'appId' as a prop
export const AppWrapperSync: React.FC<{
  appId: string;
}> = ({ appId }) => {
  // If we are logged in, add the sync configuration to the RealmProvider and render the app
  return (
    // Use SafeAreaView for a safe rendering area on devices with notches or other display variations
    <SafeAreaView style={styles.screen}>
      {/* Use AppProvider to initialize the Realm app with the provided 'appId' */}
      <AppProvider id={appId}>
        {/* Use UserProvider with a fallback LoginScreen component for handling user authentication */}
        <UserProvider fallback={<LoginScreen />}>
          {/* Use RealmProvider to provide a Realm instance to child components with sync configuration */}
          <RealmProvider
            schema={schemas} // Define the data models to be used by Realm
            sync={{
              flexible: true, // Allow flexible sync configurations
              existingRealmFileBehavior: {
                type: OpenRealmBehaviorType.DownloadBeforeOpen, // Define behavior for existing Realm file during sync
                timeOut: 1000, // Set a timeout value for sync operations
                timeOutBehavior:
                  // In v11, use the OpenRealmTimeOutBehavior enum or a string value for time-out behavior
                  OpenRealmTimeOutBehavior?.OpenLocalRealm ?? 'openLocalRealm',
              },
            }}>
            {/* Render the AppSync component within the RealmProvider */}
            <AppSync />
          </RealmProvider>
        </UserProvider>
      </AppProvider>
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

// Export the AppWrapperSync component as the default export
export default AppWrapperSync;
