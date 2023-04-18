import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CardioLogger from "./Screens/CardioScreen";
import WeightliftingLogger from "./Screens/WeightsScreen";
import WorkoutHome from './Screens/WorkoutHome';
import LoginScreen from "./Screens/LoginScreen";
import ProgressScreen from './Screens/ProgressScreen'
import BottomMenu from './components/BottomMenu'
import ExerciseDetailScreen from "./Screens/ExerciseDetailScreen";
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen component={BottomMenu} name="Home" />
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

<Stack.Screen
          component={ProgressScreen}
          name="ProgressScreen"
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


const Login = () => {
  return (
    <LoginScreen></LoginScreen>
  );
};


const CardioScreen = () => {
  return <CardioLogger></CardioLogger>;
};

const WeightsScreen = () => {
  return <WeightliftingLogger></WeightliftingLogger>;
};

export default App;
