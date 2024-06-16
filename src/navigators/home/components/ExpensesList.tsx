import ExpenseTile from '@components/ExpenseTile';
import { useGetTransactions } from 'queries/expenseQuery';
import React from 'react';
import { View } from 'react-native';

const ExpensesList: React.FC = () => {
    const transactionsQuery = useGetTransactions();

    return (
        <View>
            {transactionsQuery?.data?.data?.map((transaction, i) => (
                <ExpenseTile key={i} transaction={transaction} />
            ))}
        </View>
    );
};

export default ExpensesList;
