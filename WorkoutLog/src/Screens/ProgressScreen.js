import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // You can use any icon library you prefer

const ProgressScreen = () => {
  const [selectedTab, setSelectedTab] = useState('daily');

  const dailyProgressData = [
    { date: '2023-09-18', workout: 'Cardio' },
    { date: '2023-09-17', workout: 'Strength Training' },
    // Add more daily progress data as needed
  ];

  const weeklyProgressData = [
    { week: 'Week 3', workoutMinutes: 150 },
    { week: 'Week 2', workoutMinutes: 120 },
    // Add more weekly progress data as needed
  ];

  const monthlyProgressData = [
    { month: 'September 2023', workoutCount: 20 },
    { month: 'August 2023', workoutCount: 18 },
    // Add more monthly progress data as needed
  ];

  const renderTabContent = () => {
    switch (selectedTab) {
      case 'daily':
        return (
          <View>
            {dailyProgressData.map((item, index) => (
              <Text key={index}>{item.date}: {item.workout}</Text>
            ))}
          </View>
        );
      case 'weekly':
        return (
          <View>
            <Text style={styles.sectionHeader}>Weekly Progress</Text>
            {weeklyProgressData.map((item, index) => (
              <Text key={index}>{item.week}: {item.workoutMinutes} minutes</Text>
            ))}
          </View>
        );
      case 'monthly':
        return (
          <View>
            <Text style={styles.sectionHeader}>Monthly Progress</Text>
            {monthlyProgressData.map((item, index) => (
              <Text key={index}>{item.month}: {item.workoutCount} workouts</Text>
            ))}
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Fitness Progress</Text>
      </View>

      <View style={styles.tabButtons}>
        <TouchableOpacity
          style={[styles.tabButton, selectedTab === 'daily' && styles.selectedTabButton]}
          onPress={() => setSelectedTab('daily')}
        >
          <Text>Daily</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabButton, selectedTab === 'weekly' && styles.selectedTabButton]}
          onPress={() => setSelectedTab('weekly')}
        >
          <Text>Weekly</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabButton, selectedTab === 'monthly' && styles.selectedTabButton]}
          onPress={() => setSelectedTab('monthly')}
        >
          <Text>Monthly</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.tabContent}>
        {renderTabContent()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  tabButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
  tabButton: {
    paddingVertical: 5,
  },
  selectedTabButton: {
    borderBottomWidth: 2,
    borderBottomColor: 'dodgerblue',
  },
  tabContent: {
    flex: 1,
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default ProgressScreen;
