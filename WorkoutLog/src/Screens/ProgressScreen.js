import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // You can use any icon library you prefer

const ProgressScreen = () => {
  const [selectedTab, setSelectedTab] = useState('weekly');

  // Sample daily, weekly, and monthly progress data
  const dailyProgressData = [
    { date: '2023-09-18', workout: 'Cardio' },
    { date: '2023-09-17', workout: 'Strength Training' },
    // Add more daily progress data as needed
  ];

  const weeklyProgressData = [
    {
      week: 'Week 3',
      startDate: '2023-09-18',
      endDate: '2023-09-24',
      workouts: [
        { date: '2023-09-18', day: 'Monday', workout: 'Cardio' },
        { date: '2023-09-19', day: 'Tuesday', workout: 'Strength Training' },
        // Add more workout details for the week
      ],
    },
    {
      week: 'Week 2',
      startDate: '2023-09-11',
      endDate: '2023-09-17',
      workouts: [
        { date: '2023-09-11', day: 'Monday', workout: 'Cardio' },
        { date: '2023-09-12', day: 'Tuesday', workout: 'Strength Training' },
        // Add more workout details for the week
      ],
    },
    // Add more weekly progress data as needed
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
          <ScrollView>
            {weeklyProgressData.map((weekData, index) => (
              <View key={index} className="mb-4 border-b border-gray-200">
                <Text className="text-2xl font-bold mb-2">{weekData.week}</Text>
                {weekData.workouts.map((workout, workoutIndex) => (
                  <View key={workoutIndex} className="flex-row justify-between items-center mb-2">
                    <Text className="text-base">{workout.date}</Text>
                    <Text className="text-base">{workout.day}</Text>
                    <Text className="text-base flex-1 text-right">{workout.workout}</Text>
                  </View>
                ))}
              </View>
            ))}
          </ScrollView>
        );
      case 'monthly':
        return (
          <View>
            {/* Monthly progress data rendering */}
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <View className="flex-1 bg-white">
      <View className="flex-row justify-around py-2">
        <TouchableOpacity
          className={`py-2 px-4 ${selectedTab === 'daily' ? 'border-b-2 border-blue-500' : ''}`}
          onPress={() => setSelectedTab('daily')}
        >
          <Text className="text-base font-semibold">Daily</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className={`py-2 px-4 ${selectedTab === 'weekly' ? 'border-b-2 border-blue-500' : ''}`}
          onPress={() => setSelectedTab('weekly')}
        >
          <Text className="text-base font-semibold">Weekly</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className={`py-2 px-4 ${selectedTab === 'monthly' ? 'border-b-2 border-blue-500' : ''}`}
          onPress={() => setSelectedTab('monthly')}
        >
          <Text className="text-base font-semibold">Monthly</Text>
        </TouchableOpacity>
      </View>

      <View className="p-4">
        {renderTabContent()}
      </View>
    </View>
  );
};

export default ProgressScreen;
