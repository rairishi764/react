import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import {
  Avatar,
  Button,
  Card,
  Divider,
  TextInput,
  Dropdown,
} from "react-native-paper";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import { Picker } from "@react-native-picker/picker";

export default function ProfileScreen() {
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState(null);
  const [bodyType, setBodyType] = useState("");
  const [weightUnit, setWeightUnit] = useState("lbs");
  const [weightValue, setWeightValue] = useState("110");
  const [feetValue, setFeetValue] = useState("5");
  const [inchesValue, setInchesValue] = useState("9");

  const handleImagePicker = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);

    if (status !== "granted") {
      console.log("Camera roll permission denied");
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.cancelled) {
      setPhoto(result.uri);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        vertical
        style={{ flexDirection: "column", padding: 0, flex: 1 }}
      >
        <View style={styles.container}>
          <View style={styles.header}>
            <Avatar.Image source={{ uri: photo }} size={100} />
            <TouchableOpacity
              style={styles.editButton}
              onPress={handleImagePicker}
            >
              <Text style={styles.editButtonText}>Edit</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.body}>
            <Card style={styles.card}>
              <Card.Content>
                <TextInput
                  label="Name"
                  value={name}
                  onChangeText={(text) => setName(text)}
                />

                <Divider style={styles.divider} />

                <TextInput
                  label="Body Type"
                  value={bodyType}
                  onChangeText={(text) => setBodyType(text)}
                />

                <View
                  style={{
                    flexDirection: "row",
                    marginBottom: 50,
                    marginTop: 10,
                  }}
                >
                  <View style={{ flexDirection: "row", marginTop: 10 }}>
                    <Text>Weight</Text>
                    <View
                      style={{
                        flexDirection: "row",
                        marginTop: -50,
                        marginLeft: -30,
                      }}
                    >
                      <Picker
                        selectedValue={weightValue}
                        onValueChange={(value) => setWeightValue(value)}
                        style={{ width: 150, height: 50 }}
                      >
                        <Picker.Item label="110" value="110" />
                        <Picker.Item label="115" value="115" />
                      </Picker>
                      <Picker
                        selectedValue={weightUnit}
                        onValueChange={(value) => setWeightUnit(value)}
                        style={{ width: 150, height: 50 }}
                      >
                        <Picker.Item label="lbs" value="lbs" />
                        <Picker.Item label="kg" value="kg" />
                      </Picker>
                    </View>
                  </View>
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    marginBottom: 50,
                  }}
                >
                  <View style={{ flexDirection: "row", marginTop: 70 }}>
                    <Text>Height</Text>
                    <View
                      style={{
                        flexDirection: "row",
                        marginTop: -50,
                        marginLeft: -30,
                      }}
                    >
                      <Picker
                        selectedValue={feetValue}
                        onValueChange={(itemValue) => setFeetValue(itemValue)}
                        style={{ width: 150, height: 50, marginRight: 0 }}
                      >
                        <Picker.Item label="5 ft" value="5" />
                        <Picker.Item label="6 ft" value="6" />
                        <Picker.Item label="7 ft" value="7" />
                      </Picker>
                      <Picker
                        selectedValue={inchesValue}
                        onValueChange={(itemValue) => setInchesValue(itemValue)}
                        style={{ width: 150, height: 50 }}
                      >
                        <Picker.Item label="9 in" value="9" />
                        <Picker.Item label="10 in" value="10" />
                        <Picker.Item label="11 in" value="11" />
                      </Picker>
                    </View>
                  </View>
                </View>

                <Button mode="contained" style={styles.saveButton}>
                  Save Changes
                </Button>
              </Card.Content>
            </Card>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  editButton: {
    backgroundColor: "#0080ff",
    borderRadius: 5,
    padding: 5,
  },
  editButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  body: {
    flex: 1,
  },
  card: {
    borderRadius: 10,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  divider: {
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  heightContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  picker: {
    flex: 1,
    height: 50,
  },
  saveButton: {
    marginTop: 200,
    backgroundColor: "#0080ff",
    borderRadius: 5,
    padding: 10,
  },
});
