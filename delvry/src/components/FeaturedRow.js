import { View, Text,ScrollView, Image } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import Cards from './Cards'
import {
    ArrowRightIcon
  } from "react-native-heroicons/outline"
import ClientSanity from '../../ClientSanity'
const FeaturedRow = ({id, title, description}) => {
const [restaurants,setRestaurants] = useState([])

  useEffect(()=> {
    ClientSanity.fetch(
      `*[_type=="featured" && _id==$id]{
        ...,
        restaurants[]->{
          ...,
          dishes[]->,
          type->{
            name
          }
        },
      }[0]`,{id}
    ).then((data)=>{
      setRestaurants(data?.restaurants);
    });
  },[id]);
//console.log(restaurants)
  return (
    <View>
        <View className="mt-4 flex-row items-center justify-between px-4">
      <Text className='font-bold text-lg'>{title}</Text>
      <ArrowRightIcon color="#00CCBB"></ArrowRightIcon>
      </View>
      <Text className="text-xs text-gray-500 px-4">{description}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal:15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4">

{/**RestaurantCards.... */}
        {restaurants?.map((restaurant)=>(
          <Cards
          key={restaurant._id}
          id = {restaurant._d}
          imgUrl = {restaurant.image}
          title={restaurant.name}
          rating= {restaurant.rating}
          genre={restaurant.type?.name}
          address={restaurant.address}
          short_description={restaurant.short_description}
          long={restaurant.long}
          lat={restaurant.lat}/>

        ))}
        
      </ScrollView>
    </View>
  )
}

export default FeaturedRow