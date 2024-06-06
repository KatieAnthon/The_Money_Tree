import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUpScreen from './pages/SignUp/UI/SignUp';
import LogInScreen from './pages/Login/UI/LogIn';
import HomeScreen from './HomeScreen';
import SpendAnalysis from './pages/SpendAnalysis/UI/spendAnalysis';
import "../global.css";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TransactionsList from './pages/SpendHistory/UI/TransactionsList';
import MainTabs from './maintabs';


const Stack = createNativeStackNavigator();


export default function RootLayout() {
  return (
      <Stack screenOptions={{headerShown: false }}>
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="LogIn" component={LogInScreen} />
        <Stack.Screen name="MainTabs" component={MainTabs} options={{ headerShown: false }} />
      </Stack>
   
  );
}