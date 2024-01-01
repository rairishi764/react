// AppSync.tsx

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useAuth, useUser } from '@realm/react';
import { Pressable, StyleSheet, Text } from 'react-native';
import CustomSidebarMenu from './components/CustomSideMenu';
import Progress from './components/screens/Progress';
import { buttonStyles } from './styles/button';
import { shadows } from './styles/shadows';
import colors from './styles/colors';

const Drawer = createDrawerNavigator();

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
            
            </>
          )}
        </Drawer.Screen>
        <Drawer.Screen name="Progress" component={Progress} />
        <Drawer.Screen name="Cardiovascular" component={Progress} />
        <Drawer.Screen name="Weight" component={Progress} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  authButton: {
    ...buttonStyles.button,
    ...shadows,
    backgroundColor: colors.purpleDark,
    padding: 16,
    marginBottom: 16,
  },
  authButtonText: {
    ...buttonStyles.text,
  },
});

export default AppSync;
