import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header() {
  
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Workout Logger</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#007AFF',
    padding: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  date: {
    fontSize: 18,
    color: '#fff',
  },
});
