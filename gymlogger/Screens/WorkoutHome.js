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
import { Button, TextInput, IconButton } from "react-native-paper";
import CardioIcon from "../assets/cardio.svg";
import { useNavigation, useRoute } from "@react-navigation/native";
import BannerSlider from "../components/BannerSlider";
import { windowWidth } from "../utils/Dimensions";
import Carousel from "react-native-snap-carousel";
import { sliderData } from "../components/data";

const WorkoutHome = () => {
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

  const navigation = useNavigation();

  const [selectedType, setSelectedType] = useState("");
  const renderBanner = (item, index) => {
    return <BannerSlider data={item} />;
  };
  const handleTypeSelection = (type, screen) => {
    setSelectedType(type);
    navigation.navigate(screen, { selectedType: type });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 20,
          borderRadius: 8,
          paddingHorizontal: 10,
          paddingVertical: 8,
          width: "100%",
        }}
      >
        <Text>Hello John Doe</Text>
        <ImageBackground
          source={require("../assets/user.jpg")}
          style={{ width: 35, height: 35 }}
          imageStyle={{ borderRadius: 25 }}
        />
      </View>
      <View style={{ flexDirection: "row" }}>
        <TextInput placeholder="Search" style={{ width: "95%" }} />
      </View>

      <View
        style={{
          marginVertical: 15,
          flexDirection: "row",
          justifyContent: "space-between",
          width: "95%",
        }}
      >
        <Text style={{ fontSize: 18 }}>Top Workouts</Text>
        <TouchableOpacity onPress={() => {}}>
          <Text style={{ color: "#941796" }}>See all</Text>
        </TouchableOpacity>
      </View>

        <BannerSlider></BannerSlider>

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
              onPress={() => handleTypeSelection("Bodyweight", "WeightsScreen")}
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
              onPress={() => handleTypeSelection("Cardio", "CardioScreen")}
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

const styles1 = StyleSheet.create({
  slide: {
    backgroundColor: "white",
    borderRadius: 5,
    padding: 20,
    marginHorizontal: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
  },
});
