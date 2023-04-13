import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView
} from "react-native";
import { Button, TextInput, IconButton } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import moment from "moment";
import { useNavigation } from '@react-navigation/native';
import { Slider } from 'react-native-elements';

const WeightliftingLogger = () => {
  const navigation = useNavigation();  
  const [exercise, setExercise] = useState("");
  const [sets, setSets] = useState(1);
  const [reps, setReps] = useState([0]);
  const [weight, setWeight] = useState([0]);

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
              <Text style={styles.label}>{`Reps: ${reps[i-1]}`}</Text>
              <Slider
                style={styles.slider}
                minimumValue={0}
                maximumValue={20}
                step={1}
                value={reps[i-1]}
                onValueChange={(value) => handleRepsChange(i, value)}
                minimumTrackTintColor='#FFD700'
                thumbTintColor='#FFD700'
              />
            </View>
            <View style={styles.sliderContainer}>
              <Text style={styles.label}>{`Weight (in lbs): ${weight[i-1]}`}</Text>
              <Slider
                style={styles.slider}
                minimumValue={0}
                maximumValue={200}
                step={5}
                value={weight[i-1]}
                onValueChange={(value) => handleWeightChange(i, value)}
                minimumTrackTintColor='#6EADFA'
                thumbTintColor='#6EADFA'
              />
            </View>
          </View>
        </View>
      );
    }
    return setInputs;
  };

  const handleRepsChange = (index, value) => {
    const newReps = [...reps];
    newReps[index - 1] = value;
    setReps(newReps);
  };

  const handleWeightChange = (index, value) => {
    const newWeight = [...weight];
    newWeight[index - 1] = value;
    setWeight(newWeight);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        vertical
        style={{ flexDirection: "column", padding: 0, flex: 1 }}
      >
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            mode="outlined"
            label="Exercise"
            value={exercise}
            onChangeText={(text) => setExercise(text)}
          />
          <Slider
            style={{ marginTop: 10 }}
            minimumValue={1}
            maximumValue={10}
            step={1}
            value={sets}
            onValueChange={(value) => setSets(value)}
            minimumTrackTintColor="#FF0000"
            maximumTrackTintColor="#000000"
            thumbTintColor="#0000FF"
          />
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ marginRight: 10 }}>Reps:</Text>
            <Slider
              style={{ flex: 1 }}
              minimumValue={1}
              maximumValue={20}
              step={1}
              value={reps[0]}
              onValueChange={(value) => {
                const newReps = [];
                for (let i = 0; i < sets; i++) {
                  newReps.push(value);
                }
                setReps(newReps);
              }}
              minimumTrackTintColor="#FF0000"
              maximumTrackTintColor="#000000"
              thumbTintColor="#0000FF"
            />
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ marginRight: 10 }}>Weight:</Text>
            <Slider
              style={{ flex: 1 }}
              minimumValue={1}
              maximumValue={100}
              step={1}
              value={weight[0]}
              onValueChange={(value) => {
                const newWeight = [];
                for (let i = 0; i < sets; i++) {
                  newWeight.push(value);
                }
                setWeight(newWeight);
              }}
              minimumTrackTintColor="#FF0000"
              maximumTrackTintColor="#000000"
              thumbTintColor="#0000FF"
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
            !exercise || !sets || reps.length < sets || weight.length < sets
          }
        >
          Save
        </Button>
      </ScrollView>
    </SafeAreaView>
  )};


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
  });

export default WeightliftingLogger;