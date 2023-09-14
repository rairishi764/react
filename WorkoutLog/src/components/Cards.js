import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { StarIcon, MapPinIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';

const Cards = ({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  // Add other props if needed
}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        // Navigate to card detail screen with the provided data
        navigation.navigate('CardDetail', {
          id,
          imgUrl,
          title,
          rating,
          genre,
          address,
          // Add other props if needed
        });
      }}
      style={{ backgroundColor: 'white', marginRight: 10, shadowColor: 'black', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.2, shadowRadius: 2 }}>
      <Image source={{ uri: imgUrl }} style={{ height: 120, width: 200, borderRadius: 5 }} />
      <View style={{ paddingHorizontal: 10, paddingBottom: 10 }}>
        <Text style={{ fontWeight: 'bold', fontSize: 16, paddingTop: 10 }}>{title}</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 5 }}>
          {/*<StarIcon color="green" opacity={0.5} size={22} />
          <Text style={{ fontSize: 12, color: 'gray' }}>
            <Text style={{ color: 'green' }}>{rating}</Text> . {genre}
    </Text> */}
        </View>
        {/*<View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 5 }}>
          <MapPinIcon color="gray" opacity={0.4} size={22} />
          <Text style={{ fontSize: 12, color: 'gray' }}>Nearby . {address}</Text>
  </View> */}
      </View>
    </TouchableOpacity>
  );
};

export default Cards;
