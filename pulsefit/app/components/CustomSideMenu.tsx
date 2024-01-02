// CustomSidebarMenu.tsx

import React from 'react';
import { SafeAreaView, View, StyleSheet, Image, Text, Linking, Pressable } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { useAuth } from '@realm/react';

const CustomSidebarMenu = (props) => {
  const { logOut } = useAuth();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ marginTop: 40 }}>
      </View>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        
        <DrawerItem
          label="Sign out"
          onPress={logOut}
        />
      </DrawerContentScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    resizeMode: 'contain',
    width: '95%',
    height: 60,
  },
  customItem: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoutButton: {
    backgroundColor: "purpleDark",
    padding: 16,
    alignItems: 'center',
  },
  logoutButtonText: {
    color: 'white', // You can use your existing text styles here
  },
});

export default CustomSidebarMenu;
