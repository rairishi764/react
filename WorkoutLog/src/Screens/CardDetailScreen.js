import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';


const CardDetailScreen = ({ route }) => {
  const { subCategory } = route.params;
  //const [workout, setWorkout] = useState(subCategory.subworkouts);


  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text>{subCategory.subworkouts[0].title}</Text>
    </View>
  );
};

export default CardDetailScreen;
