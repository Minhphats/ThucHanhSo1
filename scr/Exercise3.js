import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import React from 'react';

const  Ex3=() => {
  return (
    <View style={{flex: 1, justifyContent:'center' }}>
      <Button title='Say hello ' onPress={() => alert ("Hello!")}/>
      <TouchableOpacity
      onPress={() => alert ("Hello 2! ")}
      style= {
        {
          backgroundColor: "blue",
          padding: 10,
          alignItems: "center",
          marginTop: 400,
        }
      }>
        <Text style={{color: "white", fontSize:18}}>Say goodbye</Text>
      </TouchableOpacity>
    </View> 
  );
};
export default Ex3;
<View style={
  {
    width: 100,
    heigt: 100,
    backgroundColor: 'aqua',
    alignItems: 'center',
    justifyContent: 'center',
}
}>
  <Text style= {{ color:'#fff'}}> Hello world</Text>
  </View>

const MyStyle =   StyleSheet.create(
  {
    container: {
      flex: 1,
      justifyContent:"center"
    },
    button:{
      backgroundColor:"red",
      marginTop: 10,
      alignItems:"center",
      padding:10
    },
    text:{
      color:"white",
      fontSize:18
    }
}
)