import { apiGetTransactions } from '@api/apiClient';
import ExpenseTile from '@components/ExpenseTile';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';

const ExpensesList: React.FC = () => {
    const [transactions, setTransactions] = useState([{}]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const response = await apiGetTransactions();
        const data = await response.data;
        setTransactions(data);
    };

    return (
        <View>
            {transactions?.map((transaction, i) => (
                <ExpenseTile key={i} transaction={transaction} />
            ))}
        </View>
    );
};

export default ExpensesList;
