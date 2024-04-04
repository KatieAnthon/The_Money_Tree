import React, { useState, Component} from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useForm, Controller, useFormState } from 'react-hook-form';
import 'tailwindcss/tailwind.css';



const LogInScreen = ({navigation}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit = async (event) => {
    const userData = {
      "email": email,
      "password": password

    }
    userString = JSON.stringify(userData)
    
    try {
      const response = await fetch("http://192.168.0.102:8080/users/login", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: userString
      });

      if (response.ok) {
        console.log("Successfully logged in!")
      }


      if (!response.ok) {
        throw new Error('Network response was not ok')
      }

      const jsonResponse = await response.json();
      alert(jsonResponse.message);
    } catch (error) {
      alert('Error: ' + error.message);
    }
  };
  
  return (
    <View className="flex items-center justify-center h-full bg-purple">
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
    <Button className="bg-dark text-white font-bold py-8 px-5 rounded" title="Submit" onPress={handleSubmit}/>

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