import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
} from "react-native";
import React, { useRef, useState } from "react";
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
const App = () => {
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
  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity
        style={{
          width: "90%",
          height: 50,
          borderRadius: 10,
          borderWidth: 0.5,
          alignSelf: "center",
          marginTop: 100,
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
              width: "90%",
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
                    width: "85%",
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
                  <Text style={{ fontWeight: "600" }}>{item.workout}</Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      ) : null}
    </View>
  );
};

export default App;
