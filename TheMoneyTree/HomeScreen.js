import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUpScreen from './SignUp';

const HomeScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>Welcome to The Money Tree!</Text>
            <Button
            title="Sign Up"
            onPress={() => navigation.navigate('SignUp')}
            color="white"
            style={styles.ButtonStyle}
            />
            <Button
            title="Log In"
            onPress={() => navigation.navigate('LogIn')}
            />
        </View>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
      display: 'flex',
      backgroundColor: '#dba4eb',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
    },
    textStyle: {
        fontSize: 20,
        fontWeight: '600',
        color: 'white',
        textAlign: 'center',
    },
    ButtonStyle: {
        backgroundColor: '#401563',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
    }
  });
  
