import {Text,View,SafeAreaView,Image,TextInput,ScrollView,TouchableOpacity,} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import ProgressCircle from "react-native-progress-circle";
import {UserIcon,ChevronDownIcon,AdjustmentsHorizontalIcon,MagnifyingGlassIcon,} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";

// Dummy data for circular progress
const dailyTargetCalories = 1000; // Replace with your actual daily target
const caloriesBurnt = 250; // Replace with your actual data
const dailyTargetMinutes = 60; // Replace with your actual daily target
const minutesExercised = 45; // Replace with your actual data

// Calculate progress percentages
const caloriesProgress = caloriesBurnt / dailyTargetCalories;
const minutesProgress = minutesExercised / dailyTargetMinutes;

const categories = require("../../assets/appconfig.json");

const HomeScreen = () => {
  const navigation = useNavigation();
  {
    /* for scree header * */
  }
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white pt-5">
      {/* Header */}
      <TouchableOpacity
        onPress={() => {
          // Navigate to card detail screen with the provided data
          navigation.navigate("Profile");
        }}
      >
        <View className="flex-row pb-3 items-center mx-4 space-x-2 px-4">
          <Image
            source={{
              uri: "https://links.papareact.com/wru",
            }}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          />
          <View className="flex-1">
            <Text className="font-bold text-gray-400 text-xs">
              Welcome back!
            </Text>
            <Text className="font-bold text-lg">
              Rishi
              <ChevronDownIcon size={20} color="#528265" />
            </Text>
          </View>
          <UserIcon size={35} color="#528265" />
        </View>
      </TouchableOpacity>

      {/* Search */}
      <View className="flex-row item-center space-x-2 pb-2 mx-4 px-1">
        <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
          <MagnifyingGlassIcon size={20} color="gray" />
          <TextInput placeholder="Workouts" keyboardType="default"></TextInput>
        </View>
        <AdjustmentsHorizontalIcon
          size={35}
          color="#528265"
        ></AdjustmentsHorizontalIcon>
      </View>

      <View>
        {/*<Categories></Categories>*/}
        <TouchableOpacity
          onPress={() => {
            // Navigate to card detail screen with the provided data
            navigation.navigate("ProgressScreen");
          }}
        >
          <View
            className="border-spacing-3 p-4 bg-slate-50"
            style={{
              margin: 15,
              shadowColor: "black",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.2,
              shadowRadius: 2,
            }}
          >
            <ProgressCircle
              percent={30}
              radius={40}
              borderWidth={8}
              color="#528265"
              shadowColor="#999"
              bgColor="#fff"
            >
              <Text style={{ fontSize: 15 }}>{"30%"}</Text>
            </ProgressCircle>
          </View>
        </TouchableOpacity>
      </View>

      <ScrollView className="" contentContainerStyle={{ paddingBottom: 250 }}>
        {/* Display Featured Categories */}
        {categories.map((category) => (
          <FeaturedRow key={category.id} category={category} />
        ))}

        {/* Other content */}
        {/* ... */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
