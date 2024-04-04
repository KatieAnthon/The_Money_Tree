import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUpScreen from './pages/SignUp';
import LogInScreen from './pages/LogIn';
import HomeScreen from './HomeScreen';
import { NativeWindStyleSheet } from "nativewind";
import "./global.css"
import 'tailwindcss/tailwind.css';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="LogIn" component={LogInScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
