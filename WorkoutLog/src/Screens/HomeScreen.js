import { Text, View, SafeAreaView, Image, TextInput,ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import {useNavigation} from "@react-navigation/native"
import {
  UserIcon,
  ChevronDownIcon,
  AdjustmentsHorizontalIcon,
  MagnifyingGlassIcon
} from "react-native-heroicons/outline"
import Categories from '../components/Categories'
import FeaturedRow from '../components/FeaturedRow'
import { ProgressBar } from 'react-native-progress'// Import the ProgressBar component

// Dummy data for circular progress
const dailyTargetCalories = 1000; // Replace with your actual daily target
const caloriesBurnt = 250; // Replace with your actual data
const dailyTargetMinutes = 60; // Replace with your actual daily target
const minutesExercised = 45; // Replace with your actual data

// Calculate progress percentages
const caloriesProgress = caloriesBurnt / dailyTargetCalories;
const minutesProgress = minutesExercised / dailyTargetMinutes;


const categories = require('../../assets/appconfig.json');

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
               <Text className = "font-bold text-gray-400 text-xs">Welcome back!</Text>
               <Text className = "font-bold text-lg">Rishi
               <ChevronDownIcon size={20} color="#00CCBB" />
               </Text>
               </View>
               <UserIcon size={35} color="#00CCBB" />
           </View>
   
   {/* Search */}
   <View className="flex-row item-center space-x-2 pb-2 mx-4 px-1">
     <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
     <MagnifyingGlassIcon size={20} color="gray" />
      <TextInput placeholder="Workouts" keyboardType="default"></TextInput> 
     </View>
     <AdjustmentsHorizontalIcon size={35} color="#00CCBB"></AdjustmentsHorizontalIcon>
   </View>

  

   <View>
    {/*<Categories></Categories>*/}
   </View>

   <ScrollView>
        {/* Display Featured Categories */}
        {categories.map((category) => (
          <FeaturedRow key={category.id} category={category} />
        ))}

        {/* Other content */}
        {/* ... */}
      </ScrollView>

         </SafeAreaView>
       )
     }
   

export default HomeScreen