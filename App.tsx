import AppNavigator from '@navigators/appNavigator';
import { NavigationContainer, createNavigationContainerRef } from '@react-navigation/native';
import React from 'react';

const App: React.FC = () => {
    const navigationRef = createNavigationContainerRef();
    return (
        <NavigationContainer ref={navigationRef}>
            <AppNavigator />
        </NavigationContainer>

        // <SafeAreaView style={{ flex: 1, height: '100%', width: '100%' }}>
        //     <StatusBar />
        //     {/* <ScrollView contentInsetAdjustmentBehavior="automatic"> */}
        //     <Home />
        //     {/* </ScrollView> */}
        // </SafeAreaView>
    );
};

export default App;
