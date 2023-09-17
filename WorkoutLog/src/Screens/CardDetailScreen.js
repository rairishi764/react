import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import DropDownPicker from 'react-native-custom-dropdown';
import { Video } from "expo-av";
import YoutubePlayer from 'react-native-youtube-iframe';
const CardDetailScreen = ({ route }) => {
  const { subCategory } = route.params;

  const [workoutData, setWorkoutData] = useState([]);
  const [selectedWorkout, setSelectedWorkout] = useState(null); // Start with no selection
  const [isPlaying, setIsPlaying] = useState(false); // Define isPlaying state

  useEffect(() => {
    if (subCategory && subCategory.subworkouts) {
      setWorkoutData(
        subCategory.subworkouts.map((workout) => ({
          value: workout.id,
          label: workout.title,
          imageUrl: workout.imgUrl,
          videoId: workout.videoId
        }))
      );
    }
  }, [subCategory]);

  return (
    <View className='flex-1 p-0'>
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
    </View>
  );
};

export default CardDetailScreen;
