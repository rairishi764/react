import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { StarIcon, MapPinIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';

const Card = ({
  id,
  imgUrl,
  title,
  category,
  description,
  exercises
}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('WorkoutDetail', {
          id,
          imgUrl,
          title,
          category,
          description,
          exercises
        });
      }}
      style={{ backgroundColor: 'white', marginRight: 10, shadowColor: 'black', shadowOpacity: 0.2, shadowRadius: 5, elevation: 5 }}
    >
      <Image
        source={{ uri: imgUrl }} // Update this to your image source logic
        style={{ height: 100, width: 200, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
      />
      <View style={{ padding: 10 }}>
        <Text style={{ fontWeight: 'bold', fontSize: 16, paddingTop: 5 }}>{title}</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5 }}>
          <StarIcon color="green" opacity={0.5} size={22} />
          <Text style={{ fontSize: 12, color: 'gray' }}>{category}</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <MapPinIcon color="gray" opacity={0.4} size={22} />
          <Text style={{ fontSize: 12, color: 'gray' }}>Nearby </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
