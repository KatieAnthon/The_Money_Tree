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
    <Text className="text-l mb-4 text-white" >Sign Up here!</Text>
    <TextInput placeholder="Enter your name" className="border border-white p-2 rounded-md mb-2 w-3/4 text-lg"/>
    <TextInput placeholder="Enter your email" className="border border-white p-2 rounded-md mb-2 w-3/4 text-lg"/>
    <TextInput 
    placeholder="Enter your password"
    secureTextEntry={true} 
    className="border border-white p-2 rounded-md mb-2 w-3/4 text-lg justify-centre"/>
    <Button className="bg-dark text-white font-bold py-8 px-5 rounded" title="Submit" onPress={handleSubmit(onSubmit)}/>

    <Button
        title="Log In"
        onPress={() =>
            navigation.navigate('Login')   
        }
        className="bg-dark text-white font-semibold py-2 px-4 border border-dark rounded mt-2"
        />   
        </View> 
  );
}


export default SignUpScreen;