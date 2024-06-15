import AccountsList from '@components/AccountsList';
import GearIcon from '@icons/gear.svg';
import { StyleSheet, Text, View } from 'react-native';
import theme from 'theme';

const HomeScreen: React.FC = () => {
    return (
        <View>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>List of accounts</Text>
                <GearIcon />
            </View>
            <AccountsList />
        </View>
    );
};

const styles = StyleSheet.create({
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
