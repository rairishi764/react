import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Video } from 'expo-av';

export default function App() {
  const [videoURI, setVideoURI] = useState('http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4');
  const [videoStatus, setVideoStatus] = useState({});

  const handlePlayPause = async () => {
    if (videoStatus.isPlaying) {
      await videoStatus.pauseAsync();
    } else {
      await videoStatus.playAsync();
    }
  };

  return (
    <View style={styles.container}>
      <Video
        source={{ uri: videoURI }}
        ref={ref => setVideoStatus(ref)}
        style={styles.video}
        useNativeControls
        resizeMode="contain"
      />
      <Button title={videoStatus.isPlaying ? "Pause" : "Play"} onPress={handlePlayPause} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  video: {
    width: '100%',
    height: 300,
  },
});
