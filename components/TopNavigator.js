import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AccountScreen from '../screens/AccountScreen';


function SecondScreen() {
  console.log('SecondScreen Loaded');
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'lightblue' }}>
      <Text>Second Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

const Carousel = () => {
    
  return (
  <NavigationContainer  style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'lightblue' }}>
   <Stack.Navigator>
    <Stack.Screen name="Account" component={AccountScreen} />
    <Stack.Screen name="Security" component={AccountScreen} />
    <Stack.Screen name="Payment" component={AccountScreen} />
    <Stack.Screen name="Transection" component={SecondScreen} />
   </Stack.Navigator>
  </NavigationContainer>
  )
}

export default Carousel

const styles = StyleSheet.create({})