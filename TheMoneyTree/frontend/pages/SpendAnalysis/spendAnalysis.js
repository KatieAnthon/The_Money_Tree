import React, { Component } from "react"
import { Button, StyleSheet, Text, TextInput, View, Alert } from 'react-native';
import { useForm, Controller, useFormState } from 'react-hook-form';
import 'tailwindcss/tailwind.css';
import PieChart from "react-native-pie-chart";
import Chartpie from "./pieChart";



const spendAnalysis = () => {
    return (

        <View className="flex items-center justify-center h-full bg-purple">
        <Text className="text-l mb-4 text-white" >Spend!</Text>
        < Chartpie />
        </View>
    
    )
}

export default spendAnalysis;
