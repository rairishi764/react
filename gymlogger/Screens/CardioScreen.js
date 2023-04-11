import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { Button, TextInput, IconButton } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import moment from "moment";

const CardioLogger = () => {
  const [duration, setDuration] = useState("");
  const [distance, setDistance] = useState("");
  const [cardioType, setCardioType] = useState("");

  const handleSave = () => {
    // Save the cardio exercise data to a database or file
    console.log("Cardio exercise saved:", {
      duration,
      distance,
      cardioType,
      date: moment().format("YYYY-MM-DD"),
    });

    // Clear the input fields and cardio type
    setDuration("");
    setDistance("");
    setCardioType("");
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#fff",
      }}
    >
      <View style={styles.container}>

      <View style={styles.cardioTypesContainer}>
          <TouchableOpacity onPress={() => setCardioType("running")}>
            <Icon
              name={cardioType === "running" ? "run-fast" : "run"}
              size={32}
              color={cardioType === "running" ? "#00bcd4" : "#999"}
            />
            <Text style={styles.cardioTypeText}>Running</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setCardioType("cycling")}>
            <Icon
              name={cardioType === "cycling" ? "bike-fast" : "bike"}
              size={32}
              color={cardioType === "cycling" ? "#00bcd4" : "#999"}
            />
            <Text style={styles.cardioTypeText}>Cycling</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setCardioType("eliptical")}>
            <Icon
              name={cardioType === "eliptical" ? "ellipse" : "ellipse-outline"}
              size={32}
              color={cardioType === "eliptical" ? "#00bcd4" : "#999"}
            />
            <Text style={styles.cardioTypeText}>Eliptical</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setCardioType("swimming")}>
            <Icon
              name={cardioType === "swimming" ? "swim" : "swim"}
              size={32}
              color={cardioType === "swimming" ? "#00bcd4" : "#999"}
            />
            <Text style={styles.cardioTypeText}>Swimming</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setCardioType("walking")}>
            <Icon
              name={cardioType === "walking" ? "walk" : "walk"}
              size={32}
              color={cardioType === "walking" ? "#00bcd4" : "#999"}
            />
            <Text style={styles.cardioTypeText}>Walking</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setCardioType("stairclimbing")}>
            <Icon
              name={cardioType === "stairclimbing" ? "stairs" : "stairs"}
              size={32}
              color={cardioType === "stairclimbing" ? "#00bcd4" : "#999"}
            />
            <Text style={styles.cardioTypeText}>Stairs</Text>
          </TouchableOpacity>
        </View>


        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            mode="outlined"
            label="Duration (in minutes)"
            value={duration}
            onChangeText={(text) => setDuration(text)}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            mode="outlined"
            label="Distance (in km)"
            value={distance}
            onChangeText={(text) => setDistance(text)}
            keyboardType="numeric"
          />
        </View>

        <Button
          style={styles.saveButton}
          icon="content-save"
          mode="contained"
          onPress={handleSave}
          disabled={!duration || !distance || !cardioType}
        >
          Save
        </Button>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  inputContainer: {
    marginBottom: 16,
  },
  input: {
    marginBottom: 8,
  },
  cardioTypesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  cardioTypeText: {
    textAlign: "center",
    fontSize: 12,
    color: "#999",
  },
  saveButton: {
    alignSelf: "center",
    marginTop: 16,
  },
});

export default CardioLogger;
