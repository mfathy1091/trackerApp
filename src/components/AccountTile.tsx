import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import theme from '../theme';

const AccountTile = ({ account }) => {
    let balanceText = account?.balance >= 0 ? `EGP ${account?.balance}` : `-EGP ${account?.balance}`;

    return (
        <View style={{ padding: 2, width: '50%' }}>
            <View style={styles.container}>
                <Text style={styles.accountName}>{account?.name}</Text>
                <Text style={styles.balanceText}>{balanceText}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 5,
        backgroundColor: theme.color.darkBlue,
        borderRadius: 4,
    },
    accountName: {
        color: theme.color.offWhite,
        fontSize: 15,
        fontFamily: theme.font.quicksand.regular,
    },
    balanceText: {
        color: theme.color.white,
        fontSize: 17,
        fontFamily: theme.font.quicksand.regular,
    },
});

export default AccountTile;
