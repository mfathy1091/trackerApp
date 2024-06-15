import { apiGetTransactions } from '@api/apiClient';
import ExpenseTile from '@components/ExpenseTile';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import theme from 'theme';

const HomeExpensesCard: React.FC = () => {
    const [transactions, setTransactions] = useState([{}]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const response = await apiGetTransactions();
        const data = await response.data;
        setTransactions(data.slice(0, 5));
    };

    return (
        <View style={styles.container}>
            <View style={styles.HeaderConatainer}>
                <Text style={styles.title}>Last records</Text>
            </View>
            {transactions?.map((transaction, i) => (
                <ExpenseTile key={i} transaction={transaction} last={transactions.length - 1 === i} />
            ))}
            <TouchableOpacity style={styles.moreButton}>
                <Text style={styles.moreButtonText}>SHOW MORE</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderRadius: 5,
    },
    HeaderConatainer: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 16,
    },
    title: {
        fontSize: 18,
        fontFamily: theme.font.quicksand.regular,
        color: theme.color.black,
    },
    moreButton: {
        padding: 7,
        margin: 10,
        alignSelf: 'flex-start',
    },
    moreButtonText: {
        fontFamily: theme.font.quicksand.regular,
        fontSize: 15,
        color: theme.color.darkBlue,
    },
});

export default HomeExpensesCard;
