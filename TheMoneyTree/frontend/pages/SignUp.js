import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useForm, Controller, useFormState } from 'react-hook-form';
import { styled } from "nativewind";



const StyledText = styled(Text);
const StyledView = styled(View);
const StyledTextInput = styled(TextInput)


const SignUpScreen = ({navigation}) => {
  const {control, handleSubmit} = useForm();
  const {userData, applyUserData} = useState("");


  const onSubmit = (event) => {
    console.log(event)
  };


  return (
    <StyledView className="flex-1">
    <StyledText tw="font-bold">Sign Up here!</StyledText>
    <Controller
    control = {control}
    name="fieldname"
    render={({field}) => (
      <><StyledTextInput
        {...field}
        style={styles.input}
        placeholder="Enter your name" /><StyledTextInput
          {...field}
          style={styles.input}
          placeholder='Enter your email' /><StyledTextInput
          {...field}
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
        </StyledView> 
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