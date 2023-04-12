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

import SambaShoe from "./assets/SambaShoe.svg";
import Cardio from "./assets/cardio.svg";
import Weights from "./assets/weights.svg";
import CardioLogger from "./Screens/CardioScreen";
import WeightliftingLogger from "./Screens/WeightsScreen";
import WorkoutHome from './Screens/WorkoutHome';
import LoginScreen from "./Screens/LoginScreen";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen component={Home} name="Home" />
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
  <WeightliftingLogger></WeightliftingLogger>;
};

export default App;
