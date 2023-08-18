import { View, Text,ScrollView, Image } from 'react-native'
import React from 'react'
import Cards from './Cards'
import {
    ArrowRightIcon
  } from "react-native-heroicons/outline"
const FeaturedRow = ({id, title, description}) => {
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
        <Cards
          id = {123}
          imgUrl = "https://links.papareact.com/gn7"
          title="Yo! Sushi"
          rating= {4.5}
          genre="Japanese"
          address="123 Main St"
          short_description="This is test description"
          dislikes={[]}
          long={20}
          lat={0}/>

      <Cards
          id = {123}
          imgUrl = "https://links.papareact.com/gn7"
          title="Yo! Sushi"
          rating= {4.5}
          genre="Japanese"
          address="123 Main St"
          short_description="This is test description"
          dislikes={[]}
          long={20}
          lat={0}/>

      <Cards
          id = {123}
          imgUrl = "https://links.papareact.com/gn7"
          title="Yo! Sushi"
          rating= {4.5}
          genre="Japanese"
          address="123 Main St"
          short_description="This is test description"
          dislikes={[]}
          long={20}
          lat={0}/>

      </ScrollView>
    </View>
  )
}

export default FeaturedRow