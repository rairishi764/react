import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import DropDownPicker from 'react-native-custom-dropdown';
import Slider from 'react-native-slider'; // Import Slider
import YoutubePlayer from 'react-native-youtube-iframe';

const CardDetailScreen = ({ route }) => {
  const { subCategory } = route.params;

  const [workoutData, setWorkoutData] = useState([]);
  const [selectedWorkout, setSelectedWorkout] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [time, setTime] = useState(30); // Initialize time with 30 minutes
  const [kilometers, setKilometers] = useState(5); // Initialize kilometers with 5 km
  const [weight, setWeight] = useState(0); // Initialize weight
  const [reps, setReps] = useState(0); // Initialize reps
  const [sets, setSets] = useState(0); // Initialize sets
  const [distance, setDistance] = useState(0); // Initialize distance for time-based workouts

  useEffect(() => {
    if (subCategory && subCategory.subworkouts) {
      setWorkoutData(
        subCategory.subworkouts.map((workout) => ({
          value: workout.id,
          label: workout.title,
          imageUrl: workout.imgUrl,
          videoId: workout.videoId,
          measure: workout.measure, // Assuming measure is a property of the workout
        }))
      );
    }
  }, [subCategory]);

  useEffect(() => {
    // Reset the values of weight, reps, sets, and distance when the selected workout changes
    setWeight(0);
    setReps(0);
    setSets(0);
    setDistance(0);
  }, [selectedWorkout]);

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

      <Text className='p-5 text-black'>
        {selectedWorkout ? selectedWorkout.label : 'Select a workout'}
      </Text>

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

      {/* Conditionally render sliders based on the selected workout's measure */}
      {selectedWorkout && selectedWorkout.measure === 'time' && (
        <View>
          {/* Slider for setting time */}
          <Text>Set Time (minutes): {time} mins</Text>
          <Slider
            value={time}
            onValueChange={(value) => setTime(value)}
            minimumValue={1}
            maximumValue={300}
            step={1}
            minimumTrackTintColor="#00CCBB" // Change the color of the slider track
            thumbTintColor="#00CCBB" // Change the color of the slider thumb
            style={{ marginTop: 10 }} // Add custom styles to the slider track
            thumbStyle={{ borderWidth: 2, borderColor: '#00CCBB' }} // Add custom styles to the slider thumb
          />

          {/* Slider for setting distance */}
          <Text>Set Distance (km): {distance} km</Text>
          <Slider
            value={distance}
            onValueChange={(value) => setDistance(value)}
            minimumValue={0}
            maximumValue={30}
            step={0.1}
            minimumTrackTintColor="#00CCBB" // Change the color of the slider track
            thumbTintColor="#00CCBB" // Change the color of the slider thumb
            style={{ marginTop: 10 }} // Add custom styles to the slider track
            thumbStyle={{ borderWidth: 2, borderColor: '#00CCBB' }} // Add custom styles to the slider thumb
          />
        </View>
      )}

      {selectedWorkout && selectedWorkout.measure === 'weight' && (
        <View>
          {/* Slider for setting weight */}
          <Text>Set Weight (kg): {weight} kg</Text>
          <Slider
            value={weight}
            onValueChange={(value) => setWeight(value)}
            minimumValue={0}
            maximumValue={100}
            step={0.5}
            minimumTrackTintColor="#00CCBB" // Change the color of the slider track
            thumbTintColor="#00CCBB" // Change the color of the slider thumb
            style={{ marginTop: 10 }} // Add custom styles to the slider track
            thumbStyle={{ borderWidth: 2, borderColor: '#00CCBB' }} // Add custom styles to the slider thumb
          />

          {/* Slider for setting reps */}
          <Text>Set Reps: {reps}</Text>
          <Slider
            value={reps}
            onValueChange={(value) => setReps(value)}
            minimumValue={0}
            maximumValue={20}
            step={1}
            minimumTrackTintColor="#00CCBB" // Change the color of the slider track
            thumbTintColor="#00CCBB" // Change the color of the slider thumb
            style={{ marginTop: 10 }} // Add custom styles to the slider track
            thumbStyle={{ borderWidth: 2, borderColor: '#00CCBB' }} // Add custom styles to the slider thumb
          />

          {/* Slider for setting sets */}
          <Text>Set Sets: {sets}</Text>
          <Slider
            value={sets}
            onValueChange={(value) => setSets(value)}
            minimumValue={0}
            maximumValue={10}
            step={1}
            minimumTrackTintColor="#00CCBB" // Change the color of the slider track
            thumbTintColor="#00CCBB" // Change the color of the slider thumb
            style={{ marginTop: 10 }} // Add custom styles to the slider track
            thumbStyle={{ borderWidth: 2, borderColor: '#00CCBB' }} // Add custom styles to the slider thumb
          />
        </View>
      )}
    </View>
  );
};

export default CardDetailScreen;
