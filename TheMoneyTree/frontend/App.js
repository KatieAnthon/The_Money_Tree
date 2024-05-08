import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUpScreen from './pages/SignUp/SignUp';
import LogInScreen from './pages/Login/LogIn';
import HomeScreen from './HomeScreen';
import SpendAnalysis from './pages/SpendAnalysis/spendAnalysis';
import "./global.css";
import { NativeWindStyleSheet } from "nativewind";
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

NativeWindStyleSheet.setOutput({
  default: "native",
});




export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="LogIn" component={LogInScreen} />
        <Stack.Screen name="SpendA" component={SpendAnalysis} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
