import React, { useState, Component} from 'react'
import { Button, StyleSheet, Text, TextInput, View, Alert, Pressable } from 'react-native';
import 'tailwindcss/tailwind.css';
import { isNameValid, isEmailValid, isPasswordValid } from './Validation/isValid'
import { Stack, useRouter } from "expo-router";
import "../../global.css"




export default function SignUp() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formErrors, setFormErrors] = useState({});


  const handleSubmit = async (event) => {
    

    const errors = {};

    if (isNameValid(name) !== "") {
      errors.name = isNameValid(name)
    }

    if (isEmailValid(email) !== "") {
      errors.email = isEmailValid(email)
    }

    if (isPasswordValid(password) !== "") {
      errors.password = isPasswordValid(password)
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      console.log(formErrors)
      return "not correct"
    }


    const userData = {
      "name": name,
      "email": email,
      "password": password

    }
    userString = JSON.stringify(userData)
    
    try {
      const response = await fetch("http://192.168.0.102:8080/users/signup", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: userString
      });

      if (response.ok) {
        const message = await response.text();
        if (message == "Email already exists") {
          alert("User already exsits. Please try with a different email.")
        } else {
          Alert.alert("Sign up", userData.name + ", you have successfully signed up!",
          [{
            text:'OK',
            onPress: () => 
            router.replace("(tabs)/login")
            }
          ])
        }
      } else {
        alert("Failed to add details. Please try again later")
      }
      
    } catch (error) {
      console.error('Error', error)
      alert('Error: ' + error.message);
    }
  };
  
  return (
    <View className="flex items-center justify-center h-full bg-purple-default">
      <Stack.Screen
      options={{title: "signup", headerleft: () => <></>}}
      />
    <Text className="text-l mb-4 text-white" >Sign Up here!</Text>
    
    <TextInput
    data-testid="nameInput" 
    placeholder="Enter your name"
    onChangeText={text => setName(text)}
    className="border border-white p-2 rounded-md mb-5 w-3/4 text-lg justify-centre"
    />
    {formErrors.name && <Text style={{ color: 'red' }}>{formErrors.name}</Text>}

    <TextInput
    data-testid="emailInput"
    placeholder="Enter your email" 
    onChangeText={text => setEmail(text)}
    className="border border-white p-2 rounded-md mb-5 w-3/4 text-lg justify-centre"/>
    {formErrors.email && <Text style={{ color: 'red' }}>{formErrors.email}</Text>}

    <TextInput 
    data-testid="passwordInput"
    placeholder="Enter your password"
    onChangeText={text => setPassword(text)}
    secureTextEntry={true} 
    className="border border-white p-2 rounded-md mb-5 w-3/4 text-lg justify-centre active:bg-slate-500"/>
    {formErrors.password && <Text style={{ color: 'red' }}>{formErrors.password}</Text>}
    <Pressable className="bg-dark 
    text-white font-semibold 
    py-2 px-20 border border-dark rounded mt-2
    hover:bg-slate-300
    active:bg-slate-500"  
    onPress={handleSubmit}>
    <Text className="text-lg text-white font-semibold" >Submit</Text>
    </Pressable>

    <Pressable className="bg-dark 
        text-white font-semibold 
        py-2 px-20 border border-dark rounded mt-2
        hover:bg-slate-300
        active:bg-slate-500"
        
        onPress={() =>
          router.replace("/login")}>
            <Text className="text-lg text-white font-semibold" >Log In</Text>
          </Pressable>

        </View> 
  );
}


