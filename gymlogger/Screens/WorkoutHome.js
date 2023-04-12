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

import Cardio from "../assets/cardio.svg";
import Weights from "../assets/weights.svg";
import { useNavigation } from '@react-navigation/native';

const WorkoutHome = () => {
    const navigation = useNavigation();
    return (
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: "center",
          backgroundColor: "#fff",
          alignItems: "center", // set alignItems to center
          padding: 0,
          width:'100%'
        }}
      >
        <View>
          <View>
            <Text style={{ padding: 10, fontSize: 20 }}>By Type</Text>
          </View>
          <ScrollView
            horizontal={true}
            style={{ flexDirection: "row", padding: 0 }}
          >
            <View style={{ padding: 10}}>
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
                <View style={{flexDirection:"column"}}>
                <Cardio
                  width={50}
                  height={50}
                  style={{
                    padding: 5,
                  }}
                />
  
                <Text style={{ fontWeight: "bold", fontSize: 15, color: "#fff", padding:5 }}>
                  Cardio
                </Text>
                </View>
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
                  Free Weights
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
                  Functional
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
                  Resistance
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
                  Mobility
                </Text>
              </TouchableOpacity>
            </View>
  
            
            
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  };
  export default WorkoutHome;