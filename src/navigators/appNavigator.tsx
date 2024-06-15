import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeNavigator from './home/homeNavigator';

const Stack = createNativeStackNavigator();
const AppNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={() => ({
                headerShown: false,
                animation: 'fade',
                gestureEnabled: true,
                gestureDirection: 'horizontal',
                gestureResponseDistance: { start: 0, end: 20 },
            })}
            initialRouteName="HomeNavigator">
            <Stack.Screen name="HomeNavigator" component={HomeNavigator} />
        </Stack.Navigator>
    );
};

export default AppNavigator;
