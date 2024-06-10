import React from "react";


export const fetchTransactions = async () => {
    const response = await fetch ("http://192.168.0.102:8080/users/login", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
    console.log("api is being called")
    const data = await response.json();
    return data;
};
