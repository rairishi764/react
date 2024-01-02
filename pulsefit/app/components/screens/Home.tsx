import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CardioLogger from "./CardioScreen";
import WeightliftingLogger from "./WeightsScreen";
const Home: React.FC = () => {
    const navigation = useNavigation();

  const navigateToWeightScreen = () => {
    navigation.navigate("WeightliftingLogger"); // Assuming "WeightScreen" is the name of your weightlifting screen
  };

  const navigateToCardioScreen = () => {
    navigation.navigate(CardioLogger); // Assuming "CardioScreen" is the name of your cardio screen
  };

 return (
    <View style={styles.container}>
      <Text style={styles.title}>Workout Logger</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={navigateToWeightScreen}
      >
        <Text style={styles.buttonText}>Log Weightlifting Exercise</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={navigateToCardioScreen}
      >
        <Text style={styles.buttonText}>Log Cardio Exercise</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 24,
  },
  button: {
    backgroundColor: "#6a2194",
    padding: 16,
    borderRadius: 8,
    marginVertical: 12,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Home;