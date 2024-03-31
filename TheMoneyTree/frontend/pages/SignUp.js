import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useForm, Controller, useFormState } from 'react-hook-form';
import 'tailwindcss/tailwind.css';



const SignUpScreen = ({navigation}) => {
  const {control, handleSubmit} = useForm();
  const {userData, applyUserData} = useState("");


  const onSubmit = (event) => {
    console.log(event)
  };


  return (
    <View className="flex items-center justify-center h-full bg-purple">
    <Text className="text-xl mb-4 text-white" >Sign Up here!</Text>
    <TextInput placeholder="Enter your name" className="border border-gray-300 p-2 rounded-md mb-2 w-3/4"/>
    <TextInput placeholder="Enter your email" className="border border-gray-300 p-2 rounded-md mb-2 w-3/4"/>
    <TextInput 
    placeholder="Enter your password"
    secureTextEntry={true} 
    className="border border-gray-300 p-2 rounded-md mb-2 w-3/4"/>
    <Button className="bg-green-200 text-green-800 font-bold py-8 px-5 rounded" title="Submit" onPress={handleSubmit(onSubmit)}/>

    <Button
        title="Log In"
        onPress={() =>
            navigation.navigate('Login')   
        }
        className="bg-purple-800 text-white font-semibold py-2 px-4 border border-purple-800 rounded mt-2"
        />   
        </View> 
  );
}


export default SignUpScreen;