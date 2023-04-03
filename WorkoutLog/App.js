import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import AddWorkout from './screens/workout/AddWorkout';
import Header from './components/header';
import Menu from './components/Menu';
export default function App() {
  
  return (

    <View styles={styles.container}>
      <Header></Header>
      <AddWorkout></AddWorkout>
      <Menu></Menu>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  }});