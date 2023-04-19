import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CardioLogger from "./Screens/CardioScreen";
import WeightliftingLogger from "./Screens/WeightsScreen";
import LoginScreen from "./Screens/LoginScreen";
import ProgressScreen from "./Screens/ProgressScreen";
import BottomMenu from "./components/BottomMenu";

const Drawer = createDrawerNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Login">
        <Drawer.Screen component={BottomMenu} name="Home" />
        <Drawer.Screen
          component={Login}
          name="Login"
          options={{ headerShown: false }}
        />
        <Drawer.Screen component={CardioScreen} name="CardioScreen" />
        <Drawer.Screen component={WeightsScreen} name="WeightsScreen" />

        <Drawer.Screen component={ProgressScreen} name="ProgressScreen" />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const Login = () => {
  return <LoginScreen></LoginScreen>;
};

const CardioScreen = () => {
  return <CardioLogger></CardioLogger>;
};

const WeightsScreen = () => {
  return <WeightliftingLogger></WeightliftingLogger>;
};

export default App;
