import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from './Styles';
export default function Header() {
  
  return (
    <View style={styles.menuHeader}>
      <Text style={styles.headerText}>Workout Logger</Text>
    </View>
  );
}

