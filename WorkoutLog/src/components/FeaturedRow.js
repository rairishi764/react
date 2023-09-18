import React, { useState } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import Cards from './Cards';

const FeaturedRow = ({ category }) => {
  const [subcategories, setSubcategories] = useState(category.subcategories);

  return (
    <View>
      <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10 }}>
        <Text style={{ fontWeight: 'bold', fontSize: 18, color:'#528265' }}>{category.title}</Text>
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
        {subcategories.map((subCategory) => (
          <Cards
            subCategory={subCategory}
            key= {subCategory.id}
            // Add other props if needed
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
