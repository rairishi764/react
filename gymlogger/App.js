import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import Cardio from "./assets/cardio.svg";
import Weights from "./assets/weights.svg";
import CardioLogger from "./Screens/CardioScreen";
import WeightliftingLogger from "./Screens/WeightsScreen";
import WorkoutHome from './Screens/WorkoutHome';
import LoginScreen from "./Screens/LoginScreen";

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen component={TabNavigator} name="Home" />
        <Stack.Screen
          component={Login}
          name="Login"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          component={CardioScreen}
          name="CardioScreen"
        />
        <Stack.Screen
          component={WeightsScreen}
          name="WeightsScreen"
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Home = ({ navigation }) => {
  return (
    <WorkoutHome></WorkoutHome>
  );
};

const Login = ({ navigation }) => {
  return (
    <LoginScreen></LoginScreen>
  );
};

const CardioScreen = ({ navigation }) => {
  return <CardioLogger></CardioLogger>;
};

const WeightsScreen = ({ navigation }) => {
  return <WeightliftingLogger></WeightliftingLogger>;
};

const HomeDetails = ({ navigation }) => {
  return (
    <View>
      <Text>Home Details</Text>
    </View>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Explore"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Create"
        component={CardioScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Cardio fill={color} width={26} height={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Progress"
        component={WeightsScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Weights fill={color} width={26} height={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={HomeDetails}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default App;
