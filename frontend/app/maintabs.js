import React from 'react';
import SignUpScreen from './pages/SignUp/UI/SignUp';
import LogInScreen from './pages/Login/UI/LogIn';
import HomeScreen from './HomeScreen';
import SpendAnalysis from './pages/SpendAnalysis/UI/spendAnalysis';
import "../global.css";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TransactionsList from './pages/SpendHistory/UI/TransactionsList';


const Tab = createBottomTabNavigator();

export default function MainTabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="SpendAnalysis" component={SpendAnalysis} />
        <Tab.Screen name="SpendHistory" component={TransactionsList} />
      </Tab.Navigator>
    );
  }