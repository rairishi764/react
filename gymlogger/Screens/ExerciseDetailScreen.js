import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Text,
} from "react-native";
import Video from 'react-native-video';
import { Modal } from "react-native";



const DATA = [  {    id: "1",    name: "Bench Press",    muscles: ["Chest", "Triceps"],
    videoUrl: "https://www.youtube.com/watch?v=gRVjAtPip0Y",
    description: "The bench press is a chest exercise that targets the pectoral muscles. Begin by lying on the bench with your feet on the ground and your back flat. Hold the bar with an overhand grip and lower it to your chest. Pause for a moment, and then push the bar back up to the starting position.",
  },
  {
    id: "2",
    name: "Squat",
    muscles: ["Quadriceps", "Glutes", "Hamstrings"],
    videoUrl: "https://www.youtube.com/watch?v=ULT0jl6lwrI",
    description: "The squat is a compound exercise that targets the muscles of the lower body. Begin by standing with your feet shoulder-width apart and your toes pointed slightly outward. Hold a barbell on your upper back and lower your body until your thighs are parallel to the ground. Pause for a moment, and then push yourself back up to the starting position.",
  },
  {
    id: "3",
    name: "Deadlift",
    muscles: ["Lower Back", "Glutes", "Hamstrings"],
    videoUrl: "https://www.youtube.com/watch?v=1ZXobuFvFJ8",
    description: "The deadlift is a compound exercise that targets the muscles of the lower back, glutes, and hamstrings. Begin by standing with your feet shoulder-width apart and your toes pointed slightly outward. Bend down and grab the bar with an overhand grip. Lift the bar by straightening your legs and pulling your hips forward. Pause for a moment, and then lower the bar back down to the ground.",
  },
];


const ExerciseDetailScreen = () => {
  const [query, setQuery] = useState("");
  const [workouts, setWorkouts] = useState(
    DATA.map((item) => ({
      ...item,
      showModal: false,
    }))
  );

  const toggleModal = (itemId) => {
    setWorkouts((prevWorkouts) =>
      prevWorkouts.map((item) =>
        item.id === itemId ? { ...item, showModal: !item.showModal } : item
      )
    );
  };


  const handleSearch = (text) => {
    setQuery(text);
  };

  const renderWorkout = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={() => toggleModal(item.id)}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.muscles}>{item.muscles.join(", ")}</Text>
      <Text style={styles.videoUrl}>{item.videoUrl}</Text>
      <Text style={styles.description} numberOfLines={1}>
        {item.description}
      </Text>
      {item.showModal && (
        <View style={styles.modalContainer}>
          <View style={styles.modal}>
            <Text style={styles.modalTitle}>{item.name}</Text>
            <Text style={styles.modalDescription}>{item.description}</Text>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => toggleModal(item.id)}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </TouchableOpacity>
  ); 

  const filteredData = DATA.filter(
    (item) =>
      item.name.toLowerCase().includes(query.toLowerCase()) ||
      item.muscles.some((muscle) => muscle.toLowerCase().includes(query.toLowerCase())) ||
      item.videoUrl.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search for a workout"
        onChangeText={handleSearch}
        value={query}
      />
      <FlatList
        data={filteredData}
        renderItem={renderWorkout}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchBar: {
    backgroundColor: "#F2F2F2",
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
  item: {
    backgroundColor: "#FFFFFF",
    padding: 10,
    marginVertical: 2,
    marginHorizontal: 16,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  muscles: {
    fontSize: 14,
  },
  videoUrl: {
    fontSize: 12,
    color: "#666666",
  },
    container: {
      flex: 1,
    },
    searchBar: {
      backgroundColor: "#F2F2F2",
      padding: 10,
      margin: 10,
      borderRadius: 10,
    },
    item: {
      backgroundColor: "#FFFFFF",
      padding: 10,
      marginVertical: 2,
      marginHorizontal: 16,
    },
    name: {
      fontSize: 16,
      fontWeight: "bold",
    },
    muscles: {
      fontSize: 14,
    },
    videoUrl: {
      fontSize: 12,
      color: "#666666",
    },
    description: {
      fontSize: 14,
      color: "#666666",
    },
    modalContainer: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      alignItems: "center",
      justifyContent: "center",
    },
    modal: {
      backgroundColor: "#FFFFFF",
      padding: 20,
      borderRadius: 10,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    modalTitle: {
      fontSize: 18,
      fontWeight: "bold",
      marginBottom: 10,
    },
    modalDescription: {
      fontSize: 14,
      marginBottom: 10,
    },
    closeButton: {
      backgroundColor: "#FF0000",
      padding: 10,
      borderRadius: 5,
    },
    closeButtonText: {
      color: "#FFFFFF",
      fontSize: 16,
      fontWeight: "bold",
    }  
});

export default ExerciseDetailScreen;
