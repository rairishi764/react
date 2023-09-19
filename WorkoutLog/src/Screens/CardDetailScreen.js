import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import DropDownPicker from 'react-native-custom-dropdown';
import Slider from 'react-native-slider'; // Import Slider
import YoutubePlayer from 'react-native-youtube-iframe';

const CardDetailScreen = ({ route }) => {
  const { subCategory } = route.params;
  const [workoutData, setWorkoutData] = useState([]);
  const [selectedWorkout, setSelectedWorkout] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [time, setTime] = useState(30); // Initialize time with 30 minutes
  const [distance, setDistance] = useState(5); // Initialize kilometers with 5 km
  const [weight, setWeight] = useState(0); // Initialize weight
  const [reps, setReps] = useState(0); // Initialize reps
  const [sets, setSets] = useState(0); // Initialize sets
  const [weights, setWeights] = useState([]); // Initialize weights array for each set
  
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
    setReps([]);
    setSets(0);
    setWeights([]);
  }, [selectedWorkout]);

  return (
    <ScrollView>
    <View className='flex-1 p-4 m-2 shadow-lg bg-white rounded-lg mb-11'>
      
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

        <Text>Set Distance: {distance} miles</Text>
          <Slider
            value={distance}
            onValueChange={(value) => setDistance(value)}
            minimumValue={1}
            maximumValue={300}
            step={1}
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

          {/* Slider for setting sets */}
          <Text>Set Sets: {sets}</Text>
          <Slider
            value={sets}
            onValueChange={(value) => {
              setSets(value);
              // Initialize reps and weights arrays with the same length as sets
              setReps(new Array(Math.floor(value)).fill(0));
              setWeights(new Array(Math.floor(value)).fill(0));
            }}
            minimumValue={0}
            maximumValue={10}
            step={1}
            minimumTrackTintColor="#00CCBB" // Change the color of the slider track
            thumbTintColor="#00CCBB" // Change the color of the slider thumb
            style={{ marginTop: 10 }} // Add custom styles to the slider track
            thumbStyle={{ borderWidth: 2, borderColor: '#00CCBB' }} // Add custom styles to the slider thumb
          />

          {/* Generate dynamic sliders for reps and weights based on sets */}
          {Array.from({ length: sets }, (_, index) => (
            <View key={index}>
              {/* Slider for setting reps */}
              <Text>Set Reps (Set {index + 1}): {reps[index]}</Text>
              <Slider
                value={reps[index]}
                onValueChange={(value) => {
                  setReps((prevReps) => {
                    const newReps = [...prevReps];
                    newReps[index] = value;
                    return newReps;
                  });
                }}
                minimumValue={0}
                maximumValue={20}
                step={1}
                minimumTrackTintColor="#00CCBB" // Change the color of the slider track
                thumbTintColor="#00CCBB" // Change the color of the slider thumb
                style={{ marginTop: 10 }} // Add custom styles to the slider track
                thumbStyle={{ borderWidth: 2, borderColor: '#00CCBB' }} // Add custom styles to the slider thumb
              />

              {/* Slider for setting weights */}
              <Text>Set Weight (Set {index + 1}): {weights[index]} kg</Text>
              <Slider
                value={weights[index]}
                onValueChange={(value) => {
                  setWeights((prevWeights) => {
                    const newWeights = [...prevWeights];
                    newWeights[index] = value;
                    return newWeights;
                  });
                }}
                minimumValue={0}
                maximumValue={100}
                step={0.5}
                minimumTrackTintColor="#00CCBB" // Change the color of the slider track
                thumbTintColor="#00CCBB" // Change the color of the slider thumb
                style={{ marginTop: 10 }} // Add custom styles to the slider track
                thumbStyle={{ borderWidth: 2, borderColor: '#00CCBB' }} // Add custom styles to the slider thumb
              />
            </View>
          ))}
        </View>
      )}
      
    </View>
    </ScrollView>
  );
};

export default CardDetailScreen;
