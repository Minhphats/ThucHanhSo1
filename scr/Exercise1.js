import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const  Ex1=() => {
  return (
    <View style={MyStyle.ViewStyle}>
      <Text Style={MyStyle.TextStyle}>Hello World</Text>
    </View>
  );
}
export default Ex1;
<View style={
  {
    width: 100,
    heigt: 100,
    backgroundColor: 'aqua',
    alignItems: 'center',
    justifyContent: 'center',
}
}>
  <Text style= {{ color:'#808080'}}> Hello world</Text>
  </View>
var MyStyle =   StyleSheet.create(
  {
  ViewStyle: {
    width: 100,
    heigt: 100,
    backgroundColor: 'aqua',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  TextStyle:
  {
    color:'black'
  }
}
)

