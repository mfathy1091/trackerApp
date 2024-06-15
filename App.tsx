import Home from '@screens/Home';
import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

const App: React.FC = () => {
    return (
        <SafeAreaView style={{ flex: 1, height: '100%', width: '100%' }}>
            <StatusBar />
            {/* <ScrollView contentInsetAdjustmentBehavior="automatic"> */}
            <Home />
            {/* </ScrollView> */}
        </SafeAreaView>
    );
};

export default App;
