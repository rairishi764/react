import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // You can use any icon library you prefer

const ProgressScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Fitness Progress</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Today</Text>
          {/* Add workout summary and stats for today */}
          <TouchableOpacity style={styles.activityItem}>
            <FontAwesome name="running" size={24} color="dodgerblue" />
            <View style={styles.activityDetails}>
              <Text style={styles.activityName}>Cardio</Text>
              <Text style={styles.activityDuration}>30 mins</Text>
            </View>
          </TouchableOpacity>
          {/* Add more activity items for today */}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionHeader}>This Week</Text>
          {/* Add weekly workout summary and stats */}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionHeader}>This Month</Text>
          {/* Add monthly workout summary and stats */}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollContainer: {
    paddingHorizontal: 16,
    paddingBottom: 20,
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
  section: {
    marginVertical: 20,
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  activityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  activityDetails: {
    marginLeft: 12,
  },
  activityName: {
    fontSize: 18,
  },
  activityDuration: {
    color: 'gray',
  },
});

export default ProgressScreen;
