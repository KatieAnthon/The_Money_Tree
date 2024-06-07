import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SplashScreen, Stack } from "expo-router";
import "../global.css"



export default function Layout() {
  return (
      <Stack screenOptions={{headerShown: false }} />
  );
}