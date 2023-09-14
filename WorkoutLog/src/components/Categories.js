import React from 'react';
import { View, ScrollView } from 'react-native'; // Import ScrollView to allow scrolling if needed
import CategoryCard from './CategoryCard'; // Import the CategoryCard component

const Categories = () => {
  // Define an array of workout categories
  const categories = require('../../assets/appconfig.json');

  return (

    <ScrollView 
    contentContainerStyle={{
        paddingHorizontal:15,
        paddingTop:10
    }}
    horizontal
    showsHorizontalScrollIndicator = {false}>
      

      {/* Map through the categories and render a CategoryCard for each */}
      {categories.map((category, index) => (
          <CategoryCard
            key = {category.id}
            title={category.title}
            imgUrl={category.imgUrl}
          />
        ))}
      
      
    </ScrollView>

  );
};

export default Categories;
