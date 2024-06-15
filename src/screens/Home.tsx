import AccountsList from '@components/AccountsList';
import GearIcon from '@icons/gear.svg';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import theme from 'theme';

const HomeScreen: React.FC = () => {
    return (
        <View style={styles.container}>
            <View style={styles.accountsContainer}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>List of accounts</Text>
                    <GearIcon />
                </View>
                <AccountsList />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.color.lightGrey,
        flex: 1,
        width: '100%',
        height: '100%',
    },
    accountsContainer: {
        backgroundColor: 'white',
    },
    titleContainer: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 10,
    },
    title: {
        fontSize: 18,
        fontFamily: theme.font.quicksand.regular,
        color: theme.color.black,
    },
});

export default HomeScreen;
