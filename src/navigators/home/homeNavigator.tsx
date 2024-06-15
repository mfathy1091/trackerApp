import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from './screens/Home';

const Drawer = createDrawerNavigator();

const HomeNavigator = () => {
    return (
        <>
            <Drawer.Navigator initialRouteName="RecordsList">
                <Drawer.Screen name="Home" component={HomeScreen} />
            </Drawer.Navigator>
        </>
    );
};

export default HomeNavigator;
