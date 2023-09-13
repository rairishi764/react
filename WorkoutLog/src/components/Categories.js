import React from 'react';
import { View, ScrollView } from 'react-native'; // Import ScrollView to allow scrolling if needed
import CategoryCard from './CategoryCard'; // Import the CategoryCard component

const Categories = () => {
  // Define an array of workout categories
  const categories = [
    { id : 1,
      title: 'Cardiovascular',
      imgUrl: 'https://images.unsplash.com/photo-1526045612212-70caf35c14df',
    },
    {   id : 2,
        title: 'Strength Training',
        imgUrl: 'https://images.unsplash.com/photo-1526045612212-70caf35c14df',
      },{
        id : 3,
        title: 'Flexibility and Mobility',
        imgUrl: 'https://images.unsplash.com/photo-1526045612212-70caf35c14df',
      },{
        id : 4,
        title: 'High-Intensity Interval Training',
        imgUrl: 'https://images.unsplash.com/photo-1526045612212-70caf35c14df',
      },{
        id : 5,
        title: 'Functional Fitness',
        imgUrl: 'https://images.unsplash.com/photo-1526045612212-70caf35c14df',
      },{
        id : 6,
        title: 'Outdoor Activities',
        imgUrl: 'https://images.unsplash.com/photo-1526045612212-70caf35c14df',
      },
    // Add more categories as needed
  ];

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
            key={index} // Use a unique key for each CategoryCard
            title={category.title}
            imgUrl={category.imgUrl}
            id = {category.id}
          />
        ))}
      
      
    </ScrollView>

  );
};

export default Categories;
