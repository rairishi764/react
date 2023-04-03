import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Menu({ navigation }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuPress = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogPress = () => {
    navigation.navigate('AddWorkout');
    setMenuOpen(false);
  };

  const handleHistoryPress = () => {
    navigation.navigate('WorkoutHistory');
    setMenuOpen(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.menuButton} onPress={handleMenuPress}>
        <Text style={styles.menuButtonText}>{menuOpen ? 'Close' : 'Menu'}</Text>
      </TouchableOpacity>
      {menuOpen && (
        <View style={styles.menu}>
          <TouchableOpacity style={styles.menuItem} onPress={handleLogPress}>
            <Text style={styles.menuItemText}>Log a Workout</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={handleHistoryPress}>
            <Text style={styles.menuItemText}>Workout History</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 40,
    left: 0,
    zIndex: 999,
  },
  menuButton: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
  },
  menuButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  menu: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  menuItem: {
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  menuItemText: {
    fontSize: 16,
  },
});
