import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '@homeNav/screens/Home';

const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
    return (
        <>
            <Stack.Navigator
                screenOptions={() => ({
                    headerShown: false,
                    animation: 'none',
                    gestureEnabled: true,
                    gestureDirection: 'horizontal',
                    gestureResponseDistance: { start: 0, end: 20 },
                })}
                initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
            </Stack.Navigator>
        </>
    );
};

export default HomeNavigator;
