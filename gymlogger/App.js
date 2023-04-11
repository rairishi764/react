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

export default function App() {
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
      
        <Text style={{
          fontSize:30,
          fontWeight:'bold',
          color:'#20315f',
          padding: 10
        }}>
          GymLogger
        </Text>
        <SambaShoe width={240} height={340} style={{
          padding:50,
          
        }}/>
        <TouchableOpacity 
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

