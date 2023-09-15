import React, { useState } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import Cards from './Cards';

const FeaturedRow = ({ category }) => {
  const [workoutTypes, setWorkoutTypes] = useState(category.subcategories);

  return (
    <View>
      <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10 }}>
        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{category.title}</Text>
        {/* Your arrow icon */}
      </View>
      <Text style={{ fontSize: 12, color: 'gray', paddingHorizontal: 10 }}>{category.description}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        style={{ paddingTop: 10 }}>
        {workoutTypes.map((workoutType) => (
          <Cards
            key={workoutType.id}
            id={workoutType.id}
            imgUrl={workoutType.imgUrl}
            title={workoutType.title}
            // Add other props if needed
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
