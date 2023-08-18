import { Text, View, SafeAreaView, Image, TextInput, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import {useNavigation} from "@react-navigation/native"
import {
  UserIcon,
  ChevronDownIcon,
  ShoppingBagIcon,
  AdjustmentsHorizontalIcon,
  MagnifyingGlassIcon
} from "react-native-heroicons/outline"
import Categories from '../components/Categories'
import FeaturedRow from '../components/FeaturedRow'
const HomeScreen =() => {
 const navigation = useNavigation();
 {/* for scree header * */}
 useLayoutEffect(() => {
   navigation.setOptions({
    headerShown: false,
   });
},[]);

 return (
      <SafeAreaView className="bg-white pt-5">
        {/* Header */}
        <View className ="flex-row pb-3 items-center mx-4 space-x-2 px-4">
            <Image
                source={{
                    uri : "https://links.papareact.com/wru"
                }}
                className='h-7 w-7 bg-gray-300 p-4 rounded-full'
            />
            <View className="flex-1">
            <Text className = "font-bold text-gray-400 text-xs">Deliver Now!</Text>
            <Text className = "font-bold text-xl">Current Location
            <ChevronDownIcon size={20} color="#00CCBB" />
            </Text>
            </View>
            <UserIcon size={35} color="#00CCBB" />
        </View>

{/* Search */}
<View className="flex-row item-center space-x-2 pb-2 mx-4 px-1">
  <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
  <MagnifyingGlassIcon size={20} color="gray" />
   <TextInput placeholder="Restaurants and cuisines" keyboardType="default"></TextInput> 
  </View>
  <AdjustmentsHorizontalIcon size={35} color="#00CCBB"></AdjustmentsHorizontalIcon>
</View>

{/* Body * */}
<ScrollView
  className="bg-gray-100"
  contentContainerStyle={{paddingBottom:100}}>
{/** Categories */}
    <Categories/>

  {/** Featured */}    
    <FeaturedRow
    id = '3'
    title = "Featured"
    description = "Paid placement from partners"
    featuredCategory="featured"/>
  
  {/** Tasty Discount */}    
  <FeaturedRow
    id = '1'
    title = "Tasty Discount"
    description = "Enjoy discounts"
    featuredCategory="featured"/>

    {/** Offers near you! */}    
    <FeaturedRow
    id = '2'
    title = "Offers near you!"
    description = "Enjoy offers near you"
    featuredCategory="featured"/>

</ScrollView>

      </SafeAreaView>
    )
}

export default HomeScreen