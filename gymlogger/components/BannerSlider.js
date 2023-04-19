import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import Carousel from "react-native-snap-carousel";
import { windowWidth } from "../utils/Dimensions";
import { sliderData } from "../components/data";

const BannerSlider = () => {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.slide}>
      <ImageBackground source={item.image} style={styles.image}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.text}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );

  return (
    <Carousel
      data={sliderData}
      renderItem={renderItem}
      sliderWidth={windowWidth}
      itemWidth={300}
    />
  );
};

const styles = StyleSheet.create({
  slide: {
    width: 300,
    height: 200,
    padding: 10,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    borderRadius: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    marginBottom: 5,
  },
  text: {
    fontSize: 16,
    color: "white",
  },
});

export default BannerSlider;
