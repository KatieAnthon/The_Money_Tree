import React, { useState, Component, useEffect } from 'react'
import { Button, StyleSheet, Text, TextInput, View, Pressable, FlatList } from 'react-native';
import { useNavigate } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
// import "../../../global.css"
import { fetchTransactions } from '../../../api/api';


const TransactionsList = ({navigation, route}) => {
    // const { userId } = route.params;
    const [transactions, setTransactions] = useState([]);
    const [error, setError] = useState(null)

    useEffect(() => {
        const Transactions = async () => {
            try {
                const response = await fetchTransactions();
                

                if (response.ok) {
                    const spend = await response.json()
                    setTransactions(spend)
                    console.log("spend is set")
                } else {
                    alert("data has not been refreshed")
                }
            } catch (error) {
                setError(error)
                alert('Error' + error.message);
            }
        }

        }, [])


return (
    <View className="flex items-center justify-center h-full bg-purple-default">
    <Text className="text-l mb-5 text-white" >History</Text>
    <FlatList
    data={transactions}
    keyExtractor={(item) => item.id}
    renderItem={({item}) => (
    <View>
        <Text>
        {item.date}: {item.name} : {item}
    </Text> 
    </View>
)}
    />
       
    
    </View>
    );
}

export default TransactionsList;