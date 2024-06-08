import ExpensesListScreen from '@screens/ExpensesList';
import React from 'react';
import { SafeAreaView, ScrollView, StatusBar } from 'react-native';

const App: React.FC = () => {
    return (
        <SafeAreaView>
            <StatusBar />
            <ScrollView contentInsetAdjustmentBehavior="automatic">
                <ExpensesListScreen />
            </ScrollView>
        </SafeAreaView>
    );
};

export default App;
