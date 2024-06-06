import React, { useState, Component, useEffect } from 'react'
import { Button, StyleSheet, Text, TextInput, View, Pressable, FlatList } from 'react-native';
import { useNavigate } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import "../../../../global.css"
import { fetchTransactions } from '../../../../api/api';


const TransactionsList = ({navigation, route}) => {
    // const { userId } = route.params;
    const [transactions, setTransactions] = useState([]);
    const [error, setError] = useState(null)

    useEffect(() => {
        
        const getData = async () => {
            try {
                const response = await fetchTransactions();
                setTransactions(response)
            } catch (error) {
                console.log("error", error)
                setError(error)
                alert('Error' + error.message);
            }
        };
        getData();

        }, [])

        


return (
    <View className="flex items-center justify-center h-full bg-purple-default">
    <Text className="text-l mb-5 text-white" >History</Text>
    <FlatList
    keyExtractor={(item) => item.id}
    data={transactions}
    renderItem={({ item }) => (
        <Text >{item.date}: {item.name}: {item.amount}: {item.currency}</Text>
        )}
        />
    </View>
)
    }

export default TransactionsList;