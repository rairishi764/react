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

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen component={Home} name="Home" />
        <Stack.Screen
          component={Main}
          name="Main"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          component={CardioScreen}
          name="CardioScreen"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          component={WeightsScreen}
          name="WeightsScreen"
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Home = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#fff",
        alignItems: "center", // set alignItems to center
        padding: 20,
      }}
    >
      <View>
        <View>
          <Text style={{ padding: 10, fontSize: 20 }}>By Type</Text>
        </View>
        <ScrollView
          horizontal={true}
          style={{ flexDirection: "row", width: "100%", padding: 0 }}
        >
          <View style={{ padding: 10 }}>
            <TouchableOpacity
              onPress={() => navigation.navigate("CardioScreen")}
              style={{
                backgroundColor: "#3EB489",
                padding: 20,
                width: 110,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Cardio
                width={30}
                height={30}
                style={{
                  padding: 10,
                }}
              />

              <Text style={{ fontWeight: "bold", fontSize: 10, color: "#fff" }}>
                Cardio
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{ padding: 10 }}>
            <TouchableOpacity
              onPress={() => navigation.navigate("WeightsScreen")}
              style={{
                backgroundColor: "#3EB489",
                padding: 20,
                width: 110,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Weights
                width={30}
                height={30}
                style={{
                  padding: 10,
                }}
              />

              <Text style={{ fontWeight: "bold", fontSize: 10, color: "#fff" }}>
                Weights
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
const Main = ({ navigation }) => {
  return (
    // makes tags appear in right screen view
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#fff",
        alignItems: "center", // set alignItems to center
        padding: 20,
      }}
    >
      <View>
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            color: "#3EB489",
            padding: 10,
          }}
        >
          Gym Logger
        </Text>
      </View>

      <View>
        <SambaShoe
          width={240}
          height={340}
          style={{
            padding: 50,
          }}
        />
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate("Home")}
        style={{
          backgroundColor: "#3EB489",
          padding: 20,
          width: "90%",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 18, color: "#fff" }}>
          Get Logging
        </Text>
        <MaterialIcons name="arrow-forward-ios" size={22} color="#fff" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const CardioScreen = ({ navigation }) => {
  return <CardioLogger></CardioLogger>;
};

const WeightsScreen = ({ navigation }) => {
  <WeightliftingLogger></WeightliftingLogger>;
};

export default App;
