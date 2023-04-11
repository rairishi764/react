import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function App() {
  return (
    // makes tags appear in right screen view
    <SafeAreaView
    style={{
      flex:1,
      justifyContent:'center',
      backgroundColor:'#fff',
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

        <TouchableOpacity 
            style={{
              backgroundColor:'#AD40AF',
              padding:20,
              width:'90%',
              flexDirection:'row', 
              justifyContent:'space-between'
              }}>
          <Text style={{fontWeight:'bold', fontSize:18,color:"#fff",fontFamily:'Roboto-BlackItalic'}}>Get Logging</Text>
          <MaterialIcons name='arrow-forward-ios' size={22} color='#fff'/>
        </TouchableOpacity>
    </SafeAreaView>
  );
}

