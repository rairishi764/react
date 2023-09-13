import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CategoryCard = ({
  imgUrl,
  title,
  description,
  navigationRoute, // This should be the route to navigate to for category details
}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
    className="p-1">
        <Image
         source = {{
            uri:imgUrl
         }}
         className="h-20 w-36 rounded-s p-4"/>
      <Text className='absolute bottom-1 left-1 text-white font-bold'>{title}</Text>
    </TouchableOpacity>
  )
}

export default CategoryCard