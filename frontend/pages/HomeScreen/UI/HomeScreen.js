import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import "../../../global.css"
import { useFonts, Comfortaa_700Bold } from '@expo-google-fonts/comfortaa';
const tree = require("../assets/money_tree.png");



const HomeScreen = ({navigation}) => {

    let [fontsLoaded] = useFonts({Comfortaa_700Bold});

    if (!fontsLoaded) {
        return null
    }

    return (
        <View style={styles.container}>
            <Image 
            source={tree}
            style={{width: 120, height: 120}}
             />
            <Text style={styles.textStyle}>Welcome to The Money Tree!</Text>
            <TouchableOpacity
            onPress={() => navigation.navigate('SignUp')}
            color="white"
            style={styles.ButtonStyle1}
            >
            <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => navigation.navigate('LogIn')}
            color="white"
            style={styles.ButtonStyle2}
            >
            <Text style={styles.buttonText}>Log In</Text>
            </TouchableOpacity>
        </View>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
      display: 'flex',
      backgroundColor: '#e0ace5',
      alignItems: 'center',
      justifyContent: 'flex-start',
      flex: 1,
      paddingTop: 110,
      
    },
    textStyle: {
        fontSize: 23,
        fontFamily: 'Comfortaa_700Bold',
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        marginTop: 20,
    },
    ButtonStyle1: {
        backgroundColor: '#62a839',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        position: 'top',
        top: 90,
        left: 5,
        width: 200,
    },
    ButtonStyle2: {
        backgroundColor: '#401563',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        position: 'top',
        top: 150,
        left: 5,
        width: 200,
    },
    buttonText: {
        color: 'white',
        fontFamily: 'Comfortaa_700Bold',
        textAlign: 'center',
        fontWeight: '600',
        fontSize: 17,
    },
  });
  
