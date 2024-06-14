import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import theme from '../theme';

const ExpenseTile = ({ transaction }) => {
    const color = transaction.type === 'credit' ? theme.color.moderateBlue : theme.color.earthyRed;
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row' }}>
                <Text>Icon</Text>
                <Text style={{ width: 66 }}>{transaction?.category?.name}</Text>
                <Text style={{ width: 66 }}>{transaction?.account?.name}</Text>
            </View>
            <Text style={{ color: color, ...theme.text.inputText }}>{transaction?.amount}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 51,
        width: '100%',
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
    },
});

export default ExpenseTile;
