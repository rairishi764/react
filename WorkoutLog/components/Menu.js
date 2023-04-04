import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

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
        {menuOpen ? (
          <Icon name="close-outline" size={24} color="#fff" />
        ) : (
          <Icon name="menu-outline" size={24} color="#fff" />
        )}
      </TouchableOpacity>
      {menuOpen && (
        <View style={styles.menu}>
          <TouchableOpacity style={styles.menuItem} onPress={handleLogPress}>
            <Icon name="add-outline" size={20} color="#007AFF" />
            <Text style={styles.menuItemText}>Log a Workout</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={handleHistoryPress}>
            <Icon name="time-outline" size={20} color="#007AFF" />
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
  menu: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  menuItemText: {
    fontSize: 16,
    marginLeft: 10,
  },
});
