import React, { useState } from "react";
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
import CardioIcon from "../assets/cardio.svg";
import { useNavigation, useRoute } from '@react-navigation/native';


const WorkoutHome = () => {
  const navigation = useNavigation();

  const [selectedType, setSelectedType] = useState("");

  const styles = {
    container: {
      flex: 1,
      alignItems: "center",
      backgroundColor: "#fff",
      padding: 0,
      width: "100%",
    },
    header: {
      padding: 10,
      fontSize: 20,
      fontWeight: "bold",
    },
    itemContainer: {
      padding: 10,
    },
    itemButton: {
      backgroundColor: "#6f3570",
      padding: 20,
      width: 150,
      flexDirection: "row",
      justifyContent: "space-between",
    },
    itemIcon: {
      padding: 10,
    },
    itemText: {
      fontWeight: "bold",
      fontSize: 15,
      color: "#fff",
      padding: 5,
    },
  };

  const handleTypeSelection = (type, screen) => {
    setSelectedType(type);
    navigation.navigate(screen, { selectedType: type });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ height: 190 }}>
        <View>
          <Text style={styles.header}>By Type</Text>
        </View>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal
          style={{ flexDirection: "row", padding: 0, flex: 1 }}
        >
          <View style={styles.itemContainer}>
            <TouchableOpacity
              onPress={() => handleTypeSelection("Bodyweight","WeightsScreen")}
              style={styles.itemButton}
            >
              <View style={{ flexDirection: "column" }}>
                <CardioIcon width={50} height={50} style={styles.itemIcon} />
                <Text style={styles.itemText}>Bodyweight</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.itemContainer}>
            <TouchableOpacity
              onPress={() => handleTypeSelection("Cardio","CardioScreen")}
              style={styles.itemButton}
            >
              <View style={{ flexDirection: "column" }}>
                <CardioIcon width={50} height={50} style={styles.itemIcon} />
                <Text style={styles.itemText}>Cardio</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>

      {/* Render the selected type */}
      {selectedType !== "" && (
        <View style={{ marginTop: 20 }}>
          <Text>You selected: {selectedType}</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default WorkoutHome;
