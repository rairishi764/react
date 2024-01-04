import React, { useRef, useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image,
  FlatList,
} from "react-native";
import { Button, TextInput } from "react-native-paper";
import moment from "moment";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Slider } from "react-native-elements";

const CardioLogger = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const [duration, setDuration] = useState(0);
  const [distance, setDistance] = useState("");
  const [cardioType, setCardioType] = useState("");

  const cardioWorkoutType = [
    { workout: "Running" },
    { workout: "Cycling" },
    { workout: "Rowing" },
    { workout: "Swimming" },
    { workout: "Elliptical" },
    { workout: "Stair Climber" },
    { workout: "Jump Rope" },
    { workout: "High-Intensity Interval Training (HIIT)" },
    { workout: "Sprinting" },
    { workout: "Boxing" },
    { workout: "Kickboxing" },
    { workout: "Dancing" },
    { workout: "Walking" },
    { workout: "Hiking" },
    { workout: "Rollerblading" },
    { workout: "Skateboarding" },
    { workout: "Skiing" },
    { workout: "Snowboarding" },
  ];

  const [search, setSearch] = useState("");
  const [clicked, setClicked] = useState(false);
  const [data, setData] = useState(cardioWorkoutType);
  const [selectedCardioWorkout, setSelectedCardioWorkout] = useState("");
  const searchRef = useRef();

  const [timerRunning, setTimerRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (timerRunning) {
      interval = setInterval(() => {
        setDuration((prevDuration) => prevDuration + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [timerRunning]);

  const handleToggleTimer = () => {
    setTimerRunning((prevTimerRunning) => !prevTimerRunning);
  };

  const onSearch = (search) => {
    if (search !== "") {
      let tempData = data.filter((item) => {
        return item.workout.toLowerCase().indexOf(search.toLowerCase()) > -1;
      });
      setData(tempData);
    } else {
      setData(cardioWorkoutType);
    }
  };

  const handleSave = () => {
    // Save the cardio exercise data to a database or file
    console.log("Cardio exercise saved:", {
      selectedCardioWorkout,
      duration,
      distance,
      date: moment().format("YYYY-MM-DD"),
    });

    // Clear the input fields and cardio type
    setDuration(0);
    setDistance("");
    setTimerRunning(false);
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
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              style={{
                width: "100%",
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
                {selectedCardioWorkout == ""
                  ? "Select Workout"
                  : selectedCardioWorkout}
              </Text>
              {clicked ? (
                <Image
                  source={require("./../../assets/upload.png")}
                  style={{ width: 20, height: 20 }}
                />
              ) : (
                <Image
                  source={require("./../../assets/dropdown.png")}
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
                  width: "100%",
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
                          setSelectedCardioWorkout(item.workout);
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
        </View>

        <View style={styles.sliderContainer}>
          <Text style={styles.sliderText}>Duration: {duration} seconds</Text>
          <Slider
            style={{ width: "100%" }}
            minimumValue={0}
            maximumValue={3600}
            step={1}
            value={duration}
            onValueChange={(value) => setDuration(value)}
            minimumTrackTintColor="#6a2194"
            maximumTrackTintColor="#f3e8fa"
            thumbTintColor="#5b1c80"
            thumbStyle={{ width: 10, height: 25 }}
          />
        </View>

        <View style={styles.sliderContainer}>
          <Text style={styles.sliderText}>Distance: {distance} miles/Km</Text>
          <Slider
            style={{ width: "100%" }}
            minimumValue={0}
            maximumValue={50}
            step={1}
            value={distance}
            onValueChange={(value) => setDistance(value)}
            minimumTrackTintColor="#6a2194"
            maximumTrackTintColor="#f3e8fa"
            thumbTintColor="#5b1c80"
            thumbStyle={{ width: 10, height: 25 }}
          />
        </View>

        <View style={styles.timerContainer}>
        <Text style={styles.timerText}>
              Timer: {moment.utc(duration * 1000).format("mm:ss")}
            </Text>
            <Button
              style={styles.timerButton}
              icon={timerRunning ? "pause" : "play"}
              mode="contained"
              onPress={handleToggleTimer}
            >
              {timerRunning ? "Pause" : "Start"}
            </Button>
          </View>

          <Button
            style={styles.saveButton}
            icon="content-save"
            mode="contained"
            onPress={handleSave}
            disabled={!duration || !distance || !selectedCardioWorkout}
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
  cardioTypesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  timerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  sliderContainer: {
    marginBottom: 16,
  },
  timerButton: {
    alignSelf: "flex-end",
  },
  sliderText: {
    marginBottom: 8,
  },
  timerText: {
    marginBottom: 8,
  },
  saveButton: {
    alignSelf: "center",
    marginTop: 16,
  },
});

export default CardioLogger;
