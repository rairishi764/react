import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const CardDetailScreen = ({ route }) => {
  const { workout } = route.params;
  const [sets, setSets] = useState(1);
  const [reps, setReps] = useState(10);

  const handleSave = () => {
    // Save the selected sets and reps to a database or use them as needed.
    console.log(`Workout: ${workout.title}, Sets: ${sets}, Reps: ${reps}`);
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>
        {workout.title}
      </Text>
      <View style={{ marginBottom: 16 }}>
        <Text style={{ fontSize: 18 }}>Sets:</Text>
        <TextInput
          style={{
            borderColor: 'gray',
            borderWidth: 1,
            padding: 8,
            fontSize: 16,
          }}
          keyboardType="numeric"
          value={sets.toString()}
          onChangeText={(text) => setSets(parseInt(text))}
        />
      </View>
      <View style={{ marginBottom: 16 }}>
        <Text style={{ fontSize: 18 }}>Reps:</Text>
        <TextInput
          style={{
            borderColor: 'gray',
            borderWidth: 1,
            padding: 8,
            fontSize: 16,
          }}
          keyboardType="numeric"
          value={reps.toString()}
          onChangeText={(text) => setReps(parseInt(text))}
        />
      </View>
      <Button title="Save" onPress={handleSave} />
    </View>
  );
};

export default CardDetailScreen;
