import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useForm, Controller, useFormState } from 'react-hook-form';

const SignUpScreen = ({navigation}) => {
  const {control, handleSubmit} = useForm();
  const (userData, applyUserData) = useState("");


  const onSubmit = (event) => {
    console.log(event)
  };


  return (
    <View style={styles.container}>
    <Text style={styles.title}>Sign Up!</Text>
    <Controller
    control = {control}
    name="fieldname"
    render={({field}) => (
      <><TextInput
        {...name}
        style={styles.input}
        placeholder="Enter your name" /><TextInput
          {...email}
          style={styles.input}
          placeholder='Enter your email' /><TextInput
          {...password}
          style={styles.passwordInput}
          placeholder='Enter your password' /></>
      )}
      />
    <Button title="Submit" onPress={handleSubmit(onSubmit)}/>

    <Button
        title="Log In"
        onPress={() =>
            navigation.navigate('Login')   
        }
        />   
        </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
    width: '70%',
  },
  passwordInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
    width: '70%',
  },
});

export default SignUpScreen;