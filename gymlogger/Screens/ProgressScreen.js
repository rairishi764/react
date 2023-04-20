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

