import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import CardioLogger from "./Screens/CardioScreen";
import WeightliftingLogger from "./Screens/WeightsScreen";
import LoginScreen from "./Screens/LoginScreen";
import ProgressScreen from "./Screens/ProgressScreen";
import ExerciseDetailScreen from "./Screens/ExerciseDetailScreen";
import BottomMenu from "./components/BottomMenu";

const Drawer = createDrawerNavigator();

const HomeScreenOptions = ({ navigation }) => ({
  title: "Home",
  headerLeft: () => (
    <TouchableOpacity onPress={() => navigation.openDrawer()}>
      <Ionicons name="ios-menu" size={28} color="black" style={{ marginLeft: 10 }} />
    </TouchableOpacity>
  ),
  headerRight: () => (
    <TouchableOpacity onPress={() => navigation.navigate("ExerciseDetail")}>
      <Ionicons name="ios-search" size={28} color="black" style={{ marginRight: 10 }} />
    </TouchableOpacity>
  ),
});

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Login">
        <Drawer.Screen
          component={BottomMenu}
          name="Home"
          options={HomeScreenOptions}
        />
        <Drawer.Screen
          component={LoginScreen}
          name="Login"
          options={{ headerShown: false }}
        />
      <Drawer.Screen
          component={CardioLogger}
          name="CardioScreen"
          options={{ title: "Cardio" }}
        />
        <Drawer.Screen
          component={WeightliftingLogger}
          name="WeightsScreen"
          options={{ title: "Weightlifting" }}
        />
      
        <Drawer.Screen
          component={ProgressScreen}
          name="ProgressScreen"
          options={{ title: "Progress" }}
        />
        <Drawer.Screen
          component={ExerciseDetailScreen}
          name="ExerciseDetail"
          options={{ title: "Exercise Detail" }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
