import 'react-native-gesture-handler';

import AppNavigator from '@navigators/appNavigator';
import { NavigationContainer, createNavigationContainerRef } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';

const App: React.FC = () => {
    const queryClient = new QueryClient();
    const navigationRef = createNavigationContainerRef();

    return (
        <QueryClientProvider client={queryClient}>
            <NavigationContainer ref={navigationRef}>
                <AppNavigator />
            </NavigationContainer>
        </QueryClientProvider>

        // <SafeAreaView style={{ flex: 1, height: '100%', width: '100%' }}>
        //     <StatusBar />
        //     {/* <ScrollView contentInsetAdjustmentBehavior="automatic"> */}
        //     <Home />
        //     {/* </ScrollView> */}
        // </SafeAreaView>
    );
};

export default App;
