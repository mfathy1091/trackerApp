import { apiGetAccounts } from '@api/apiClient';
import AccountTile from '@components/AccountTile';
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

const AccountsList: React.FC = () => {
    const [accounts, setAccounts] = useState([{}]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const response = await apiGetAccounts();
        const data = await response.data;
        setAccounts(data);
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={accounts}
                renderItem={({ item }) => <AccountTile account={item} />}
                keyExtractor={item => item?.id}
                numColumns={2}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 6,
        marginHorizontal: 6,
    },
});

export default AccountsList;
