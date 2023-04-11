import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SambaShoe from "./assets/SambaShoe.svg";
import Cardio from "./assets/cardio.svg";
import Weights from "./assets/weights.svg";

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
    <SafeAreaView
    style={{
      flex:1,
      justifyContent:'center',
      backgroundColor:'#fff',
        alignItems: 'center', // set alignItems to center
      padding:20
    }}>

      <View style={{padding:50}}>
        <TouchableOpacity 
          onPress={() => navigation.navigate('Home')}
            style={{
              backgroundColor:'#3EB489',
              padding:20,
              width:'70%',
              flexDirection:'row', 
              justifyContent:'space-between'
              }}>
            <Cardio width={80} height={80} style={{
                padding:50,}}/>
        
            <Text style={{fontWeight:'bold', fontSize:18,color:"#fff"}}>Cardio</Text>
        </TouchableOpacity>
        </View>

        <View style={{padding:50}}>
        <TouchableOpacity 
          onPress={() => navigation.navigate('Home')}
            style={{
              backgroundColor:'#3EB489',
              padding:20,
              width:'70%',
              flexDirection:'row', 
              justifyContent:'space-between'
              }}>
           <Weights width={80} height={80} style={{
          padding:50,}}/>
             
          <Text style={{fontWeight:'bold', fontSize:18,color:"#fff"}}>Weights</Text>
        </TouchableOpacity>
        </View>
        
    </SafeAreaView>
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

