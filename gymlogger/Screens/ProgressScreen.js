import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Modal, TouchableOpacity, FlatList } from 'react-native';
import { Calendar } from 'react-native-calendars';

export default function ProgressScreen() {
  const [selectedDate, setSelectedDate] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [workouts, setWorkouts] = useState([]);

  const workoutData = [
    { date: '2022-04-20', workout: 'Pushups, Situps, Lunges' },
    { date: '2022-04-21', workout: 'Bench press, Pullups, Squats' },
    { date: '2022-04-22', workout: 'Deadlifts, Shoulder press, Planks' },
    { date: '2022-04-23', workout: 'Cardio, Abs workout' },
    { date: '2022-04-24', workout: 'Rest day' },
  ];

  useEffect(() => {
    setWorkouts(workoutData);
  }, []);

  const onDayPress = (day) => {
    setSelectedDate(day.dateString);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.workout}</Text>
    </View>
  );

  const renderEmptyDate = () => (
    <View style={styles.emptyDate}>
      <Text>This day has no workouts</Text>
    </View>
  );

  const getMarkedDates = () => {
    const markedDates = {};
    workouts.forEach((item) => {
      markedDates[item.date] = { marked: true };
    });
    return markedDates;
  };

  return (
    <View style={styles.container}>
      <Calendar markedDates={getMarkedDates()} onDayPress={onDayPress} />
      <Modal visible={modalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <TouchableOpacity onPress={closeModal}>
            <Text style={styles.closeButton}>Close</Text>
          </TouchableOpacity>
          <Text style={styles.modalTitle}>Workouts for {selectedDate}</Text>
          {workouts.some((item) => item.date === selectedDate) ? (
            <FlatList
              data={workouts.filter((item) => item.date === selectedDate)}
              renderItem={renderItem}
              keyExtractor={(item) => item.date}
            />
          ) : (
            renderEmptyDate()
          )}
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  closeButton: {
    fontSize: 18,
    color: 'blue',
    textAlign: 'right',
    marginVertical: 10,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 16,
  },
  emptyDate: {
    height: 100,
   
  }});

/*
import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";


import CardioLogger from "../Screens/CardioScreen";
import WeightliftingLogger from "../Screens/WeightsScreen";
import LoginScreen from "../Screens/LoginScreen";
import ProgressScreen from "../Screens/ProgressScreen";
import BottomMenu from "../components/BottomMenu";

WebBrowser.maybeCompleteAuthSession();

const Drawer = createDrawerNavigator();

const App = () => {
  const [accessToken, setAccessToken] = useState(null);
  const [user, setUser] = useState(null);
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId: "868727694454-gcgf4nf4smv1obp9bk7o2dl5okt2j7sp.apps.googleusercontent.com",
    iosClientId: "868727694454-l0r3423c5oqpsq30himsd0t8abb6q56r.apps.googleusercontent.com",
    androidClientId: "868727694454-fo0am3qsflchvdc47klalnj3g571bpoq.apps.googleusercontent.com",
  });

  React.useEffect(() => {
    if (response?.type === "success") {
      setAccessToken(response.authentication.accessToken);
    }
  }, [response, accessToken]);

  async function fetchUserInfo() {
    const userInfoResponse = await fetch(
      "https://www.googleapis.com/userinfo/v2/me",
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    const userInfo = await userInfoResponse.json();
    setUser(userInfo);
  }

  React.useEffect(() => {
    if (accessToken) {
      fetchUserInfo();
    }
  }, [accessToken]);

  const ShowUserInfo = () => {
    if (user) {
      return (
        <View>
          <Text>{user.name}</Text>
          <Text>{user.email}</Text>
        </View>
      );
    }
    return null;
  };

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Login">
        <Drawer.Screen component={BottomMenu} name="Home" />
        <Drawer.Screen
          component={Login}
          name="Login"
          options={{ headerShown: false }}
        />
        <Drawer.Screen component={CardioScreen} name="CardioScreen" />
        <Drawer.Screen component={WeightsScreen} name="WeightsScreen" />
        <Drawer.Screen component={ProgressScreen} name="Progress" />
      </Drawer.Navigator>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ShowUserInfo />
        {!accessToken ? (
          <Button title="Login with Google" onPress={() => promptAsync()} />
        ) : null}
      </View>
    </NavigationContainer>
  );
};

const Login = () => {
  return <LoginScreen></LoginScreen>;
};

const CardioScreen = () => {
  return <CardioLogger></CardioLogger>;
};

const WeightsScreen = () => {
  return <WeightliftingLogger></WeightliftingLogger>;
};

const Progress = () => {
  return <ProgressLogger></ProgressLogger>;
};

export default App;

*/