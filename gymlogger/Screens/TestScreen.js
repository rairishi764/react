import React, { useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { Picker } from "@react-native-picker/picker";

export default function TestScreen() {
  const [count, setCount] = useState(0);
  const [weightUnit, setWeightUnit] = useState("lbs");
  const [weightValue, setWeightValue] = useState("110");
  const [feetValue, setFeetValue] = useState("5");
  const [inchesValue, setInchesValue] = useState("9");

  const handlePrint = () => {
    console.log(`Selected weight: ${weightValue} ${weightUnit}`);
    console.log(`Selected height: ${feetValue}'${inchesValue}"`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Weight:</Text>
        <View style={styles.heightContainer}>
          <Picker
            selectedValue={weightValue}
            onValueChange={(value) => setWeightValue(value)}
            style={styles.picker}
          >
            <Picker.Item label="110 lbs" value="110" />
            <Picker.Item label="115 lbs" value="115" />
          </Picker>
          <Picker
            selectedValue={weightUnit}
            onValueChange={(value) => setWeightUnit(value)}
            style={styles.picker}
          >
            <Picker.Item label="lbs" value="lbs" />
            <Picker.Item label="kg" value="kg" />
          </Picker>
        </View>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Height:</Text>
        <View style={styles.heightContainer}>
          <Picker
            selectedValue={feetValue}
            onValueChange={(itemValue) => setFeetValue(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="5 ft" value="5" />
            <Picker.Item label="6 ft" value="6" />
            <Picker.Item label="7 ft" value="7" />
          </Picker>
          <Picker
            selectedValue={inchesValue}
            onValueChange={(itemValue) => setInchesValue(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="9 in" value="9" />
            <Picker.Item label="10 in" value="10" />
            <Picker.Item label="11 in" value="11" />
          </Picker>
        </View>
      </View>

      <Button title="Print" onPress={handlePrint} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  label: {
    padding: 15,
  },
  heightContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  picker: {
    width: 150,
  },
});
