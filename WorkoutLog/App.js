import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import AddWorkout from './screens/workout/AddWorkout';
import Header from './components/header';
import Menu from './components/Menu';
export default function App() {
  
  return (

    <View styles={styles.container}>
      <Header></Header>
      <Menu></Menu>
      <AddWorkout></AddWorkout>  
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