import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './home/screens/Home';

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
            initialRouteName="HomeStack">
            <Stack.Screen name="HomeStack" component={HomeScreen} />
        </Stack.Navigator>
    );
};

export default AppNavigator;
