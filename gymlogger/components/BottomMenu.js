import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Cardio from "../assets/cardio.svg";
import Weights from "../assets/weights.svg";
import WorkoutHome from "../Screens/WorkoutHome";
import ProgressScreen from "../Screens/ProgressScreen";
import ProfileScreen from "../Screens/ProfileScreen";
import CardioScreen from "../Screens/CardioScreen";
import ExerciseDetailScreen from "../Screens/ExerciseDetailScreen";
const Tab = createMaterialBottomTabNavigator();

const BottomMenu = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Explore"
        component={WorkoutHome}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Workouts"
        component={ExerciseDetailScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Cardio fill={color} width={26} height={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Progress"
        component={ProgressScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Weights fill={color} width={26} height={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="account-box" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomMenu;
