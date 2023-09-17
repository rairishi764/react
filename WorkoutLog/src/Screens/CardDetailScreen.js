import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import DropDownPicker from 'react-native-custom-dropdown';
import Slider from 'react-native-slider'; // Import Slider
import { Video } from "expo-av";
import YoutubePlayer from 'react-native-youtube-iframe';

const CardDetailScreen = ({ route }) => {
  const { subCategory } = route.params;

  const [workoutData, setWorkoutData] = useState([]);
  const [selectedWorkout, setSelectedWorkout] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [time, setTime] = useState(30); // Initialize time with 30 minutes
  const [kilometers, setKilometers] = useState(5); // Initialize kilometers with 5 km

  useEffect(() => {
    if (subCategory && subCategory.subworkouts) {
      setWorkoutData(
        subCategory.subworkouts.map((workout) => ({
          value: workout.id,
          label: workout.title,
          imageUrl: workout.imgUrl,
          videoId: workout.videoId,
        }))
      );
    }
  }, [subCategory]);

  return (
    <View className='flex-1 p-4'>
      {selectedWorkout && (
        <View>
          {/* Display the selected workout image */}
          <View>
            <YoutubePlayer
              height={220}
              play={false}
              videoId={selectedWorkout.videoId}
            />
          </View>
        </View>
      )}

      <Text className='p-5 text-black'>{selectedWorkout ? selectedWorkout.label : 'Select a workout'}</Text>

      {workoutData.length > 0 && (
        <DropDownPicker
          className='p-4'
          items={workoutData}
          defaultValue={selectedWorkout ? selectedWorkout.value : null}
          searchable={true}
          searchablePlaceholder="Search for a workout"
          searchablePlaceholderTextColor="gray"
          searchableError={() => <Text>Workout not found</Text>}
          placeholder='Select a workout'
          containerStyle={{ borderColor: 'gray', borderWidth: 1, marginBottom: 8 }}
          textStyle={{ color: 'black' }}
          placeholderTextColor={'gray'}
          arrowColor={'black'}
          onChangeItem={(item) => setSelectedWorkout(item)}
        />
      )}

      {/* Slider for setting time */}
      <Text>Set Time (minutes): {time} mins</Text>
      <Slider
        value={time}
        onValueChange={(value) => setTime(value)}
        minimumValue={1}
        maximumValue={60}
        step={1}
      />

      {/* Slider for setting kilometers */}
      <Text>Set Kilometers: {kilometers} km</Text>
      <Slider
        value={kilometers}
        onValueChange={(value) => setKilometers(value)}
        minimumValue={1}
        maximumValue={10}
        step={0.5}
      />
    </View>
  );
};

export default CardDetailScreen;
