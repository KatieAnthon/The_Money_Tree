import React, { useState, Component} from 'react'
import { Button, StyleSheet, Text, TextInput, View, Pressable } from 'react-native';
import { useNavigate } from '@react-navigation/native';
import 'tailwindcss/tailwind.css';
import { StatusBar } from 'expo-status-bar';
import "../../global.css"


// import { styled } from 'nativewind';

// const View = styled(RNView)
// const Button = styled(RNButton)
// const Text = styled(RNText)
// const TextInput = styled(RNTextInput)




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
    <Text className="text-l mb-4 text-white" >Login here!</Text>
    <TextInput 
    placeholder="Enter your email" 
    onChangeText={text => setEmail(text)}
    className="border border-white p-2 rounded-md mb-2 w-3/4 text-lg"/>
    <TextInput 
    placeholder="Enter your password"
    onChangeText={text => setPassword(text)}
    secureTextEntry={true} 
    className="border border-white p-2 rounded-md mb-2 w-3/4 text-lg justify-centre"/>
    <Pressable className="rounded-lg px-2 flex items-center justify-center bg-purple-dark" title="Submit" onPress={handleSubmit}>
    <Text className="text-lg text-white font-semibold" >Submit</Text>
    </Pressable>

    <Button
        title="Sign Up"
        onPress={() =>
            navigation.navigate('SignUp')   
        }
        className="bg-dark text-white font-semibold py-2 px-4 border border-dark rounded mt-2"
        />   
        </View> 
  );
}


export default LogInScreen;