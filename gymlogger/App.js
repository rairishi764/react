import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Svg, { Circle, Rect } from 'react-native-svg';
import SambaShoe from "./assets/SambaShoe.svg";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

const App = () =>{
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
      <Stack.Screen component={Home} name="Home"/>
      <Stack.Screen component={Main} name="Main" options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
    
  )
}

const Home =() => {
  return(
  <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
    
    <Text> Home Screen</Text>

  </View>
  )
}
const Main = ({navigation}) => {
  return (
    // makes tags appear in right screen view
    <SafeAreaView
    style={{
      flex:1,
      justifyContent:'center',
      backgroundColor:'#fff',
        alignItems: 'center', // set alignItems to center
      padding:20
    }}>
      <View>
        <Text style={{
          fontSize:30,
          fontWeight:'bold',
          color:'#20315f',
          padding: 10,

        }}>
          Gym Logger
        </Text>
        </View>

        <View>
        <SambaShoe width={240} height={340} style={{
          padding:50,}}/>
        </View>


        <TouchableOpacity 
          onPress={() => navigation.navigate('Home')}
            style={{
              backgroundColor:'#AD40AF',
              padding:20,
              width:'90%',
              flexDirection:'row', 
              justifyContent:'space-between'
              }}>
                
          <Text style={{fontWeight:'bold', fontSize:18,color:"#fff"}}>Get Logging</Text>
          <MaterialIcons name='arrow-forward-ios' size={22} color='#fff'/>
        </TouchableOpacity>
    </SafeAreaView>
  );
}

export default App;

