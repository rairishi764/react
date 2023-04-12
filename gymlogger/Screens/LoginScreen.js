import React from "react";
import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import SambaShoe from "../assets/SambaShoe.svg";
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();

  const styles = {
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#fff",
      padding: 20,
    },
    title: {
      fontSize: 30,
      fontWeight: "bold",
      color: "#3EB489",
      padding: 10,
    },
    imageContainer: {
      padding: 50,
    },
    button: {
      backgroundColor: "#3EB489",
      padding: 20,
      width: "90%",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    buttonText: {
      fontWeight: "bold",
      fontSize: 18,
      color: "#fff",
    },
    buttonIcon: {
      marginLeft: 5,
    },
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>Gym Logger</Text>
      </View>

      <View style={styles.imageContainer}>
        <SambaShoe width={240} height={340} />
      </View>

      <TouchableOpacity onPress={() => navigation.navigate("Home")} style={styles.button}>
        <Text style={styles.buttonText}>Get Logging</Text>
        <MaterialIcons name="arrow-forward-ios" size={22} color="#fff" style={styles.buttonIcon} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default LoginScreen;
