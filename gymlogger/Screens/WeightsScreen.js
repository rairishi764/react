import React, { useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image,
  FlatList,
} from "react-native";
import { Button, TextInput, IconButton } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import moment from "moment";
import { useNavigation } from "@react-navigation/native";
import { Slider } from "react-native-elements";

const WeightliftingLogger = () => {
  const navigation = useNavigation();

  const [sets, setSets] = useState(1);
  const [reps, setReps] = useState([0]);
  const [weight, setWeight] = useState([0]);
  const weightWorkoutType = [
    { workout: "Bench Press" },
    { workout: "Squats" },
    { workout: "Deadlifts" },
    { workout: "Shoulder Press" },
    { workout: "Barbell Rows" },
    { workout: "Bicep Curls" },
    { workout: "Tricep Extensions" },
    { workout: "Lunges" },
    { workout: "Leg Press" },
    { workout: "Pull-Ups" },
    { workout: "Dips" },
    { workout: "Leg Curls" },
    { workout: "Leg Extensions" },
    { workout: "Calf Raises" },
    { workout: "Abdominal Crunches" },
    { workout: "Planks" },
    { workout: "Russian Twists" },
    { workout: "Cable Rows" },
    { workout: "Chest Flys" },
    { workout: "Lat Pulldowns" },
  ];

  const [search, setSearch] = useState("");
  const [clicked, setClicked] = useState(false);
  const [data, setData] = useState(weightWorkoutType);
  const [selectedWeightWorkout, setSelectedWeightWorkout] = useState("");
  const searchRef = useRef();
  const onSearch = (search) => {
    if (search !== "") {
      let tempData = data.filter((item) => {
        return item.workout.toLowerCase().indexOf(search.toLowerCase()) > -1;
      });
      setData(tempData);
    } else {
      setData(weightWorkoutType);
    }
  };

  const handleSave = () => {
    // Save the weightlifting exercise data to a database or file
    console.log("Weightlifting exercise saved:", {
      selectedWeightWorkout,
      sets,
      reps,
      weight,
      date: moment().format("YYYY-MM-DD"),
    });

    // Clear the input fields
    setSets(1);
    setReps([0]);
    setWeight([0]);
  };

  const renderSetInputs = () => {
    const setInputs = [];
    for (let i = 1; i <= sets; i++) {
      setInputs.push(
        <View key={i}>
          <Text style={styles.label}>{`Set ${i}`}</Text>
          <View style={styles.row}>
            <View style={styles.sliderContainer}>
              <Text style={styles.label}>{`Reps: ${reps[i - 1]}`}</Text>
              <Slider
                style={styles.slider}
                minimumValue={0}
                maximumValue={20}
                step={1}
                value={reps[i - 1]}
                onValueChange={(value) => handleRepsChange(i, value)}
                minimumTrackTintColor="#9971b0"
                thumbTintColor="#9971b0"
                thumbStyle={{ width: 10, height: 25 }}
              />
            </View>
            <View style={styles.sliderContainer}>
              <Text style={styles.label}>{`Weight (in lbs): ${
                weight[i - 1]
              }`}</Text>
              <Slider
                style={styles.slider}
                minimumValue={0}
                maximumValue={200}
                step={5}
                value={weight[i - 1]}
                onValueChange={(value) => handleWeightChange(i, value)}
                minimumTrackTintColor="#6b4c7d"
                thumbTintColor="#6b4c7d"
                thumbStyle={{ width: 10, height: 25 }}
              />
            </View>
          </View>
        </View>
      );
    }
    return setInputs;
  };

  const handleRepsChange = (index, value) => {
    setReps((prevReps) => {
      const newReps = [...prevReps];
      newReps[index - 1] = value;
      return newReps;
    });
  };

  const handleWeightChange = (index, value) => {
    setWeight((prevWeight) => {
      const newWeight = [...prevWeight];
      newWeight[index - 1] = value;
      return newWeight;
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        vertical
        style={{ flexDirection: "column", padding: 0, flex: 1 }}
      >
        <View style={styles.inputContainer}>
          <View>
            <TouchableOpacity
              style={{
                width: "90%",
                height: 50,
                borderRadius: 10,
                borderWidth: 0.5,
                alignSelf: "center",
                marginTop: 10,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingLeft: 15,
                paddingRight: 15,
              }}
              onPress={() => {
                setClicked(!clicked);
              }}
            >
              <Text style={{ fontWeight: "600" }}>
                {selectedWeightWorkout == ""
                  ? "Select Workout"
                  : selectedWeightWorkout}
              </Text>
              {clicked ? (
                <Image
                  source={require("../assets/upload.png")}
                  style={{ width: 20, height: 20 }}
                />
              ) : (
                <Image
                  source={require("../assets/dropdown.png")}
                  style={{ width: 20, height: 20 }}
                />
              )}
            </TouchableOpacity>
            {clicked ? (
              <View
                style={{
                  elevation: 5,
                  marginTop: 20,
                  height: 300,
                  alignSelf: "center",
                  width: "90%",
                  backgroundColor: "#fff",
                  borderRadius: 10,
                }}
              >
                <TextInput
                  placeholder="Search.."
                  value={search}
                  ref={searchRef}
                  onChangeText={(txt) => {
                    onSearch(txt);
                    setSearch(txt);
                  }}
                  style={{
                    width: "100%",
                    height: 50,
                    alignSelf: "center",
                    borderWidth: 0.2,
                    borderColor: "#8e8e8e",
                    borderRadius: 7,
                    marginTop: 20,
                    paddingLeft: 20,
                  }}
                />

                <FlatList
                  data={data}
                  renderItem={({ item, index }) => {
                    return (
                      <TouchableOpacity
                        style={{
                          width: "100%",
                          alignSelf: "center",
                          height: 50,
                          justifyContent: "center",
                          borderBottomWidth: 0.5,
                          borderColor: "#8e8e8e",
                        }}
                        onPress={() => {
                          setSelectedWeightWorkout(item.workout);
                          setClicked(!clicked);
                          onSearch("");
                          setSearch("");
                        }}
                      >
                        <Text style={{ fontWeight: "600" }}>
                          {item.workout}
                        </Text>
                      </TouchableOpacity>
                    );
                  }}
                />
              </View>
            ) : null}
          </View>

          <View>
            <Text style={styles.label}>Sets: {sets}</Text>
            <Slider
              style={{ marginTop: 10 }}
              minimumValue={1}
              maximumValue={10}
              step={1}
              value={sets}
              onValueChange={(value) => setSets(value)}
              minimumTrackTintColor="#6a2194"
              maximumTrackTintColor="#f3e8fa"
              thumbTintColor="#5b1c80"
              thumbStyle={{ width: 10, height: 25 }}
            />
          </View>

          {renderSetInputs()}
        </View>
        <Button
          style={styles.saveButton}
          icon="content-save"
          mode="contained"
          onPress={handleSave}
          disabled={
            !selectedWeightWorkout ||
            !sets ||
            reps.length < sets ||
            weight.length < sets
          }
        >
          Save
        </Button>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
    padding: 16,
  },
  inputContainer: {
    marginBottom: 16,
    padding: 35,
  },
  input: {
    marginBottom: 8,
  },
  saveButton: {
    alignSelf: "center",
    marginTop: 16,
  },
  setRowContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  setNumber: {
    fontWeight: "bold",
    marginRight: 8,
    fontSize: 16,
  },
  sliderContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  slider: {
    flex: 1,
    marginLeft: 16,
    marginRight: 8,
  },
  sliderValue: {
    minWidth: 50,
    textAlign: "center",
  },
  label: {
    fontSize: 12,
    marginTop: 5,
  },
});

export default WeightliftingLogger;
