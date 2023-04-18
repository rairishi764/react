import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, Alert } from 'react-native';
import { Avatar, Button, Card, Divider, TextInput } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

export default function ProfileScreen() {
  const [name, setName] = useState('John Doe');
  const [photo, setPhoto] = useState(null);
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bodyType, setBodyType] = useState('');
  const [heightUnit, setHeightUnit] = useState('ft');
  const [weightUnit, setWeightUnit] = useState('lbs');

  const handleImagePicker = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);

    if (status !== 'granted') {
      console.log('Camera roll permission denied');
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

  const convertHeightToFeetAndInches = (heightCM) => {
    const totalInches = heightCM * 0.3937;
    const feet = Math.floor(totalInches / 12);
    const inches = Math.round(totalInches % 12);
    return `${feet}'${inches}"`;
  };

  const convertWeightToPounds = (weightKG) => {
    return Math.round(weightKG * 2.20462);
  };

  const convertWeightToKilograms = (weightLBS) => {
    return Math.round(weightLBS / 2.20462);
  };

  const handleSaveChanges = () => {
    let displayHeight = height;
    let displayWeight = weight;
    if (heightUnit === 'cm') {
      displayHeight = convertHeightToFeetAndInches(height);
    }
    if (weightUnit === 'kg') {
      displayWeight = convertWeightToPounds(weight);
    }
    console.log({
      name,
      photo,
      height: displayHeight,
      weight: displayWeight,
      bodyType,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Avatar.Image source={{ uri: photo }} size={100} />
        <TouchableOpacity style={styles.editButton} onPress={handleImagePicker}>
          <Text style={styles.editButtonText}>Edit</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
        <Card style={styles.card}>
          <Card.Content>
            <Text style={styles.cardTitle}>Personal Information</Text>
            <Divider style={styles.divider} />
            <TextInput
              label="Name"
              value={name}
              onChangeText={(text) => setName(text)}
            />
            <TextInput
              label="Height"
              value={height}
              onChangeText={(text) => setHeight(text)}
            />
            <TextInput
              label="Weight"
              value={weight}
              onChangeText={(text) => setWeight(text)}
            />
            <TextInput
              label="Body Type"
              value={bodyType}
              onChangeText={(text) => setBodyType(text)}
            />
            <Button mode="contained" style={styles.saveButton}>
              Save Changes
            </Button>
          </Card.Content>
        </Card>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      padding: 20,
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 20,
    },
    avatarContainer: {
      alignItems: 'center',
    },
    avatar: {
      width: 100,
      height: 100,
      borderRadius: 50,
    },
    editButton: {
      backgroundColor: '#007AFF',
      borderRadius: 20,
      padding: 10,
      marginLeft: 10,
    },
    editButtonText: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 16,
    },
    body: {
      flex: 1,
      marginTop: 20,
    },
    card: {
      padding: 10,
      marginBottom: 20,
    },
    cardTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    divider: {
      marginVertical: 10,
    },
    inputContainer: {
      marginBottom: 10,
    },
    label: {
      fontWeight: 'bold',
      marginBottom: 5,
    },
    input: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      paddingHorizontal: 10,
      paddingVertical: 5,
    },
    buttonContainer: {
      alignItems: 'center',
      marginTop: 20,
    },
    button: {
      backgroundColor: 'blue',
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 5,
    },
    buttonText: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 16,
    },
    toggleContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 10,
    },
    toggleText: {
      marginRight: 10,
    },
  });
  