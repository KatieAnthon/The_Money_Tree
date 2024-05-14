import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUpScreen from '../pages/SignUp/UI/SignUp';
import LogInScreen from '../pages/Login/UI/LogIn';
import HomeScreen from '../pages/HomeScreen/UI/HomeScreen';
import SpendAnalysis from '../pages/SpendAnalysis/UI/spendAnalysis';
import "./global.css";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SpendHistory from '../pages/SpendAnalysis/SpendHistory';
// import { verifyInstallation } from 'nativewind';
// import { NativeWindStyleSheet } from "nativewind";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  // verifyInstallation();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="LogIn" component={LogInScreen} />
        <Stack.Screen name="SpendA" component={SpendAnalysis} />
        <Stack.Screen name="SpendHistory" component={SpendHistory} />
      </Stack.Navigator>
    {/* </NavigationContainer>
    <NavigationContainer> */}
      {/* <Tab.Navigator>
        <Tab.Screen name="Spend" component={SpendAnalysis} />
        <Tab.Screen name="History" component={SpendHistory} />
      </Tab.Navigator> */}
    </NavigationContainer>
  );
}
