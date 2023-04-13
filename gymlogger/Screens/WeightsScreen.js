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
import { useNavigation } from '@react-navigation/native';

const WeightliftingLogger = () => {
  const navigation = useNavigation();  
  const [exercise, setExercise] = useState("");
  const [sets, setSets] = useState("");
  const [reps, setReps] = useState([]);
  const [weight, setWeight] = useState([]);

  const handleSave = () => {
    // Save the weightlifting exercise data to a database or file
    console.log("Weightlifting exercise saved:", {
      exercise,
      sets,
      reps,
      weight,
      date: moment().format("YYYY-MM-DD"),
    });

    // Clear the input fields
    setExercise("");
    setSets("");
    setReps([]);
    setWeight([]);
  };

  const renderSetInputs = () => {
    const setInputs = [];
    for (let i = 1; i <= sets; i++) {
      setInputs.push(
        <View key={i}>
          <Text style={styles.label}>{`Set ${i}`}</Text>
          <View style={styles.row}>
            <TextInput
              style={[styles.input, styles.smallInput]}
              mode="outlined"
              label="Reps"
              value={reps[i - 1]}
              onChangeText={(text) => handleRepsChange(i, text)}
              keyboardType="numeric"
            />
            <TextInput
              style={[styles.input, styles.smallInput]}
              mode="outlined"
              label="Weight (in lbs)"
              value={weight[i - 1]}
              onChangeText={(text) => handleWeightChange(i, text)}
              keyboardType="numeric"
            />
          </View>
        </View>
      );
    }
    return setInputs;
  };

  const handleRepsChange = (index, text) => {
    const newReps = [...reps];
    newReps[index - 1] = text;
    setReps(newReps);
  };

  const handleWeightChange = (index, text) => {
    const newWeight = [...weight];
    newWeight[index - 1] = text;
    setWeight(newWeight);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          mode="outlined"
          label="Exercise"
          value={exercise}
          onChangeText={(text) => setExercise(text)}
        />
        <TextInput
          style={styles.input}
          mode="outlined"
          label="Sets"
          value={sets}
          onChangeText={(text) => setSets(text)}
          keyboardType="numeric"
        />
        {renderSetInputs()}
      </View>

      <Button
        style={styles.saveButton}
        icon="content-save"
        mode="contained"
        onPress={handleSave}
        disabled={!exercise || !sets || reps.length < sets || weight.length < sets}
      >
        Save
      </Button>
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
  weightInput: {
    flex: 1,
    marginRight: 8,
  },
  repsInput: {
    flex: 1,
  },
});

export default WeightliftingLogger;