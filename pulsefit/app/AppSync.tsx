import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useAuth, useUser } from '@realm/react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { Task } from './models/Task';
import { TaskManager } from './components/TaskManager';
import { OfflineModeButton } from './components/OfflineModeButton';
import { buttonStyles } from './styles/button';
import { shadows } from './styles/shadows';
import colors from './styles/colors';
import CustomSidebarMenu from './components/CustomSideMenu';

const Drawer = createDrawerNavigator();

// ... (existing imports)

export const AppSync: React.FC = () => {
  const { logOut } = useAuth();
  const user = useUser();

  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomSidebarMenu {...props} />}
      >
        <Drawer.Screen name="Home">
          {() => (
            <>
              
              <Pressable style={styles.authButton} onPress={logOut}>
                <Text style={styles.authButtonText}>
                  {`Logout ${user?.profile.name || user?.profile.email}`}
                </Text>
              </Pressable>
              <OfflineModeButton />
            </>
          )}
        </Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

// ... (existing styles and export)



const styles = StyleSheet.create({
  idText: {
    color: '#999',
    paddingHorizontal: 20,
  },
  authButton: {
    ...buttonStyles.button,
    ...shadows,
    backgroundColor: colors.purpleDark,
  },
  authButtonText: {
    ...buttonStyles.text,
  },
});

export default AppSync;
