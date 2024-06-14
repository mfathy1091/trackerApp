import { apiGetTransactions } from '@api/apiClient';
import ExpenseTile from '@components/ExpenseTile';
import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const ExpensesListScreen: React.FC = () => {
    const [transactions, setTransactions] = useState([{}]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        let response;
        try {
            response = await apiGetTransactions();
            const data = await response.data;
            setTransactions(data);
        } catch (error) {
            console.log('------------', error);
        }
    };

    return (
        <View>
            {transactions?.map((transaction, i) => (
                <ExpenseTile key={i} transaction={transaction} />
            ))}

            <TouchableOpacity onPress={() => fetchData()} style={{ height: 50, width: 100, backgroundColor: 'red' }}>
                <Text>Fetch</Text>
            </TouchableOpacity>
        </View>
    );
};

export default ExpensesListScreen;
