import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import CategoryCard from './CategoryCard';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  // Assuming you have a hardcoded array of workout categories
  const hardcodedCategories = [
    {
      _id: 1,
      name: 'Strength Training',
      image: '../assets/run.jpg',
    },
    {
      _id: 2,
      name: 'Cardio',
      image: 'https://picsum.photos/200/300',
    },
    // Add more categories as needed
  ];

  useEffect(() => {
    // You can replace the following line with your API call or data fetching logic
    setCategories(hardcodedCategories);
  }, []);

  return (
    <ScrollView 
    contentContainerStyle={{
        paddingHorizontal:15,
        paddingTop:10
    }}
    horizontal
    showsHorizontalScrollIndicator = {false}>
      

      {categories.map((category) => (
          <CategoryCard imgUrl={category.image} 
          className = "p-8"
          key={category._id}  
          title={category.name}/>
      ))}
      
      
    </ScrollView>
  )
}

export default Categories