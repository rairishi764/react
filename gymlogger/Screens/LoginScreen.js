import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import SambaShoe from "../assets/SambaShoe.svg";
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
    const navigation = useNavigation();
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

  export default LoginScreen;
  