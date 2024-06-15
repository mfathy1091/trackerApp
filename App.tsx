import Home from '@screens/Home';
import React from 'react';
import { SafeAreaView, ScrollView, StatusBar } from 'react-native';

const App: React.FC = () => {
    return (
        <SafeAreaView>
            <StatusBar />
            <ScrollView contentInsetAdjustmentBehavior="automatic">
                <Home />
            </ScrollView>
        </SafeAreaView>
    );
};

export default App;
