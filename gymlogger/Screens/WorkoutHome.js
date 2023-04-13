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
import CardioIcon from "../assets/cardio.svg";
import WeightsIcon from "../assets/weights.svg";
import { useNavigation } from '@react-navigation/native';

const WorkoutHome = () => {
  const navigation = useNavigation();

  const styles = {
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#fff",
      padding: 0,
      width: '100%',
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
      backgroundColor: "#941796",
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

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View>
          <Text style={styles.header}>By Type</Text>
        </View>
        <ScrollView horizontal style={{ flexDirection: "row", padding: 0 }}>
          <View style={styles.itemContainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate("CardioScreen")}
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
              onPress={() => navigation.navigate("CardioScreen")}
              style={styles.itemButton}
            >
              <View style={{ flexDirection: "column" }}>
                <CardioIcon width={50} height={50} style={styles.itemIcon} />
                <Text style={styles.itemText}>Cardio</Text>
              </View>
            </TouchableOpacity>
          </View>


          <View style={styles.itemContainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate("CardioScreen")}
              style={styles.itemButton}
            >
              <View style={{ flexDirection: "column" }}>
                <CardioIcon width={50} height={50} style={styles.itemIcon} />
                <Text style={styles.itemText}>Free Weights</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.itemContainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate("CardioScreen")}
              style={styles.itemButton}
            >
              <View style={{ flexDirection: "column" }}>
                <CardioIcon width={50} height={50} style={styles.itemIcon} />
                <Text style={styles.itemText}>Functional</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.itemContainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate("CardioScreen")}
              style={styles.itemButton}
            >
              <View style={{ flexDirection: "column" }}>
                <CardioIcon width={50} height={50} style={styles.itemIcon} />
                <Text style={styles.itemText}>Mobility</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.itemContainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate("CardioScreen")}
              style={styles.itemButton}
            >
              <View style={{ flexDirection: "column" }}>
                <CardioIcon width={50} height={50} style={styles.itemIcon} />
                <Text style={styles.itemText}>Resistance</Text>
              </View>
            </TouchableOpacity>
          </View>

        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default WorkoutHome;
