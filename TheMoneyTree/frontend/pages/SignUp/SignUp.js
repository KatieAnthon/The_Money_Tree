import React, { useState, Component} from 'react'
import { Button, StyleSheet, Text, TextInput, View, Alert } from 'react-native';
import { useForm, Controller, useFormState } from 'react-hook-form';
import 'tailwindcss/tailwind.css';
import { isNameValid, isEmailValid, isPasswordValid } from './Validation/isValid'



const SignUpScreen = ({navigation}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formErrors, setFormErrors] = useState({});


  const handleSubmit = async (event) => {
    event.preventDefault();

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
              navigation.navigate('LogIn')
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
    <View className="flex items-center justify-center h-full bg-purple">
    <Text className="text-l mb-4 text-white" >Sign Up here!</Text>
    
    <TextInput 
    placeholder={"Enter your name"}
    onChangeText={text => setName(text)}
    className="border border-white p-2 rounded-md mb-2 w-3/4 text-lg"
    />
    {formErrors.name && <Text style={{ color: 'red' }}>{formErrors.name}</Text>}

    <TextInput 
    placeholder="Enter your email" 
    onChangeText={text => setEmail(text)}
    className="border border-white p-2 rounded-md mb-2 w-3/4 text-lg"/>
    {formErrors.email && <Text style={{ color: 'red' }}>{formErrors.email}</Text>}

    <TextInput 
    placeholder="Enter your password"
    onChangeText={text => setPassword(text)}
    secureTextEntry={true} 
    className="border border-white p-2 rounded-md mb-2 w-3/4 text-lg justify-centre"/>
    {formErrors.password && <Text style={{ color: 'red' }}>{formErrors.password}</Text>}
    <Button className="bg-dark text-white font-bold py-8 px-5 rounded" title="Submit" onPress={handleSubmit}/>

    <Button
        title="Log In"
        onPress={() =>
            navigation.navigate('LogIn')   
        }
        className="bg-dark text-white font-semibold py-2 px-4 border border-dark rounded mt-2"
        />   
        </View> 
  );
}


export default SignUpScreen;