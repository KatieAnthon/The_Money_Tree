import React, { useState, Component, useEffect } from 'react'
import { Button, StyleSheet, Text, TextInput, View, Pressable, FlatList, Dimensions } from 'react-native';
import { useNavigate } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import "../../../../global.css"
import { fetchTransactions } from '../../../../api/transactionsApi';
import { Stack } from 'expo-router';
import 'react-native-reanimated'
import 'react-native-gesture-handler'
import { MotiView } from 'moti';




export default TransactionsList = () => {
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

        const Item = ({ item, index }) => {
            return (
                <MotiView
                style={styles.listContainer}
                from={{ opacity: 0, translateY: 50 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ delay: 1000 + index * 200 }}
              >
                <View style={styles.rowContainer}>
                  <View style={[styles.columnContainer, styles.dateColumn]}>
                    <Text style={styles.text}>{item.date}</Text>
                  </View>
                  <View style={[styles.columnContainer, styles.nameColumn]}>
                    <Text style={styles.text}>£{item.name}</Text>
                  </View>
                  <View style={[styles.columnContainer, styles.amountColumn]}>
                    <Text style={styles.text}>{item.amount}</Text>
                  </View>
                  <View style={[styles.columnContainer, styles.currencyColumn]}>
                    <Text style={styles.text}>{item.currency}</Text>
                  </View>
                </View>
              </MotiView>
            );
          }
        

return (
    <View className="flex items-center justify-center h-full bg-purple-default">
        <Stack.Screen options={{ title: "History" }} />
    <Text className="text-l mb-5 text-white" >History</Text>
    <FlatList
    keyExtractor={(item) => item.id}
    data={transactions}
    renderItem={({ item, index }) => (
        <Item item={item} index={index} />
        )}
        />
    </View>
)
    }

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#62a839',
          },
          title: {
            fontSize: 20,
            marginBottom: 10,
            color: "white",
          },
          listContainer: {
            width: Dimensions.get('window').width - 20,
            margin: 9,
            borderWidth: 1,
            backgroundColor: "#69096e",
            borderColor: '#69096e',
            borderRadius: 15,
          },
          rowContainer: {
            flexDirection: 'row',
            width: "100%",
            color: "#f2baf5",
          },
          columnContainer: {
            flex: 1,
            padding: 15,
            alignItems: 'center',
            justifyContent: 'center',
          },
          text: {
            fontSize: 14,
            color: "white",
          },
          dateColumn: {
            width: Dimensions.get('window').width / 4,
          },
          nameColumn: {
            width: Dimensions.get('window').width / 4,
          },
          amountColumn: {
            width: Dimensions.get('window').width / 4,
          },
          currencyColumn: {
            width: Dimensions.get('window').width / 4,
          },
        });
        

