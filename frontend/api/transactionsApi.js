import React from "react";


export const fetchTransactions = async () => {
    const response = await fetch("http://192.168.0.102:8080/spendanalysis/spendhistory");
    console.log("api is being called")
    const data = await response.json();
    return data;
};
