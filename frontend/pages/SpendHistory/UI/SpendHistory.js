import React, { useState, Component} from 'react'
import { Button, StyleSheet, Text, TextInput, View, Pressable } from 'react-native';
import { useNavigate } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
// import "../../../global.css"

const SpendHistory = ({navigation, route}) => {
    const { userId } = route.params;
    const [histories, setHistory] = useState([])
    const [error, setError] = useState(null)

    const fetchHistory = async () => {
        try {
            const response = await fetch("http://192.168.0.102:8080/spendhistory", {
                method: 'GET',
            })

            if (response.ok) {
                const spend = await response.json()
                setHistory(spend)
            } else {
                alert("data has not been refreshed")
            }
        } catch (error) {
            setError(error)
            alert('Error' + error.message);
        }
        

    }


return (
    <View className="flex items-center justify-center h-full bg-purple-default">
    <Text className="text-l mb-5 text-white" >History</Text>
    <div className="flex">
        {entries.map((entry) => (
            key ={entry._id}
            date = {entry.date}
        ))}

    </div>
    
    </View>
    );
}

export default SpendHistory;