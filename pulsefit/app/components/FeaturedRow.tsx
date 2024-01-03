import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import WorkoutCard from './Cards';
import { ArrowRightIcon } from 'react-native-heroicons/outline';

const FeaturedRow = ({ id, title, description }) => {
  const [workouts, setWorkouts] = useState([]);

  // Placeholder data
  const sampleWorkouts = [
    {
      id: '1',
      imgUrl: "../assets/cardio.svg",
      
      title: 'Morning Run',
      rating: '4.5',
      category: 'Running',
      location: 'Central Park',
      description: 'A refreshing morning run in the park',
      exercises: ['Running', 'Stretching']
    },
    {
      id: '2',
      imgUrl: "../assets/workout.jpg",
      title: 'Morning Run',
      rating: '4.5',
      category: 'Running',
      location: 'Central Park',
      description: 'A refreshing morning run in the park',
      exercises: ['Running', 'Stretching']
    }
    // Add more workout objects as needed
  ];

  useEffect(() => {
    // Replace this with your data fetching logic
    // For now, using the placeholder data
    setWorkouts(sampleWorkouts);
  }, []);

  return (
    <View>
      <View style={{ marginTop: 16, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 16 }}>
        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{title}</Text>
        <ArrowRightIcon color="#00CCBB" size={20} />
      </View>
      <Text style={{ fontSize: 12, color: 'gray', paddingHorizontal: 16 }}>{description}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 16,
        }}
        showsHorizontalScrollIndicator={false}
        style={{ paddingTop: 16 }}
      >
        {/* Render Workout Cards */}
        {workouts.map((workout) => (
          <WorkoutCard
            key={workout.id}
            id={workout.id}
            imgUrl={workout.imgUrl}
            title={workout.title}
            category={workout.category}
            location={workout.location}
            description={workout.description}
            exercises={workout.exercises}
            />
        ))}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
