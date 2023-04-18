import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  StyleSheet,
  Image,
} from "react-native";
import { TextInput } from "react-native-paper";
import CardioIcon from "../assets/cardio.svg";
import { useNavigation } from "@react-navigation/native";
import BannerSlider from "../components/BannerSlider";

export default function WorkoutHome () {
  const [selectedType, setSelectedType] = useState("");

  const navigation = useNavigation();

  const handleTypeSelection = (type, screen) => {
    setSelectedType(type);
    navigation.navigate(screen, { selectedType: type });
  };

  const renderBanner = (item, index) => {
    return <BannerSlider data={item} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.greeting}>
        <Text>Hello John Doe</Text>
        <ImageBackground
          source={require("../assets/user.jpg")}
          style={styles.userImage}
          imageStyle={styles.userImageBorder}
        />
      </View>

      <View style={styles.searchContainer}>
        <TextInput placeholder="Search" style={styles.searchInput} />
      </View>

      <View style={styles.topWorkoutsContainer}>
        <Text style={styles.topWorkoutsText}>Top Workouts</Text>
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.seeAllText}>See all</Text>
        </TouchableOpacity>
      </View>

      <BannerSlider />

      <View style={styles.byTypeContainer}>
        <Text style={styles.byTypeHeader}>By Type</Text>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal
          style={styles.byTypeScrollView}
        >
          <View style={styles.itemContainer}>
            <TouchableOpacity
              onPress={() =>
                handleTypeSelection("Bodyweight", "WeightsScreen")
              }
              style={styles.itemButton}
            >
              <View style={styles.itemButtonContent}>
                <CardioIcon width={50} height={50} style={styles.itemIcon} />
                <Text style={styles.itemText}>Bodyweight</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.itemContainer}>
            <TouchableOpacity
              onPress={() => handleTypeSelection("Cardio", "CardioScreen")}
              style={styles.itemButton}
            >
              <View style={styles.itemButtonContent}>
                <CardioIcon width={50} height={50} style={styles.itemIcon} />
                <Text style={styles.itemText}>Cardio</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>

      {selectedType !== "" && (
        <View style={styles.selectedTypeContainer}>
          <Text>You selected: {selectedType}</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  seeAllText:{
    color: "#941796",
  },
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
  greeting: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    width: "100%",
  },
  userImage: {
    width: 35,
    height: 35,
    borderRadius: 25,
  },
  searchContainer: {
    flexDirection: "row",
  },
  searchInput: {
    width: "95%",
  },
  topWorkoutsContainer: {
    marginVertical: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "95%",
  },
  topWorkoutsTitle: {
    fontSize: 18,
  },
  byTypeContainer: {
    height: 190,
  },
  byTypeHeader: {
    fontSize: 20,
    fontWeight: "bold",
  },
  byTypeScrollView: {
    flexDirection: "row",
    padding: 0,
    flex: 1,
  },
  selectedTypeContainer: {
    marginTop: 20,
  },
  selectedTypeText: {
    fontSize: 18,
  },
  topWorkoutsText:{
    fontWeight:"bold",
    fontSize: 20,
  }
});