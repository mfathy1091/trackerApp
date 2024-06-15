import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import theme from '../theme';

const ExpenseTile = ({ transaction }) => {
    let color;
    let amountText = `EGP ${transaction.amount}`;
    switch (transaction?.type) {
        case 'credit':
            color = theme.color.green;
            break;
        case 'debit':
            color = theme.color.red;
            amountText = `-${amountText}`;
            break;
    }
    return (
        <View style={{ alignItems: 'center' }}>
            <View style={styles.container}>
                <View style={styles.left}>
                    <FastImage
                        style={styles.categoryIcon}
                        source={{
                            uri: transaction?.category?.icon,
                            priority: FastImage.priority.normal,
                        }}
                        resizeMode={FastImage.resizeMode.contain}
                    />
                    <View style={{ marginLeft: 15 }}>
                        <Text style={styles.categoryName}>{transaction?.category?.name}</Text>
                        <Text style={styles.accountName}>{transaction?.account?.name}</Text>
                    </View>
                </View>
                <View style={styles.right}>
                    <Text style={{ color: color, ...theme.text.inputText }}>{amountText}</Text>
                    <Text style={styles.date}>{transaction?.date}</Text>
                </View>
            </View>
            <View style={styles.separator}></View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 65,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
    },
    left: { flexDirection: 'row', alignItems: 'center' },
    right: { alignItems: 'flex-end' },
    separator: { height: 1, width: '95%', backgroundColor: theme.color.strokeButton },
    categoryName: {
        color: theme.color.black,
        ...theme.text.inputText,
    },
    categoryIcon: { height: 37, width: 37 },
    accountName: {
        color: theme.color.grey,
        ...theme.text.inputText,
    },
    amount: {},
    date: {
        color: theme.color.grey,
        ...theme.text.inputText,
    },
});

export default ExpenseTile;
