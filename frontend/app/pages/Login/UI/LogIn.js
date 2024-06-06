import React, { useState, Component} from 'react'
import { Button, StyleSheet, Text, TextInput, View, Pressable } from 'react-native';
import { useNavigate } from '@react-navigation/native';
import 'tailwindcss/tailwind.css';
import { StatusBar } from 'expo-status-bar';
import "../../../../global.css"


const LogInScreen = ({navigation}) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    const userData = {
      email: email,
      password: password
    };

    try {
      console.log("Sending login request with user data:", userData);


      const response = await fetch("http://192.168.0.102:8080/users/login", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        const jsonResponse = await response.json();
        console.log("Received response:", jsonResponse);
        if (jsonResponse && jsonResponse.id) {
          const userId = jsonResponse.id;
          navigation.navigate('SpendA', { userId: userId });
        } else {
          throw new Error('Unexpected response format: id property not found');
        }
      } else {
        throw new Error('Network response was not ok');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error: ' + error.message);
    }
  };
  
  
  return (
    <View className="flex items-center justify-center h-full bg-purple-default">
    <Text className="text-l mb-5 text-white" >Login here</Text>
    <TextInput 
    placeholder="Enter your email" 
    onChangeText={text => setEmail(text)}
    className="border border-white p-2 rounded-md mb-5 w-3/4 text-lg justify-centre"/>
    <TextInput 
    placeholder="Enter your password"
    onChangeText={text => setPassword(text)}
    secureTextEntry={true} 
    className="border border-white 
    p-2 rounded-md mb-20 w-3/4 
    text-lg 
    justify-centre"/>
    <Pressable className="bg-dark 
    text-white font-semibold 
    py-2 px-20 border border-dark rounded mt-2
    hover:bg-slate-300
    active:bg-slate-500" title="Submit" onPress={handleSubmit}>
    <Text className="text-lg text-white font-semibold" >Submit</Text>
    </Pressable>

    <Pressable className="bg-dark 
    text-white font-semibold 
    py-2 px-20 border border-dark rounded mt-2
    hover:bg-slate-300
    active:bg-slate-500" onPress={() =>
            navigation.navigate('SignUp')} >
          <Text className="text-lg text-white font-semibold" >Sign Up</Text>
    </Pressable>
      
        </View> 
  );
}


export default LogInScreen;