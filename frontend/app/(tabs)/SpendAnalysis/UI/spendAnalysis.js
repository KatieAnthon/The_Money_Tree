import React, { Component, useState, useEffect, useCallback } from "react"
import { Button, StyleSheet, Text, TextInput, View, Alert, Pressable } from 'react-native';
import 'tailwindcss/tailwind.css';
import PieChart from "react-native-pie-chart";
import Chartpie from "../Features/pieChart";
import { useFocusEffect } from '@react-navigation/native';
import UploadStatement from "../Features/uploadStatement";




const SpendAnalysis = ({ navigation, route }) => {
    const { userId } = route.params;
    const [dataCategories, setDataCategories] = useState([]);
    const [error, setError] = useState(null);

    console.log("user id ", userId)
  

    const fetchData = async () => {
        console.log("fetch data is called:")
        try {
            const response = await fetch("http://192.168.0.102:8080/spendanalysis/spendtotals", {
                method: 'GET',
            })
            if (response.ok) {
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
    }, [userId]);

    
return (
    <View className="flex items-center justify-center h-full bg-purple-default">
        <UploadStatement />
        < Chartpie datacategories={dataCategories} />
        <Pressable className= "bg-dark"
        onPress={() =>
        navigation.navigate("SpendHistory")} >
            <Text className="text-white font-semibold" >History</Text>
        </Pressable>
    </View>

)
}

export default SpendAnalysis;
