import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  Modal,
  TextInput,
  FlatList,
} from "react-native";
import Video from "react-native-video";

const DATA = [
  {
    id: "1",
    name: "Bench Press",
    muscles: ["Chest", "Triceps"],
    videoUrl: "https://www.youtube.com/watch?v=gRVjAtPip0Y",
    description:
      "The bench press is a chest exercise that targets the pectoral muscles. Begin by lying on the bench with your feet on the ground and your back flat. Hold the bar with an overhand grip and lower it to your chest. Pause for a moment, and then push the bar back up to the starting position.",
  },
  {
    id: "2",
    name: "Squat",
    muscles: ["Quadriceps", "Glutes", "Hamstrings"],
    videoUrl: "https://www.youtube.com/watch?v=ULT0jl6lwrI",
    description:
      "The squat is a compound exercise that targets the muscles of the lower body. Begin by standing with your feet shoulder-width apart and your toes pointed slightly outward. Hold a barbell on your upper back and lower your body until your thighs are parallel to the ground. Pause for a moment, and then push yourself back up to the starting position.",
  },
  {
    id: "3",
    name: "Deadlift",
    muscles: ["Lower Back", "Glutes", "Hamstrings"],
    videoUrl: "https://www.youtube.com/watch?v=1ZXobuFvFJ8",
    description:
      "The deadlift is a compound exercise that targets the muscles of the lower back, glutes, and hamstrings. Begin by standing with your feet shoulder-width apart and your toes pointed slightly outward. Bend down and grab the bar with an overhand grip. Lift the bar by straightening your legs and pulling your hips forward. Pause for a moment, and then lower the bar back down to the ground.",
  },
  {
    id: "4",
    name: "Pull-up",
    muscles: ["Back", "Biceps"],
    videoUrl: "https://www.youtube.com/watch?v=eGo4IYlbE5g",
    description:
      "The pull-up is an upper body exercise that targets the back and biceps. Begin by hanging from a bar with your palms facing away from your body. Pull your body up until your chin is above the bar. Pause for a moment, and then lower yourself back down to the starting position.",
  },
  {
    id: "5",
    name: "Push-up",
    muscles: ["Chest", "Shoulders", "Triceps"],
    videoUrl: "https://www.youtube.com/watch?v=IODxDxX7oi4",
    description:
      "The push-up is a classic exercise that targets the chest, shoulders, and triceps. Begin by getting into a plank position with your hands slightly wider than shoulder-width apart. Lower your body until your chest nearly touches the ground. Push yourself back up to the starting position.",
  },
  {
    id: "6",
    name: "Plank",
    muscles: ["Core"],
    videoUrl: "https://www.youtube.com/watch?v=pSHjTRCQxIw",
    description:
      "The plank is a core exercise that strengthens the muscles of your abs, back, and hips. Begin by getting into a push-up position, but instead of lowering yourself down, hold your body in a straight line from your head to your heels. Keep your abs and glutes tight, and hold for as long as you can.",
  },
];

const MyComponent = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handlePress = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity key={item.id} onPress={() => handlePress(item)}>
      <View style={styles.item}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.description}>
          {item.description.slice(0, 100)}...
        </Text>
      </View>
    </TouchableOpacity>
  );

  const handleSearch = (text) => {
    setSearchQuery(text);
  };

  const filteredData = DATA.filter((item) => {
    const muscleMatch = item.muscles.find((muscle) =>
      muscle.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return (
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) || muscleMatch
    );
  });

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search"
        onChangeText={handleSearch}
        value={searchQuery}
      />
      <FlatList
        data={filteredData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
      {selectedItem && (
        <Modal visible={modalVisible} animationType="slide">
          <View style={styles.modalContainer}>
            <Text style={styles.title}>{selectedItem.name}</Text>
            <Text style={styles.description}>{selectedItem.description}</Text>

            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text style={styles.closeButton}>Close</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      )}
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    padding: 16,
  },
  listContainer: {
    paddingBottom: 80,
  },
  item: {
    padding: 16,
    marginBottom: 16,
    backgroundColor: "#f2f2f2",
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    marginBottom: 8,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  closeButton: {
    fontSize: 18,
    color: "blue",
    marginTop: 16,
  },
  searchInput: {
    height: 40,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
};

export default MyComponent;
