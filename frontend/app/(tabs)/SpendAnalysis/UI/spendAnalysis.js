import React, { Component, useState, useEffect, useCallback } from "react"
import { Button, StyleSheet, Text, TextInput, View, Alert, Pressable } from 'react-native';
import 'tailwindcss/tailwind.css';
import PieChart from "react-native-pie-chart";
import Chartpie from "../Features/pieChart";
import { useFocusEffect } from '@react-navigation/native';
import UploadStatement from "../Features/uploadStatement";
import { Stack, useRouter } from "expo-router";



const SpendAnalysis = () => {
    const router = useRouter();
    const [dataCategories, setDataCategories] = useState([]);
    const [error, setError] = useState(null);
  

    const fetchData = async () => {
        console.log("fetch data is called:")
        try {
            const response = await fetch("http://192.168.0.102:8080/spendanalysis/spendtotals", {
                method: 'GET',
            })
            if (response) {
                const data = await response.json()
                console.log('Response Data:', data); 
                setDataCategories(data)
                console.log("data categories:", dataCategories)
            } else {
                alert("Error loading data, please try again")
            }
        } catch (error) {
            console.error('Error', error)
            setError(error)
            alert('Error' + error.message);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    
return (
    <View className="flex items-center justify-center h-full bg-purple-default">
        
        <Stack.Screen options={{ title: "Spend Analysis" }} />
        <UploadStatement />
        < Chartpie datacategories={dataCategories} />
        <Pressable className= "bg-dark"
        onPress={() =>
            router.replace("../../SpendHistory/UI/transactionsList")} >
            <Text className="text-white font-semibold" >History</Text>
        </Pressable>
    </View>

)
}

export default SpendAnalysis;
