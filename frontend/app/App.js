import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUpScreen from '../pages/SignUp/UI/SignUp';
import LogInScreen from '../pages/Login/UI/LogIn';
import HomeScreen from '../pages/HomeScreen/UI/HomeScreen';
import SpendAnalysis from '../pages/SpendAnalysis/UI/spendAnalysis';
import "../global.css";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TransactionsList from '../pages/SpendHistory/UI/TransactionsList';



const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  // verifyInstallation();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="LogIn" component={LogInScreen} />
        <Stack.Screen name="SpendA" component={SpendAnalysis} />
        <Stack.Screen name="SpendHistory" component={TransactionsList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
