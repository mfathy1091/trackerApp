import AccountsList from '@components/AccountsList';
import GearIcon from '@icons/gear.svg';
import PlusIcon from '@icons/plus.svg';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import theme from 'theme';
import HomeExpensesCard from '../components/HomeExpensesCard';

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
            <View style={styles.cardContainer}>
                <HomeExpensesCard />
            </View>
            <TouchableOpacity style={styles.addButton}>
                <PlusIcon width={50} height={50} />
            </TouchableOpacity>
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
    cardContainer: {
        marginHorizontal: 7,
        marginTop: 10,
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
    addButton: {
        position: 'absolute',
        bottom: 15,
        right: 15,
    },
});

export default HomeScreen;
