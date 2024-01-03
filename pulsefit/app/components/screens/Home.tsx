// Home.tsx
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CardioLogger from "./CardioScreen";
import WeightliftingLogger from "./WeightsScreen";
import FeaturedRow from "../FeaturedRow";
import Categories from "../Categories";

const Home: React.FC = () => {
  const navigation = useNavigation();

  // Sample data for FeaturedRow
  const featuredRowData = {
    id: 1,
    title: "Featured Workouts",
    description: "Check out these popular workouts!",
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <FeaturedRow {...featuredRowData} />
      <Categories/>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 24,
    textAlign: "center",
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
