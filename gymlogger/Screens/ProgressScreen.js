import React, { useState, useRef } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  Modal,
  TextInput,
  FlatList,
  Button
} from "react-native";
import { Video } from 'expo-av';

const DATA = [  {    id: "1",    name: "Bench Press",    muscles: ["Chest", "Triceps"],
    videoUrl: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
    description:
      "The bench press is an ",
  },
  
];

const MyComponent = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = async () => {
    if (isPlaying) {
      await videoRef.current.pauseAsync();
      setIsPlaying(false);
    } else {
      await videoRef.current.playAsync();
      setIsPlaying(true);
    }
  };

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
            <Video
              source={{ uri: selectedItem.videoUrl }}
              ref={videoRef}
              style={styles.video}
              useNativeControls={false}
              resizeMode="contain"
              onPlaybackStatusUpdate={(status) => setIsPlaying(status.isPlaying)}
            />
            <Button title={isPlaying ? "Pause" : "Play"} onPress={handlePlayPause} />
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
  video: {
    width: '100%',
    height: 300,
  }
};

export default MyComponent;
